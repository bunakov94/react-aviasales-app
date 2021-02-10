export default function activeTab(
  state: { [key: string]: boolean } = { cheap: true, fast: false },
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return action.payload;

    default:
      return state;
  }
}
