import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const MobileMenuButton = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="md:hidden ml-3">
      {mobileMenuOpen ? (
        <RiCloseLine
          size={24}
          className="text-white cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : (
        <HiOutlineMenu
          size={24}
          className="text-white cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        />
      )}
    </div>
  );
};

export default MobileMenuButton;