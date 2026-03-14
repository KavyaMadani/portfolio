"use client";

import { useEffect, useRef } from "react";

interface ParticleProps {
  color?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

export function Particles({
  color = "#ffffff",
  quantity = 100,
  staticity = 50,
  ease = 50,
}: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    
    // Add mouse move listener
    window.addEventListener("mousemove", (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      circles.current.length = 0;
      canvasSize.current.w = canvasRef.current.parentElement.offsetWidth;
      canvasSize.current.h = canvasRef.current.parentElement.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current?.scale(dpr, dpr);
    }
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      const x = Math.floor(Math.random() * canvasSize.current.w);
      const y = Math.floor(Math.random() * canvasSize.current.h);
      const translateX = 0;
      const translateY = 0;
      const size = Math.floor(Math.random() * 2) + 0.5;
      const alpha = 0;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.2;
      const dy = (Math.random() - 0.5) * 0.2;
      const magnetism = 0.1 + Math.random() * 4;
      circles.current.push({
        x,
        y,
        translateX,
        translateY,
        size,
        alpha,
        targetAlpha,
        dx,
        dy,
        magnetism,
      });
    }
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle: any, i: number) => {
      // Logic for movement and interaction
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left edge
        canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right
        circle.y + circle.translateY - circle.size, // distance from top
        canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom
      ];
      
      const isOutOfBounds = edge.some((e) => e < 0);

      if (isOutOfBounds) {
        circle.x = Math.floor(Math.random() * canvasSize.current.w);
        circle.y = Math.floor(Math.random() * canvasSize.current.h);
        circle.translateX = 0;
        circle.translateY = 0;
      }
      
      circle.translateX += circle.dx;
      circle.translateY += circle.dy;
      circle.alpha += (circle.targetAlpha - circle.alpha) * 0.02;

      drawCircle(circle, true);
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
