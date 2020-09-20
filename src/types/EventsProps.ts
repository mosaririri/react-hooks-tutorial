import EventType from '../types/EventType';
import DispatchTyoe from './DispatchType';

type EventsProps = DispatchTyoe & {
  events: EventType[];
};

export default EventsProps;
