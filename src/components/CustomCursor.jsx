import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`;
        dotRef.current.style.top = `${e.clientY - 3}px`;
      }
    };

    const animate = () => {
      if (cursorRef.current) {
        dotPos.current.x += (pos.current.x - dotPos.current.x) * 0.15;
        dotPos.current.y += (pos.current.y - dotPos.current.y) * 0.15;
        cursorRef.current.style.left = `${dotPos.current.x - 12}px`;
        cursorRef.current.style.top = `${dotPos.current.y - 12}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const addHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    rafRef.current = requestAnimationFrame(animate);
    setTimeout(addHover, 1000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: '#00e5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'transform 0.05s ease',
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: isHovering ? '40px' : '24px',
          height: isHovering ? '40px' : '24px',
          border: `2px solid ${isHovering ? '#00e5ff' : 'rgba(0,229,255,0.7)'}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease',
          background: isHovering ? 'rgba(0,229,255,0.1)' : 'transparent',
          boxShadow: isHovering ? '0 0 15px rgba(0,229,255,0.5)' : 'none',
        }}
      />
    </>
  );
}
