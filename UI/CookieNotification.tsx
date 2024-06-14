import React from "react";
import {GtagArgs} from "../../Types"

const CookieNotification: React.FC = () => {
  const [showNotification, setShowNotification] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowNotification(true);
    }
  }, []);

  const acceptCookies = () => {
    setShowNotification(false);
    localStorage.setItem("cookieAccepted", "true");
    document.cookie = "analytics=true; path=/;";
    document.cookie = "ads=false; path=/;";
    startTracking();
  };

  const cancelCookies = () => {
    setShowNotification(false);
  };

  const startTracking = () => {
    ((w: Window, d: Document, s: string, l: string, i: string) => {
      (w)[l] = (w)[l] || [];
      (w)[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      // console.log('j', j)
      if(f.parentNode) {
          f.parentNode.insertBefore(j, f);
      }
    })(window, document, "script", "dataLayer", "GTM-5HRMJW5R");
  
    (window as Window).dataLayer = ((window as Window).dataLayer || []);
    function gtag(...args: GtagArgs) {
      (window as Window).dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-07GY5T26R922");
  };
  

  return (
    showNotification && (
      <div
        className={`fixed w-screen bg-slate-800/90 text-center z-[99999] transition-opacity duration-[0.5s] py-3 px-5 rounded-[5px] left-1/2 bottom-0 transform -translate-x-1/2 rounded-t-md ${
          showNotification ? "opacity-100" : "opacity-0"
        } flex flex-col gap-3 md:gap-5`}
      >
        <p className="text-white text-xs md:text-base">
          Our website uses cookies to ensure you get the best experience. By
          continuing to use this website, you agree to our use of cookies.{" "}
        </p>
        <div className="d-flex justify-content-center">
          <button
            className="cursor-pointer transition-all duration-[0.3s] px-2.5 py-[5px] rounded-[5px] border-[none] bg-[#fcd743] text-[#18191d] hover:bg-[#313131] hover:text-[#ffffff99] text-xs md:text-base font-semibold"
            onClick={acceptCookies}
          >
            Accept All
          </button>
          <button
            className="cursor-pointer transition-all duration-[0.3s] px-2.5 py-[5px] rounded-[5px] border-[none]; bg-transparent text-white mx-2.5 my-0 hover:text-[#ffffff99] text-xs md:text-base"
            onClick={cancelCookies}
          >
            No Thanks
          </button>
        </div>
      </div>
    )
  );
};

export default CookieNotification;
