const DollarPad = ({ selectedNumbers, setCashSelections }) => {
  const dollars = [1, 5, 10, 20];

  const handleNumberClick = (value) => {
    if (selectedNumbers.length !== 5) {
      alert("Please pick exactly 5 numbers first.");
      return;
    }

    setCashSelections((prev) => [...prev, value]);
  };

  return (
    <div className="dollar-pad-container">
      <div className="dollar-buttons-grid">
        {dollars.map((dollar) => (
          <button key={dollar} onClick={() => handleNumberClick(dollar)}>
            ${dollar}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DollarPad;
