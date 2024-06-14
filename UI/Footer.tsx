import {FormSvg} from './components/Svgs'

function Footer() {
  return (
    <footer className="fixed w-full md:w-[700px] z-[100] -translate-x-2/4 mx-auto my-0 p-5 left-2/4 bottom-0">
      <a
      className='w-[80%] md:w-[70%] text-center text-[black] flex justify-between items-center no-underline mb-2.5 mx-auto my-0 p-2.5 rounded-[10px] bg-primaryBcg'
        href="https://wa.me/6282195574918"
        target="_blank"
        id="float-button"
      >
        <span className='w-max md:w-4/5 flex items-center justify-start'>
          <FormSvg />
          <h2 className="text-xs md:text-base font-bold">Request Online Meeting</h2>
        </span>
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </footer>
  );
}

export default Footer;
