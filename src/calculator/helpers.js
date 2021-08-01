import { initialState } from './initial-state';

const getOperation = (num1, op, num2) => {
  return (`${num1} ${op} ${num2}`).trim();
}

const getResult = (num1, op, num2) => {
  let operations = {
    '÷': (a, b) => Number.parseFloat(a) / Number.parseFloat(b),
    '×': (a, b) => Number.parseFloat(a) * Number.parseFloat(b),
    '+': (a, b) => Number.parseFloat(a) + Number.parseFloat(b),
    '-': (a, b) => Number.parseFloat(a) - Number.parseFloat(b),
  };
  if (num1 && op && num2) {
    return (operations[op](num1, num2)).toString();
  }
  return '0';
};

export const handleStateChanges = (data) => {
  const newState = {...initialState};
  const { queue, isSubmitting } = data;
  const [number1, operator, number2] = queue;

  let operation = getOperation(number1, operator, number2);
  let result = isSubmitting ? getResult(number1, operator, number2) : '0';

  newState.display.operation = operation;
  newState.display.result = result;
  newState.data = data;

  return newState;
};
