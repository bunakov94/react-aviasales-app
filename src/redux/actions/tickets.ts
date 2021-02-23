import { ITicket } from '../../helpers/types';
import ActionTypes from '../actionTypes';

export const getSearchId = (payload: string) => ({ type: ActionTypes.setSearchId, payload });

export const setTickets = (payload: ITicket[]) => ({ type: ActionTypes.setTickets, payload });
