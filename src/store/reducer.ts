const reducer = (
  state: any = {
    filters: {
      all: false,
      nothing: false,
      one: false,
      two: false,
      three: false,
    },
  },
  action: any,
) => {
  switch (action.type) {
    case 'ALL':
      return {
        ...state,
        filters: {
          ...state.filters,
          all: action.payload,
        },
      };
    case 'NOTHING':
      return {
        ...state,
        filters: {
          ...state.filters,
          nothing: action.payload,
          all: false,
        },
      };
    case 'ONE':
      return {
        ...state,
        filters: {
          ...state.filters,
          one: action.payload,
          all: false,
        },
      };
    case 'TWO':
      return {
        ...state,
        filters: {
          ...state.filters,
          two: action.payload,
          all: false,
        },
      };
    case 'THREE':
      return {
        ...state,
        filters: {
          ...state.filters,
          three: action.payload,
          all: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
