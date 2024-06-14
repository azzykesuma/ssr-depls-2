import React from 'react';
interface ContactLinkProps {
    href: string | undefined;
    SvgComponent: React.FC;
    label: string;
    target?: string;
    }
const ContactLink = ({ href, SvgComponent, label, target } : ContactLinkProps) => (
  <a
    className='bg-primaryBcg w-[80%] md:w-[70%] text-center text-[black] flex justify-between items-center no-underline mx-auto p-2.5 rounded-[10px]'
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
  >
    <span className='w-4/5 flex items-center justify-start'>
      <SvgComponent />
      <h2 className="text-xs md:text-base font-bold">{label}</h2>
    </span>
    <i className="fa-solid fa-angle-right"></i>
  </a>
);

export default ContactLink;
