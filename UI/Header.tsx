function Header() {
  return (
<nav className="h-[42px] md:h-[64px] before:pl-5 text-center mb-5">
  <div className="h-full font-thin text-4xl md:text-6xl flex items-end justify-center">
    <img className="h-full" src="https://flowmotion.co.id/files/internal/images/LogoFlow.png" alt="flowmotion.inc" />
    <p className="font-thin text-primaryBcg translate-y-2">Motion</p>
  </div>
</nav>

  );
}

export default Header;
