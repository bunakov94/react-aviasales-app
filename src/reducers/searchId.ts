export default function searchId(state: any = [], action: any) {
  switch (action.type) {
    case 'SET_SEARCH_ID':
      return action.payload;

    case 'GET_TICKETS':
      return [...state, ...action.payload];

    default:
      return state;
  }
}
