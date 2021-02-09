import { ITicket } from '../helpers/types';

export const getSearchId = (payload: string) => ({ type: 'SET_SEARCH_ID', payload });

export const getTickets = (payload: ITicket[]) => ({ type: 'SET_TICKETS', payload });
