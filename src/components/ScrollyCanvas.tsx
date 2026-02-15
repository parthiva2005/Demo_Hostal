"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Load images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      // Assuming 89 frames as per description
      const frameCount = 89; 

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // Pad zero to 2 digits: 00, 01, ... 88
        const frameIndex = i.toString().padStart(2, "0");
        img.src = `/sequence/frame_${frameIndex}_delay-0.067s.webp`;
        await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = (e) => {
                console.error(`Failed to load frame ${i}`, e);
                // Resolve anyway to continue loading other frames, 
                // or we could reject if strict consistency is needed.
                // For a background effect, missing a frame is acceptable vs crashing.
                resolve(null); 
            };
        });
        loadedImages.push(img);
      }
      setImages(loadedImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Initial draw and resize handler
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.3; // Requirement: 30% opacity
      ctx.drawImage(
        img,
        x,
        y,
        img.width * scale,
        img.height * scale
      );
    };

    // Draw first frame immediately
    renderFrame(0);

    const handleResize = () => requestAnimationFrame(() => renderFrame(0)); // Or current frame if we tracked it better in state, but 0 is safe fallback for resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, images]);

  // Scroll animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      images.length - 1,
      Math.floor(latest * (images.length - 1))
    );

    const img = images[frameIndex];
    if (!img) return;

    // We rely on canvas dimensions being set by resize handler or initial draw
    // Re-calculating scale here for smoothness
    const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
    );
     const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

    requestAnimationFrame(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.3;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    });
  });

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] h-full w-full bg-background object-cover"
    />
  );
}
