const NumberPad = ({
	selectedNumbers,
	setSelectedNumbers,
	handleClearAll,
	handleCash,
}) => {
	const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

	const handleNumberClick = (number) => {
		if (selectedNumbers.includes(number)) {
			setSelectedNumbers((prev) => prev.filter((n) => n !== number));
		} else {
			if (selectedNumbers.length >= 5) {
				alert("You can only select 5 numbers.");
				return;
			}
			setSelectedNumbers((prev) => [...prev, number]);
		}
	};

	const handleRandom = () => {
		const randomNumbers = [];
		while (randomNumbers.length < 5) {
			const randomNum = Math.floor(Math.random() * 20) + 1;
			if (!randomNumbers.includes(randomNum)) {
				randomNumbers.push(randomNum);
			}
		}
		setSelectedNumbers(randomNumbers);
	};

	return (
		<div className="number-pad-container">
			<div className="number-buttons-grid">
				{numbers.map((num) => (
					<button
						key={num}
						onClick={() => handleNumberClick(num)}
						className={selectedNumbers.includes(num) ? "selected" : ""}
					>
						{num}
					</button>
				))}
			</div>
			<div className="number-pad-actions">
				<button onClick={handleClearAll}>Clear</button>
				<button onClick={handleRandom}>Random</button>
				<button onClick={handleCash} class="cash-btn">Cash</button>
			</div>
		</div>
	);
};

export default NumberPad;
