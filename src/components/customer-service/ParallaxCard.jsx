import React, { useEffect, useState, useRef } from "react";
import { ParallaxHover } from "react-parallax-hover";

export const ParallaxCard = ({ cardImgSrc, cardTitle, cardSubtitle }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth ?? 0);
    }
    window.addEventListener("resize", () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth ?? 0);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth ?? 0);
        }
      });
    };
  }, []);
  return (
    <div ref={containerRef} className="w-100">
      <ParallaxHover
        borderRadius={5}
        height={window.innerWidth < 1000 ? 250 : 350}
        scale={5}
        width={containerWidth}
      >
        <img
          alt="Demo image"
          style={{ width: "100%", height: "100%" }}
          src={cardImgSrc}
          // src="https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2020/08/cms-banner-01.jpg"
        />
        <span className="static-text parallax-static-text">{cardTitle}</span>
        <span className="static-text2 parallax-static-text2">{cardSubtitle}</span>
      </ParallaxHover>
    </div>
  );
};
