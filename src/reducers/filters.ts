export default function filters(
  state: any = {
    all: false,
    nothing: false,
    one: false,
    two: false,
    three: false,
  },
  action: any,
) {
  switch (action.type) {
    case 'ALL':
      return {
        all: action.payload,
        nothing: action.payload,
        one: action.payload,
        two: action.payload,
        three: action.payload,
      };
    case 'NOTHING':
      return {
        ...state,
        nothing: action.payload,
        all: false,
      };
    case 'ONE':
      return {
        ...state,
        one: action.payload,
        all: false,
      };
    case 'TWO':
      return {
        ...state,
        two: action.payload,
        all: false,
      };
    case 'THREE':
      return {
        ...state,
        three: action.payload,
        all: false,
      };

    default:
      return state;
  }
}
