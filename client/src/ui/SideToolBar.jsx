import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function SideToolBar() {
  return (
    <Button>
      <FontAwesomeIcon icon={faSliders} />
    </Button>
  )
}

export default SideToolBar
