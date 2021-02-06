export default function searchId(state: any = '', action: any) {
  switch (action.type) {
    case 'SET_SEARCH_ID':
      return action.id;

    default:
      return state;
  }
}
