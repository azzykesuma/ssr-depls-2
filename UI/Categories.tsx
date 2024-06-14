import { useContext, useState } from "react";
import { DataContext, ModalContext } from "../pages/index/index.page";
import {Category} from '../Types'
import { Dialog, DialogContent } from "../shadComp/ui/dialog";
import Button from "./components/Button";

function Commercials() {
  const { toggleModal, setVidSource } = useContext(ModalContext);
  const [selectedData, setSelectedData] = useState<Category | null>(null);
  const data = useContext(DataContext);
  const dataCategories = data?.data?.works.categories;
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenModal = (item: Category) => {
    setOpenDialog(true);
    setSelectedData(item);
  };
  return (
    <>
      <h2 className="text-white py-5 font-bold text-lg">Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {dataCategories && dataCategories.map((item) => (
          <button
            key={item.category_id}
            className="relative h-32 rounded-lg overflow-hidden"
            onClick={() => handleOpenModal(item)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            <img
              src={item.category_thumbnail}
              alt=""
              className="rounded-lg cursor-context-menu h-full object-cover"
            />
            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm font-semibold shadowtext">
              {item.category_name}
            </span>
          </button>
        ))}
      </div>
      <Dialog 
        open={openDialog} 
        onOpenChange={setOpenDialog}
      >
        <DialogContent>
          <div className="h-[calc(100vh-100px)] overflow-y-auto my-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-start justify-center gap-5">
              {selectedData && selectedData.category_details.map((item) => (
                <button 
                  key={item.id}
                  className="relative rounded-lg overflow-hidden"
                  onClick={() => {
                    toggleModal(true)
                    setVidSource(item.videos[0].url);
                    setOpenDialog(false);
                  }}
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                  <img
                    src={item.images[0].url}
                    alt=""
                    className="rounded-lg cursor-context-menu h-full w-full object-cover"
                  />
                  <span className="absolute bottom-3 left-0 text-white text-xs md:text-base font-bold px-2">
                    {item.project_name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Button
        label="Show All Reels"
        onClick={() => (window.location.href = "https://flowmotion.co.id")}
        className="mt-5 mx-auto px-10"
      />
    </>
  );
}

export default Commercials;
