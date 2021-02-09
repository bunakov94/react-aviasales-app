import { ITicket } from '../helpers/types';

export default function tickets(state: ITicket[] = [], action: { type: string; payload: ITicket[] }) {
  switch (action.type) {
    case 'SET_SEARCH_ID':
      return action.payload;

    case 'SET_TICKETS':
      return [...state, ...action.payload];

    default:
      return state;
  }
}
