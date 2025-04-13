// components/animations/MouseFollower.tsx
"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Create cursor follower element
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.appendChild(follower);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("[data-hover]")) {
        setIsHovering(true);
        follower.style.width = "60px";
        follower.style.height = "60px";
        follower.style.backgroundColor = "rgba(255, 51, 102, 0.2)";
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
      follower.style.width = "40px";
      follower.style.height = "40px";
      follower.style.backgroundColor = "rgba(255, 51, 102, 0.5)";
    };

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.body.removeChild(follower);
    };
  }, []);

  return null;
}