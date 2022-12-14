import { useCallback, useEffect } from "react";
import { ReactSimpleModalProps } from "../types/ReactSimpleModal";
import CloseIcon from "./assets/close.svg";

import "../styles/tailwind.css";

export const ReactSimpleModal = (props: ReactSimpleModalProps) => {
  const { open, onClose, children, closeIcon } = props;

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        document.body.classList.remove("overflow-y-hidden");
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscapeKey]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);
  return (
    <>
      {open && (
        <div onClick={onClose}>
          <div className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full z-50"></div>
          <div
            id="modal-wrapper"
            className="justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="flex absolute w-full justify-end top-4 md:top-10 px-4 md:px-10 z-50">
              {closeIcon ? (
                <div onClick={onClose}>{closeIcon}</div>
              ) : (
                <img
                  onClick={onClose}
                  className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                  src={CloseIcon}
                  alt="Close"
                />
              )}
            </div>
            <div className="w-full" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
