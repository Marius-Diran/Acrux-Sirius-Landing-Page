import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < 220; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.3 + 0.05,
          drift: (Math.random() - 0.5) * 0.08,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.a += s.speed * 0.012;
        if (s.a > 1) s.a = 0;
        s.x += s.drift;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        const alpha = Math.abs(Math.sin(s.a * Math.PI));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        const color =
          s.r > 1.1
            ? `rgba(188,254,227,${alpha * 0.7})`
            : `rgba(205,147,255,${alpha * 0.5})`;
        ctx.fillStyle = color;
        ctx.fill();
      });
      animationId = requestAnimationFrame(drawStars);
    }

    const handleResize = () => {
      resize();
      initStars();
    };

    resize();
    initStars();
    drawStars();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars-canvas"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
