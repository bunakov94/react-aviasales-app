import ActionTypes from '../actionTypes';
import { setActiveTab } from '../actions/activeTab';

type ActionsTypes = ReturnType<typeof setActiveTab>;

export default function activeTab(
  state: { cheap: boolean; fast: boolean } = { cheap: true, fast: false },
  action: ActionsTypes,
) {
  switch (action.type) {
    case ActionTypes.setActiveTab:
      return action.payload;

    default:
      return state;
  }
}
