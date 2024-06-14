import Button from "./Button";
interface HeroItemsProps {
  image: string;
  title: string;
  category: string;
  urlVideos: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setVidSrc: (vidSource: string) => void;
}

function HeroItems({
  image,
  title,
  category,
  urlVideos,
  setOpenModal,
  setVidSrc,
}: HeroItemsProps) {
  const categories = category.split(",");
  const handlePlay = () => {
    setVidSrc(urlVideos);
    setOpenModal(true);
  };
  return (
    <div className="w-full relative mx-auto my-4">
      <div className="w-full">
        <img src={image} alt={title } className="rounded-md"/>
      </div>
      <div className="absolute w-full h-full top-0 left-0 flex items-start flex-wrap flex-col justify-end font-extrabold bg-gradient-to-b from-transparent via-transparent to-black">
        <div className="p-5">
          <div className="drop-shadow-lg">
            <h2 className="text-sm sm:text-4xl sm:mb-[15px] w-1/2 sm:w-2/3 shadowtext">
              {title}
            </h2>
          </div>
          <Button onClick={handlePlay} label="Play" className="my-3 shadow-sm"/>
          <div>
            <ul className="flex gap-5 ml-5">
              {categories.slice(0, 2).map((item, index) => (
                <li className="shadowtext mr-3 sm:mr-5 font-extralight sm:font-normal text-xs sm:text-base" key={index}>
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItems;
