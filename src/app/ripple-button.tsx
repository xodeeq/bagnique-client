"use client";

import React, { MutableRefObject, useEffect, useRef } from "react";

function RippleButton(props: any) {
  const buttonRef: MutableRefObject<HTMLButtonElement | undefined> = useRef();
  function rippleEffect(event: any) {
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  }

  useEffect(() => {
    let button = buttonRef.current;
    button?.addEventListener("click", rippleEffect);
    return () => button?.removeEventListener("click", rippleEffect);
  }, []);

  return (
    <button
      {...props}
      className={
        "group min-w-max overflow-hidden relative hover:bg-opacity-90 transition-all duration-200 " +
        props.className
      }
      ref={buttonRef}
    >
      {props.children}
      {/* shine box */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
    </button>
  );
}

export default RippleButton;
