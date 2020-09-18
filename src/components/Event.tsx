import React from 'react';

import EventType from '../types/EventType';

const Event = (key: number, dispatch: any, event: EventType) => {
  console.log(event);
  console.log(dispatch);

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
    <tr key={key}>
      <td>{dispatch.event.id}</td>
      <td>{dispatch.event.title}</td>
      <td>{dispatch.event.body}</td>
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
};

export default Event;
