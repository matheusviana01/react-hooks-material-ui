import { Fragment, useState } from 'react';
import CalculatorDisplay from './display/CalculatorDisplay';
import { handleStateChanges } from './helpers';
import { initialState } from './initial-state';
import CalculatorInputs from './inputs/CalculatorInputs';

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const { display, data } = state;
  const { operation, result } = display;

  const handleEvent = (data) => {
    const newState = handleStateChanges(data);
    setState(newState);
  };

  return (
    <Fragment>
      <CalculatorDisplay operation={operation} result={result} />
      <CalculatorInputs data={data} onEvent={handleEvent}/>
    </Fragment>
  );
};

export default Calculator;
