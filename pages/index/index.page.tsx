import { createContext, useEffect, useState } from "react";
import { getToken } from "../../utils/getToken";
import ContactUs from "../../UI/ContactUs";
import Footer from "../../UI/Footer";
import Header from "../../UI/Header";
import OurServices from "../../UI/OurServices";
import RecentWorkShowcase from "../../UI/RecentWorkShowcase";
import ModalVideo from "../../UI/components/ModalVideo";
import './index.css'
import { DataContext as DataContextType, ModalContextData, RootData } from "../../Types";
import axios from "axios";
import CookieNotification from "../../UI/CookieNotification";


export const ModalContext = createContext<ModalContextData>({
  openModal: false,
  toggleModal: () => {},
  vidSource: "",
  setVidSource: (vidSource) => {
    return vidSource;
  },
});

export const DataContext = createContext<DataContextType | null>(null);

function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [vidSource, setVidSource] = useState("");
  const [data, setData] = useState<RootData | null>(null);
  const toggleModal = (open: boolean | ((prevState: boolean) => boolean)) => {
    setOpenModal(open);
  };
  

  const fetchReelsData = async () => {
    const envType = import.meta.env.VITE_ENV;
    const isProduction = envType === "production";
    const headers = {}
    if(isProduction){
      const token = await getToken();
      Object.assign(headers, {
        "Authorization": "Bearer " + token,
      });
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/v1/app/reels/data`, {
        headers: headers,
      })
      .then((response) => {
        setData(response.data.data);
      });
  };

  useEffect(() => {
    fetchReelsData();
  }, []);
  return (
    <div className="max-w-[700px] mx-auto p-5 mb-15 flex flex-col gap-12 md:gap-20 relative">
      <DataContext.Provider value={{ data }}>
        <ModalContext.Provider
          value={{ openModal, toggleModal, vidSource, setVidSource }}
        >
          <Header />
          <RecentWorkShowcase />
          <OurServices />
          <ContactUs />
          {openModal && (
            <ModalVideo
              vidSource={vidSource}
              onClose={() => toggleModal(false)}
            />
          )}
          {!openModal && <Footer />}
          <CookieNotification />
        </ModalContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default {
  Page,
  route: '/',
  ssr: true 
};
