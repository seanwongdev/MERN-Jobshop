import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDashboardContext } from "./DashboardLayout";

function SideToolBar() {
  const { handleToggleSidebar } = useDashboardContext();
  return (
    <Button type="toolbar">
      <FontAwesomeIcon
        className="text-2xl text-[#FEF2F1]"
        icon={faCircleChevronLeft}
        onClick={handleToggleSidebar}
      />
    </Button>
  );
}

export default SideToolBar;
