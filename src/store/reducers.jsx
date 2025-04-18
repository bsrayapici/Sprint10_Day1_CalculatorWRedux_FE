import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  EQUALS,
  TYPE_TO_SCREEN,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
} from './actions.jsx';

export const initialState = {
  total: '0',
  operation: '+',
  memory: '0',
  temp: '0',
};

const calculateResult = (num1, num2, operation) => {
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  
  switch (operation) {
    case '+':
      return (n1 + n2).toString();
    case '*':
      return (n1 * n2).toString();
    case '-':
      return (n1 - n2).toString();
    case '/':
      return (n1 / n2).toString();
    default:
      return num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.total,
        total: '0',
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: '0',
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
        temp: '0',
      };

    case TYPE_TO_SCREEN:
      return {
        ...state,
        total: state.total === '0'
          ? action.payload.toString()
          : state.total + action.payload.toString(),
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: '0',
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    default:
      return state;
  }
};

export default reducer;