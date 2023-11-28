import LogoutContainer from "../features/user/LogoutContainer";
import SideToolBar from "./SideToolBar";

function Header() {
  return (
    <div className="fixed md:sticky w-full top-0 z-10 flex justify-between items-center py-4 md:px-10 px-6 bg-secondary md:bg-white ">
      <div className="md:hidden">
        <SideToolBar />
      </div>
      <span className="text-4xl text-bold text-bright md:text-dark">
        Dashboard
      </span>

      <div className="flex items-center">
        <LogoutContainer />
      </div>
    </div>
  );
}

export default Header;
