import { ITicket } from '../../helpers/types';
import ActionTypes from '../actionTypes';

export default function tickets(state: ITicket[] = [], action: { type: string; payload: ITicket[] }) {
  switch (action.type) {
    case ActionTypes.setSearchId:
      return action.payload;

    case ActionTypes.setTickets:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
