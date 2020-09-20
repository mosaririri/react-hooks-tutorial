import React, { useReducer } from 'react';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm';
import AppReducerType from '../types/AppReducerType';

import AppContext from '../contexts/AppContext';
// bootstrap導入後、コメントを解けばスタイルが適用される
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const initialState: AppReducerType = {
    events: [],
    operationLogs: [],
  };
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
