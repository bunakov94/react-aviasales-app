const checkFunk = (state: Filters, type: string) => {
  const filterName = type.toLowerCase();
  const result = {
    ...state,
    [filterName]: { ...state[filterName], checked: !state[filterName].checked },
    all: { ...state.all, checked: false },
  };

  let count = 0;
  for (const filter in result) {
    if (Object.prototype.hasOwnProperty.call(result, filter) && result[filter].checked === true) {
      count += 1;
    }
  }

  if (filterName === 'all' || count === 4) {
    return Object.keys(state).reduce((acc: Filters, el) => {
      acc[el] = { ...state[el], checked: !state.all.checked };
      return acc;
    }, {});
  }

  return result;
};

export default function filters(
  state: Filters = {
    all: { type: 'ALL', title: 'Все', checked: false },
    nothing: { type: 'NOTHING', title: 'Без пересадок', checked: false },
    one: { type: 'ONE', title: '1 пересадка', checked: false },
    two: { type: 'TWO', title: '2 пересадка', checked: false },
    three: { type: 'THREE', title: '3 пересадка', checked: false },
  },
  action: { type: string },
) {
  switch (action.type) {
    case 'ALL':
      return checkFunk(state, action.type);
    case 'NOTHING':
      return checkFunk(state, action.type);
    case 'ONE':
      return checkFunk(state, action.type);
    case 'TWO':
      return checkFunk(state, action.type);
    case 'THREE':
      return checkFunk(state, action.type);

    default:
      return state;
  }
}

type Filters = {
  [key: string]: { type: string; title: string; checked: boolean };
};
