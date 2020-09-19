import React, { useReducer, useState } from 'react';
import reducer from '../reducers';
import Event from './Event';
import EventType from '../types/EventType';
// bootstrap導入後、コメントを解けばスタイルが適用される
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const initialState: EventType[] = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  type ChangeType = React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const addEvent = (event: ChangeType) => {
    event.preventDefault(); //デフォルト動作の抑止

    // dispatchを呼ぶにはactionが必要
    // actionにはtypeが必要
    dispatch({
      type: 'CREATE_EVENT',
      id: 0,
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
        {/* <button className='btn btn-danger'>全ての操作ログを削除する</button> */}

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
            {/* {state.map((event, index) => (
              <Event index={index} event={event} dispatch={dispatch} />
            ))} */}
            {state.map((event: EventType, index: number) => {
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
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
