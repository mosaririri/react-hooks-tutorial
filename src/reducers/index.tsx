import EventType from '../types/EventType';
import ActionType from '../types/ActionTyoe';

/*
 * reducer: 状態を表すstate,変化を起こすaction
 */
const events = (state: EventType[] = [], action: ActionType) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      // stateにeventを追加
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
