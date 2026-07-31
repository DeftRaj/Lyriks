import Searchbar from "./Searchbar";

const Header = ({ children }) => {
  return (
    <header
      className="sticky top-0 z-40 h-[72px]
      bg-gradient-to-br  from-black to-[#121286]
      border-b border-white/10 ">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex-1">
          <Searchbar />
        </div>

        {children}
      </div>
    </header>
  );
};

export default Header;