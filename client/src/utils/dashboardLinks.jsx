import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faMagnifyingGlass,
  faChartLine,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
const className = {
  iconSpanClass:
    "flex items-center justify-center w-[43px] h-[43px] rounded-full group-hover:bg-[#3AAFA9]",
  iconClass: "text-2xl text-[#DEF2F1]",
  textClass: "text-[#FEFFFF] font-[400]",
  textClassActive: "text-[#FEFFFF] font-[400] font-bold",
  iconSpanClassActive:
    "flex items-center justify-center w-[43px] h-[43px] rounded-full bg-[#FEFFFF]",
  iconClassActive: "text-2xl text-[#2B7A78]",
};

const links = [
  {
    text: <span className={className.textClass}>Add Job</span>,
    path: "/dashboard",
    icon: (
      <span className={className.iconSpanClass}>
        <FontAwesomeIcon className={className.iconClass} icon={faFolderPlus} />
      </span>
    ),
    textActive: <span className={className.textClassActive}>Add Job</span>,
    iconActive: (
      <span className={className.iconSpanClassActive}>
        <FontAwesomeIcon
          className={className.iconClassActive}
          icon={faFolderPlus}
        />
      </span>
    ),
  },
  {
    text: <span className={className.textClass}>Show Jobs</span>,
    path: "/dashboard/jobs",
    icon: (
      <span className={className.iconSpanClass}>
        <FontAwesomeIcon
          className={className.iconClass}
          icon={faMagnifyingGlass}
        />
      </span>
    ),
    textActive: <span className={className.textClassActive}>Show Jobs</span>,
    iconActive: (
      <span className={className.iconSpanClassActive}>
        <FontAwesomeIcon
          className={className.iconClassActive}
          icon={faMagnifyingGlass}
        />
      </span>
    ),
  },
  {
    text: <span className={className.textClass}>Get Stats</span>,
    path: "/dashboard/stats",
    icon: (
      <span className={className.iconSpanClass}>
        <FontAwesomeIcon className={className.iconClass} icon={faChartLine} />
      </span>
    ),
    textActive: <span className={className.textClassActive}>Get Stats</span>,
    iconActive: (
      <span className={className.iconSpanClassActive}>
        <FontAwesomeIcon
          className={className.iconClassActive}
          icon={faChartLine}
        />
      </span>
    ),
  },
  {
    text: <span className={className.textClass}>Access Profile</span>,
    path: "/dashboard/profile",
    icon: (
      <span className={className.iconSpanClass}>
        <FontAwesomeIcon className={className.iconClass} icon={faAddressCard} />
      </span>
    ),
    textActive: (
      <span className={className.textClassActive}>Access Profile</span>
    ),
    iconActive: (
      <span className={className.iconSpanClassActive}>
        <FontAwesomeIcon
          className={className.iconClassActive}
          icon={faAddressCard}
        />
      </span>
    ),
  },
];

export default links;
