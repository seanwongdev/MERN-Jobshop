import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import links from "../utils/dashboardLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked } from "@fortawesome/free-solid-svg-icons";
import SideToolBar from "./SideToolBar";
import { useDashboardContext } from "./DashboardLayout";
import Button from "./Button";

function BigNavBar() {
  const { showSidebar, setShowSidebar, active, setActive } =
    useDashboardContext();
  return (
    <div className="p-4 flex flex-col gap-2 bg-secondary h-full ">
      <span className="flex items-center justify-left gap-4 mb-10">
        {showSidebar && (
          <Link
            to="/"
            className="font-bold text-3xl text-bright hover:text-bright"
          >
            Jobshop
          </Link>
        )}
        <button className="border-0 focus:outline-none" disabled={showSidebar}>
          <FontAwesomeIcon
            className="text-5xl text-bright"
            icon={faCubesStacked}
            onClick={() => setShowSidebar(true)}
          />
        </button>

        {showSidebar && <SideToolBar />}
      </span>

      {links.map((link, index) => {
        const { path, text, icon, iconActive, textActive } = link;
        return (
          <LinkButton onClick={() => setActive(index)} to={path} key={text}>
            {active === index ? iconActive : icon}
            {active === index ? showSidebar && textActive : showSidebar && text}
          </LinkButton>
        );
      })}
    </div>
  );
}

export default BigNavBar;
