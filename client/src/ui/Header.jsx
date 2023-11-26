import LogoutContainer from "../features/user/LogoutContainer";

function Header() {
  return (
    <div className="flex justify-between py-4 md:px-10">
      <span className="text-4xl text-bold">Dashboard</span>

      <div className="flex items-center">
        <LogoutContainer />
      </div>
    </div>
  );
}

export default Header;
