import { useRef } from "react";

export function useTilt(maxDeg = 12, scaleFactor = 1.02) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) scale3d(${scaleFactor},${scaleFactor},${scaleFactor})`;
    el.style.boxShadow = `${-x * 16}px ${y * 16}px 40px rgba(212,175,55,0.15), 0 8px 32px rgba(0,0,0,0.08)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    el.style.boxShadow = "";
  };

  return { ref, onMouseMove, onMouseLeave };
}
