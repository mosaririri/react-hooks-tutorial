import EventType from '../types/EventType';
import DispatchTyoe from './DispatchType';

// type EventProps = {
//   event: EventType;
//   dispatch: React.Dispatch<Action>;
// };

type EventProps = DispatchTyoe & {
  event: EventType;
};

export default EventProps;
