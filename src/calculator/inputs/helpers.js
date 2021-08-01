export const handleDigitInput = (value, data) => {
  let { queue, pointer, isSubmitting } = data;
  const newData = {...data};
  const isNumber1 = isSubmitting ? true : pointer === 0;
  const isOperator = isSubmitting ? false : pointer === 1;
  const isNumber2 = isSubmitting ? false : pointer === 2;
  let [number1, operator, number2] = queue;

  if (isSubmitting) {
    number1 = '';
    operator = '';
    number2 = '';
    pointer = 0;
    isSubmitting = false;
  }

  if (isNumber1) {
    number1 = number1.concat(value);
  }

  if (isNumber2) {
    number2 = number2.concat(value);
  }

  if (isOperator) {
    if (operator !== '') {
      number2 = number2.concat(value);
      pointer = 2;
    }
  }

  newData.queue = [number1, operator, number2];
  newData.pointer = pointer;
  newData.isSubmitting = isSubmitting;

  return newData;
};

export const handleCommaInput = (value, data) => {
  let { queue, pointer, isSubmitting } = data;
  const newData = {...data};
  const isNumber1 = isSubmitting ? true : pointer === 0;
  const isNumber2 = isSubmitting ? false : pointer === 2;
  let [number1, operator, number2] = queue;

  if (isSubmitting) {
    number1 = '';
    operator = '';
    number2 = '';
    pointer = 0;
    isSubmitting = false;
  }
  
  if (isNumber1) {
    if (number1 !== '' && !number1.includes('.')) {
      number1 = number1.concat(value);
    }
  }

  if (isNumber2) {
    if (number2 !== '' && !number2.includes('.')) {
      number2 = number2.concat(value);
    }
  }

  newData.queue = [number1, operator, number2];
  newData.pointer = pointer;
  newData.isSubmitting = isSubmitting;

  return newData;
};

export const handleClearOperatorInput = () => {
  return { queue: ['', '', ''], pointer: 0, isSubmitting: false };
};

export const handleCommonOperatorInput = (value, data) => {
  let { queue, pointer, isSubmitting } = data;
  const newData = {...data};
  const isNumber1 = pointer === 0;
  const isOperator = pointer === 1;
  let [number1, operator, number2] = queue;

  if (isNumber1) {
    if (number1 !== '') {
      operator = value;
      pointer = 1;
    }
  }

  if (isOperator) {
    operator = value;
  }
  
  newData.queue = [number1, operator, number2];
  newData.pointer = pointer;
  newData.isSubmitting = isSubmitting;

  return newData;
};

export const handleSubmitOperatorInput = (data) => {
  let { queue, pointer, isSubmitting } = data;
  const newData = {...data};
  const isNumber2 = pointer === 2;
  let [number1, operator, number2] = queue;

  if (isNumber2) {
    if (number2 !== '') {
      isSubmitting = true;
    }
  }

  newData.queue = [number1, operator, number2];
  newData.pointer = pointer;
  newData.isSubmitting = isSubmitting;

  return newData;
};
