import './CalculatorInputs.css';
import { handleClearOperatorInput, handleCommaInput, handleCommonOperatorInput, handleDigitInput, handleSubmitOperatorInput } from './helpers';

const CalculatorInputs = ({ data, onEvent }) => {
  const handleNumberInputClick = (event) => {
    let value = event.target.innerText;
    let newData = null;
    if (value === '.') {
      newData = handleCommaInput(value, data);
      onEvent(newData);
      return;
    }
    newData = handleDigitInput(value, data);
    onEvent(newData);
  };

  const handleOperatorInputClick = (event) => {
    let value = event.target.innerText;
    let newData = null;
    switch (value) {
      case 'C':
        newData = handleClearOperatorInput();
        onEvent(newData);
        return;
      case '=':
        newData = handleSubmitOperatorInput(data);
        onEvent(newData);
        return;
      default:
        newData = handleCommonOperatorInput(value, data);
        onEvent(newData);
        return;
    }
  }

  return (
    <div className="calculator-inputs">
      <div className="calculator-number-inputs">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((item) => {
          let className = 'calculator-number-input';
          className = item === '0' ? className.concat(' ', 'calculator-number-0-input') : className;
          className = item === '.' ? className.concat(' ', 'calculator-comma-input') : className;

          return (
            <button key={item} type="button"
              className={className}
              onClick={handleNumberInputClick}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="calculator-operator-inputs">
        {['C', '÷', '×', '+', '-', '='].map((item) => {
          let className = 'calculator-operator-input';
          className = item === 'C' ? className.concat(' ', 'calculator-clear-input') : className;
          className = item === '=' ? className.concat(' ', 'calculator-equal-input') : className;
          return (
            <button key={item} type="button"
              className={className}
              onClick={handleOperatorInputClick}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalculatorInputs;
