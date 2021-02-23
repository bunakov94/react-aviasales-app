import ActionTypes from '../actionTypes';
// eslint-disable-next-line import/prefer-default-export
export const setActiveTab = (payload: { [key: string]: boolean }) => ({
  type: ActionTypes.setActiveTab,
  payload,
});
