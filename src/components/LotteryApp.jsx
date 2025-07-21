import { useState } from "react";
import DollarPad from "./DollarPad";
import NumberPad from "./numberPad";

const LotteryApp = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [cashSelections, setCashSelections] = useState([]);

  const totalCash = cashSelections.reduce((acc, curr) => acc + curr, 0);

  const handleClearAll = () => {
    setSelectedNumbers([]);
    setCashSelections([]);
  };

  const handleCash = () => {
    if (selectedNumbers.length !== 5) {
      alert("Please select exactly 5 numbers first.");
      return;
    }

    if (cashSelections.length === 0) {
      alert("Please select a cash amount.");
      return;
    }

    const confirmMessage = `Confirm your selection:\nNumbers: ${selectedNumbers.join(
      ", "
    )}\nTotal Cash: $${totalCash}`;

    if (window.confirm(confirmMessage)) {
      alert("Thank you for your purchase!");
      setSelectedNumbers([]);
      setCashSelections([]);
    }
  };

  return (
    <div className="lottery-app">
      <div className="input-display">
        {selectedNumbers.length === 0
          ? "Pick 5 numbers"
          : `Numbers: ${selectedNumbers.join(", ")} | $${totalCash}`}
      </div>

      <div className="number-dollar-inputs">
        <DollarPad
          selectedNumbers={selectedNumbers}
          setCashSelections={setCashSelections}
        />

        <NumberPad
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
          handleClearAll={handleClearAll}
          handleCash={handleCash}
        />
      </div>
    </div>
  );
};

export default LotteryApp;
