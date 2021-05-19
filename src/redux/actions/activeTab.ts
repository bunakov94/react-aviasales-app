import ActionTypes from '../actionTypes';
// eslint-disable-next-line import/prefer-default-export
export const setActiveTab = (payload: { cheap: boolean; fast: boolean }) => ({
  type: ActionTypes.setActiveTab,
  payload,
});
