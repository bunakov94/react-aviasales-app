export default function filters(
  state: any = {
    all: { type: 'ALL', title: 'Все', checked: false },
    nothing: { type: 'NOTHING', title: 'Без пересадок', checked: false },
    one: { type: 'ONE', title: '1 пересадка', checked: false },
    two: { type: 'TWO', title: '2 пересадка', checked: false },
    three: { type: 'THREE', title: '3 пересадка', checked: false },
  },
  action: any,
) {
  switch (action.type) {
    case 'ALL':
      return {
        all: { ...state.all, checked: !state.all.checked },
        nothing: { ...state.nothing, checked: !state.all.checked },
        one: { ...state.one, checked: !state.all.checked },
        two: { ...state.two, checked: !state.all.checked },
        three: { ...state.three, checked: !state.all.checked },
      };
    case 'NOTHING':
      return {
        ...state,
        nothing: { ...state.nothing, checked: !state.nothing.checked },
        all: { ...state.all, checked: action.payload },
      };
    case 'ONE':
      return {
        ...state,
        one: { ...state.one, checked: !state.one.checked },
        all: { ...state.all, checked: action.payload },
      };
    case 'TWO':
      return {
        ...state,
        two: { ...state.two, checked: !state.two.checked },
        all: { ...state.all, checked: action.payload },
      };
    case 'THREE':
      return {
        ...state,
        three: { ...state.three, checked: !state.three.checked },
        all: { ...state.all, checked: action.payload },
      };

    default:
      return state;
  }
}
