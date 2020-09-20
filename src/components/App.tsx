import React, { useReducer } from 'react';
import reducer from '../reducers';
import Event from './Event';
import EventType from '../types/EventType';
import EventForm from './EventForm';
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
    <div className="container-fluid">
      <EventForm events={state} dispatch={dispatch} />
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
          {/* {state.map((event: EventType, index: number) => {
              // ()でくくるとreturnの意味になるらしい

              const id = event.id;

              const handleClickDeleteButton = () => {
                // 状態を変えるためにdispatchを呼ぶ
                dispatch({
                  type: 'DELETE_EVENT',
                  id,
                  title: '',
                  body: '',
                });
              };

              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{event.title}</td>
                  <td>{event.body}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleClickDeleteButton}
                    >
                      削除
                    </button>
                  </td>
                </tr>
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
};

export default App;
