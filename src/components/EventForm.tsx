import React, { useState } from 'react';
import ChangeType from '../types/ChangeType';

const EventForm = (props: any) => {
  console.log(props);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const unCreatable = title === '' || body === '';

  /**
   * イベント追加ボタン押下時の処理
   * @param event
   */
  const addEvent = (event: ChangeType) => {
    event.preventDefault(); //デフォルト動作の抑止

    // dispatchを呼ぶにはactionが必要
    // actionにはtypeが必要
    props.dispatch({
      type: 'CREATE_EVENT',
      id: 0,
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  /**
   * 全てのイベントを削除を押下時の処理
   * @param event
   */
  const deleteAllEvents = (event: ChangeType) => {
    event.preventDefault();
    if (window.confirm('全てのイベントを削除します')) {
      props.dispatch({ type: 'DELETE_ALL_EVENTS', id: 0, title: '', body: '' });
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
          disabled={props.state.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>
        {/* <button className='btn btn-danger'>全ての操作ログを削除する</button> */}
      </form>
    </>
  );
};

export default EventForm;
