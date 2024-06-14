import { useContext } from "react";
import HeroItems from "./components/HeroItems";
import { DataContext, ModalContext } from "../pages/index/index.page";
import HeaderSection from "./components/HeaderSection";
import Commercials from "./Categories";


function RecentWorkShowcase() {
  const { toggleModal,setVidSource } = useContext(ModalContext);
  const data = useContext(DataContext);
  const heroItems = data?.data?.works.hero
  const openModal = () => {
    toggleModal(true);
  }
  return (
    <section className="text-white flex flex-col">
      <HeaderSection label="Recent Work" />
      <div className="recent-hero" id="top">
        {heroItems && heroItems.map((item) => (
          <HeroItems
            key={item.id}
            image={item.images[0].url}
            title={item.project_name}
            urlVideos={item.videos[0].url}
            category={item.tags}
            setOpenModal={openModal}
            setVidSrc={setVidSource}
          />
        ))}
      </div>
      <Commercials />
    </section>
  );
}

export default RecentWorkShowcase;
