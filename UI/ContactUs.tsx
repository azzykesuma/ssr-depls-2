import { useContext } from 'react';
import { EmailSvg, WaSvg, WebSvg } from './components/Svgs';
import { DataContext } from '../pages/index/index.page';
import ContactLink from './components/ContactLink';
import HeaderSection from './components/HeaderSection';
import Socials from './Socials';

function ContactUs() {
  const data = useContext(DataContext);
  const email = data?.data?.contact?.email;
  const waNumber = data?.data?.contact?.whatsapp;
  const website = data?.data?.contact?.website;

  return (
    <section className="mb-[68px] flex flex-col gap-2">
      <HeaderSection label="Contact Us"/>
      <Socials />
      <ContactLink href={email} SvgComponent={EmailSvg} label="Email" />
      <ContactLink href={waNumber} SvgComponent={WaSvg} label="Whatsapp" target="_blank" />
      <ContactLink href={website} SvgComponent={WebSvg} label="Website" target="_blank" />
    </section>
  );
}

export default ContactUs;
