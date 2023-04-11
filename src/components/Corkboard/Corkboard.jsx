import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import ImageElement from "../ImageElement/ImageElement";

const Corkboard = ({ images, moveImage }) => {
  const containerRef = useRef(null);
  const [, drop] = useDrop(() => ({
    accept: "image",
  }));

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        drop(node);
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {images.map((image, index) => (
        <ImageElement
          key={index}
          id={index}
          url={image.url}
          x={image.x}
          y={image.y}
          moveImage={moveImage}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
};

export default Corkboard;
