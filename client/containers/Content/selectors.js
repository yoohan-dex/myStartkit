import { createSelector } from 'reselect';

const selectContentPageDomain = () => state => state.get('content');

const selectContentState = () => createSelector(
  selectContentPageDomain(),
  (contentState) => contentState.get('article')
);

const selectContentPage = () => createSelector(
  selectContentPageDomain(),
  selectContentState(),
  (substate) => substate.toJS()
);

export default selectContentPage;
