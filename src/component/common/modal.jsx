import React, { useEffect } from "react";

const Modal = ({ open, onClose, component }) => {
  useEffect(()=>{
    console.log(open);
  },[open])
  return (
    <div className="Modal relative">
      <div>
        <div className={`Background fixed w-full h-screen top-0 left-0 ${open ? "visible bg-transparent" : "invisible"}`}>
          <div className="fixed w-full h-screen left-0 cursor-pointer" onClick={onClose}></div>
          <div className="Content relative z-[1] bg-black">Text</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
