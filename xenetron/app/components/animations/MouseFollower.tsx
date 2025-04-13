// components/animations/MouseFollower.tsx
"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  // Keep a reference to the follower element
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Create cursor follower element
    const follower = document.createElement("div");
    follower.className = "cursor-follower";
    document.body.appendChild(follower);
    
    // Store the reference
    followerRef.current = follower;

    const onMouseMove = (e: MouseEvent) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      if (!followerRef.current) return;
      
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("[data-hover]")) {
        followerRef.current.style.width = "60px";
        followerRef.current.style.height = "60px";
        followerRef.current.style.backgroundColor = "rgba(255, 51, 102, 0.2)";
      }
    };

    const onMouseOut = () => {
      if (!followerRef.current) return;
      
      followerRef.current.style.width = "40px";
      followerRef.current.style.height = "40px";
      followerRef.current.style.backgroundColor = "rgba(255, 51, 102, 0.5)";
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
      
      if (followerRef.current && document.body.contains(followerRef.current)) {
        document.body.removeChild(followerRef.current);
      }
      followerRef.current = null;
    };
  }, []);

  return null;
}