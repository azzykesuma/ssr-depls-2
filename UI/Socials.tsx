import { useContext } from "react";
import { DataContext } from "../pages/index/index.page";
import SocialsIcon from "./components/icons/Socials";

function Socials() {
  const data = useContext(DataContext);
  const socials = data?.data?.contact.socials;
  return (
    <section className="mb-5">
      <h2 className="font-bold text-lg text-white py-2">Get in touch</h2>
      <div className="flex gap-2 my-6 justify-evenly">
        {socials &&
          socials.map((social) => (
            <a key={social.social_id} href={social.social_url} target="_blank" >
                <SocialsIcon
                  iconType={social.social_name}
                  size="20"
                />
            </a>
          ))}
      </div>
    </section>
  );
}

export default Socials;
