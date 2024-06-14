import { useContext } from "react";
import { ModalContext } from "../../pages/index/index.page";
import { FormSvg } from "./Svgs";
import { X } from "lucide-react";


function ModalVideo({vidSource, onClose} : {vidSource: string, onClose: () => void}) {
  const {openModal} = useContext(ModalContext);
  return (
    <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] z-10 left-0 top-0">
      <div className="flex h-full w-full">
        <video 
          autoPlay 
          controls 
          className="h-full w-full absolute bg-black" 
          src={vidSource}
        ></video>
        <span onClick={onClose} className="absolute text-primaryBcg cursor-pointer right-5 top-5 translate-x-5 flex items-center w-full justify-between px-5">
          {openModal && (
            <a
            className='text-center text-black flex justify-between items-center  py-2 px-3 rounded-xl bg-primaryBcg gap-3'
              href="https://wa.me/6282195574918"
              target="_blank"
              id="float-button"
            >
              <span className='flex items-center justify-center'>
                <FormSvg />
                <h2 className="text-xs font-bold">Request Online Meeting</h2>
              </span>
              <i className="fa-solid fa-angle-right"></i>
            </a>
          )}
          <X className="h-6 w-6 text-primaryBcg bg-black/50 rounded-md font-thin"/>
        </span>
      </div>
    </div>
  );
}

export default ModalVideo;
