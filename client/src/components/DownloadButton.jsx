import * as XLSX from "xlsx/xlsx.mjs";

function DownloadButton({ data = [], fileName }) {
  return (
    <button
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Shee1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
      className="download-btn"
    >
      Download
    </button>
  );
}

export default DownloadButton;
