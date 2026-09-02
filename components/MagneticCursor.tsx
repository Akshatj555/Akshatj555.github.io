'use client';
import { useEffect, useRef } from 'react';
import styles from './MagneticCursor.module.css';

export default function MagneticCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Hide on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    let mx = 0, my = 0; // actual mouse
    let rx = 0, ry = 0; // ring position (lagged)
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top  = `${my}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      ring.style.width  = '60px';
      ring.style.height = '60px';
      ring.style.opacity = '0.3';
      dot.style.transform = 'translate(-50%, -50%) scale(0)';
    };

    const onLeave = () => {
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.6';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf = requestAnimationFrame(tick);
    dot.style.opacity  = '1';
    ring.style.opacity = '0.6';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
