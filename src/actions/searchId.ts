// eslint-disable-next-line import/prefer-default-export
export const getSearchId = (payload: string) => ({ type: 'SET_SEARCH_ID', payload });

export const getTickets = (payload: []) => ({ type: 'GET_TICKETS', payload });
