import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";

function EditCurrency({ getValue, row, column, table }) {
  const initValue = getValue();
  const [amount, setAmount] = useState(initValue);
  const { updateData } = table.options.meta;

  const handleInputChange = (event) => {
    // Remove non-digit characters and convert to a number
    const numericValue = parseFloat(event.target.value.replace(/[^\d]/g, ""));

    // Check if it's a valid number
    if (!isNaN(numericValue)) {
      // Format the number with a currency symbol and no decimal places
      const formattedValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(numericValue);

      setAmount(formattedValue);
    } else {
      // If not a valid number, set the state to an empty string or handle it accordingly
      setAmount("");
    }
  };

  const handleEditCurrency = async () => {
    try {
      const jobId = row.original._id;

      const payload = { ...row.original, [column.id]: amount };
      const res = await fetch(`/api/v1/jobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Update failed");
      const { data } = await res.json();
      console.log("Job updated", data);
      updateData(row.index, column.id, amount);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Input
        type="text"
        htmlSize={5}
        minW={20}
        width="full"
        value={amount}
        onChange={handleInputChange}
        border={0}
        onBlur={handleEditCurrency}
        rounded={0}
        height="100%"
        className="hover:bg-light p-3.5"
      ></Input>
    </div>
  );
}

export default EditCurrency;
