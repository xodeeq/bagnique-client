"use client";

// imports
import React from "react";
import { createPortal } from "react-dom";

import Portal from "@/app/portal";

function Popup(props: any) {
  // set up active state
  const [active, setActive] = React.useState(false);
  // get spread props out variables
  const { open, onClose, locked } = props;
  // Make a reference to the backdrop
  const backdrop = React.useRef(null);

  // on mount
  React.useEffect(() => {
    // get dom element from backdrop
    const { current } = backdrop;
    // when transition ends set active state to match open prop
    const transitionEnd = () => setActive(open);
    // when esc key press close modal unless locked
    const keyHandler = (e: any) =>
      !locked && [27].indexOf(e.which) >= 0 && onClose();
    // when clicking the backdrop close modal unless locked
    const clickHandler = (e: any) =>
      !locked && e.target === current && onClose();

    // if the backdrop exists set up listeners
    if (current) {
      (current as HTMLDivElement).addEventListener(
        "transitionend",
        transitionEnd
      );
      (current as HTMLDivElement).addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    // if open props is true add inert to #root
    // and set active state to true
    if (open) {
      window.setTimeout(() => {
        (document.activeElement as HTMLElement).blur();
        setActive(open);
        document.querySelector("#root")?.setAttribute("inert", "true");
      }, 10);
    }

    // on unmount remove listeners
    return () => {
      if (current) {
        (current as HTMLDivElement).removeEventListener(
          "transitionend",
          transitionEnd
        );
        (current as HTMLDivElement).removeEventListener("click", clickHandler);
      }

      document.querySelector("#root")?.removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);
  return (
    <React.Fragment>
      {open && active && (
        <Portal
          parent={document.getElementById("layout-container")}
          className="modal-portal"
        >
          <div
            ref={backdrop}
            // id="backdrop"
            className={"fixed inset-0 backdrop-blur-sm bg-gray-800/30"}
          >
            <div className="w-full h-full flex justify-center items-center">
              <div
                // id="content"
                className="bg-gray-50 rounded-sm shadow-lg p-10"
              >
                {props.children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}

export default Popup;
