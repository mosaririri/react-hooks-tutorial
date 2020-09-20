import React, { useReducer } from 'react';
import reducer from '../reducers';
import Events from './Events';
import EventType from '../types/EventType';
import EventForm from './EventForm';
import AppContext from '../contexts/AppContext';
// bootstrap導入後、コメントを解けばスタイルが適用される
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const initialState: EventType[] = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * イベント追加ボタン押下時の処理
   * @param event
   */
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
