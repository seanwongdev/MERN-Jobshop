import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDashboardContext } from "./DashboardLayout";

function SideToolBar() {
  const { handleToggleSidebar } = useDashboardContext();
  return (
    <Button type="toolbar">
      <FontAwesomeIcon
        className="text-2xl text-light hidden md:grid"
        icon={faCircleChevronLeft}
        onClick={handleToggleSidebar}
      />
      <FontAwesomeIcon
        className="text-2xl text-light md:hidden"
        icon={faBars}
        onClick={handleToggleSidebar}
      />
    </Button>
  );
}

export default SideToolBar;
