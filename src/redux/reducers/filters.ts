import { FilterTypes, Filters } from '../../helpers/types';

const checkFunk = (state: Filters, type: string) => {
  const filtersCountExeptAll = Object.keys(state).length - 1;
  const result = {
    ...state,
    [type]: { ...state[type], checked: !state[type].checked },
    [FilterTypes.ALL]: { ...state[FilterTypes.ALL], checked: false },
  };

  let count = 0;
  for (const filter in result) {
    if (Object.prototype.hasOwnProperty.call(result, filter) && result[filter].checked === true) {
      count += 1;
    }
  }

  if (type === FilterTypes.ALL || count === filtersCountExeptAll) {
    return Object.keys(state).reduce((acc: Filters, el) => {
      acc[el] = { ...state[el], checked: !state[FilterTypes.ALL].checked };
      return acc;
    }, {});
  }

  return result;
};

export default function filters(
  state: Filters = {
    [FilterTypes.ALL]: { type: FilterTypes.ALL, title: 'Все', checked: false },
    [FilterTypes.NOTHING]: { type: FilterTypes.NOTHING, title: 'Без пересадок', checked: true },
    [FilterTypes.ONE]: { type: FilterTypes.ONE, title: '1 пересадка', checked: false },
    [FilterTypes.TWO]: { type: FilterTypes.TWO, title: '2 пересадка', checked: false },
    [FilterTypes.THREE]: { type: FilterTypes.THREE, title: '3 пересадка', checked: false },
  },
  action: { type: string },
) {
  if (Object.keys(FilterTypes).includes(action.type)) {
    return checkFunk(state, action.type);
  }
  return state;
}
