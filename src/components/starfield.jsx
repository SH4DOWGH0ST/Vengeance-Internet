import React, { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate random stars
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      alpha: Math.random(),
      alphaSpeed: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      // Deep black-purple background color
      ctx.fillStyle = '#05010a';
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        star.alpha += star.alphaSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.alphaSpeed = -star.alphaSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${star.alpha})`; // Neon purple glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#a855f7';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
    />
  );
}
