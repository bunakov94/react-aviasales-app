// eslint-disable-next-line import/prefer-default-export
export const setActiveTab = (payload: { [key: string]: boolean }) => ({
  type: 'SET_ACTIVE_TAB',
  payload,
});
