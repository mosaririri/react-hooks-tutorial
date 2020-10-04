import React, { useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';
import ChangeType from '../types/ChangeType';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const unCreatable = title === '' || body === '';

  /**
   * イベント追加ボタン押下時の処理
   * @param event
   */
  const addEvent = (event: ChangeType) => {
    // dispatchを呼ぶにはactionが必要
    // actionにはtypeが必要
    dispatch({
      type: CREATE_EVENT,
      id: 0,
      title,
      body,
    });

    console.log(timeCurrentIso8601());

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };

  /**
   * 全てのイベントを削除を押下時の処理
   * @param event
   */
  const deleteAllEvents = (e: ChangeType) => {
    e.preventDefault();
    if (window.confirm('全てのイベントを削除します')) {
      dispatch({ type: DELETE_ALL_EVENTS, id: 0, title: '', body: '' });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const deleteAllOperationLogs = (e: ChangeType) => {
    e.preventDefault();
    if (window.confirm('全てのイベントを削除します')) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  return (
    <>
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

        <button
          className="btn btn-primary"
          disabled={unCreatable}
          onClick={addEvent}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          disabled={state.events.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          disabled={state.operationLogs.length === 0}
          onClick={deleteAllOperationLogs}
        >
          全ての操作ログを削除する
        </button>

        {/* <button className='btn btn-danger'>全ての操作ログを削除する</button> */}
      </form>
    </>
  );
};

export default EventForm;
