import EventType from '../types/EventType';
import Action from '../types/Action';

type EventProps = {
  event: EventType;
  dispatch: React.Dispatch<Action>;
};

export default EventProps;
