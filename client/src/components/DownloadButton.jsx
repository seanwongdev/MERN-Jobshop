Button;
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as XLSX from "xlsx/xlsx.mjs";
import Button from "../ui/Button";

function DownloadButton({ data = [], fileName }) {
  return (
    <Button
      type="secondary"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Shee1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
      className=""
    >
      <span className="flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faCircleDown} />
        Download
      </span>
    </Button>
  );
}

export default DownloadButton;
