import './CalculatorDisplay.css';

const CalculatorDisplay = ({ operation, result }) => {
  return (
    <div className="calculator-display">
      <div className="display-operation">
        <span className="display-operation-text">{operation}</span>
      </div>
      <div className="display-result">
        <span className="display-result-text">{result}</span>
      </div>
    </div>
  );
};

export default CalculatorDisplay;