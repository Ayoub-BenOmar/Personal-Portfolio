import React, { useEffect, useRef, useState } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('clickable') ||
        target.classList.contains('project-title-btn') ||
        target.classList.contains('carousel-arrow') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setHovered(isClickable);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`custom-cursor ${hovered ? 'hovered' : ''}`} />
      <div ref={followerRef} className={`custom-cursor-follower ${hovered ? 'hovered' : ''}`} />
    </>
  );
}
