import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faMagnifyingGlass, faChartLine, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const links = [
  {
    text: "Add Job",
    path: "/dashboard",
    icon: <FontAwesomeIcon icon={faFolderPlus} />
  },
  {
    text: "Show Jobs",
    path: "/dashboard/jobs",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />
  },
  {
    text: "Get Stats",
    path: "/dashboard/stats",
    icon: <FontAwesomeIcon icon={faChartLine} />
  },
  {
    text: "Access Profile",
    path: "/dashboard/profile",
    icon: <FontAwesomeIcon icon={faAddressCard} />
  }
]


export default links
