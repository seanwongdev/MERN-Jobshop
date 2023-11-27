import { faCubesStacked, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDashboardContext } from "./DashboardLayout";
import LinkButton from "./LinkButton";
import links from "../utils/dashboardLinks";
import { Link } from "react-router-dom";

function SmallNavBar() {
  const { handleToggleSidebar, active, setActive } = useDashboardContext();
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity opacity-100">
    //   <div className="bg-white inset-1 p-8 rounded shadow-lg">
    //   <FontAwesomeIcon onClick={handleToggleSidebar} icon={faXmark} />
    //     <div className="flex flex-col gap-4">

    //     {links.map((link) => {
    //       const {text, path, icon} = link
    //       return (<LinkButton type="small" to={path} key={text} onClick={handleToggleSidebar}>{icon} {text} </LinkButton>)
    //     })}
    //     </div>
    //   </div>

    // </div>
    <>
      <div className="z-50 fixed top-[74px] bg-secondary w-screen h-screen px-6 border-t border-bright">
        <div className="flex flex-col gap-4 mt-8">
          {links.map((link, index) => {
            const { text, path, icon, iconActive, textActive } = link;
            return (
              <LinkButton
                type="small"
                to={path}
                key={text}
                onClick={handleToggleSidebar}
              >
                {active === index ? iconActive : icon}
                {active === index ? textActive : text}
              </LinkButton>
            );
          })}
        </div>
      </div>
      <div className="z-50 fixed bottom-0 border-t py-4 px-6 border-bright w-full  ">
        <Link
          to="/"
          className="flex justify-left items-center gap-3 text-3xl hover:text-bright text-bright font-bold"
        >
          Jobshop
          <FontAwesomeIcon
            className="text-5xl text-bright"
            icon={faCubesStacked}
          />
        </Link>
      </div>
    </>
  );
}

export default SmallNavBar;
