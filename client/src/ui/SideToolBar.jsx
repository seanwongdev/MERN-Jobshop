import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { useDashboardContext } from "./DashboardLayout";

function SideToolBar() {
  const { handleToggleSidebar } = useDashboardContext();
  return (
    <Button type="toolbar" onClick={handleToggleSidebar}>
      <FontAwesomeIcon icon={faSliders} />
    </Button>
  );
}

export default SideToolBar;
