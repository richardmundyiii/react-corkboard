import React, { useState, useRef } from "react";

const ImageElement = ({ id, url, x, y, moveImage, containerRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newX = Math.min(
        Math.max(e.clientX - offset.x, containerRect.left),
        containerRect.right - ref.current.clientWidth
      );
      const newY = Math.min(
        Math.max(e.clientY - offset.y, containerRect.top),
        containerRect.bottom - ref.current.clientHeight
      );
      moveImage(id, newX - containerRect.left, newY - containerRect.top);
    }
  };

  return (
    <img
      ref={ref}
      src={url}
      alt=""
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity: isDragging ? 0.5 : 1,
        userSelect: "none",
        cursor: "grab",
        height: "10vmin",
      }}
    />
  );
};

export default ImageElement;
