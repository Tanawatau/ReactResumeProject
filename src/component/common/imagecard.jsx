import React, { useState } from "react";
import Modal from "./modal";

export const ImageCard = ({ link, zoomHover, onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  console.log(!modalOpen);

  return (
    <div className="ImgCard w-full h-full aspect-square bg-slate-300 rounded-3xl overflow-hidden select-none">
      {link ? (
        <div className="" onClick={() => setModalOpen(true)}>
          <img src={link} alt="" className={`w-full h-full object-cover transition-all duration-300 ${zoomHover ? "hover:scale-105" : ""}`} />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center font-medium text-slate-400">Image</div>
      )}

      {onClick && (
        <div className="Modal w-full h-full fixed z-10">
          <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      )}
    </div>
  );
};
