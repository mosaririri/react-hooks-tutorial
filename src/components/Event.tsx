import React, { useContext } from 'react';
import EventProps from '../types/EventProps';
import EventType from '../types/EventType';
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const Event = (props: EventProps) => {
  const { dispatch } = useContext(AppContext);
  const event: EventType = props.event;

  const id: number = event.id;

  /**
   * 削除ボタン押下時の処理
   */
  const handleClickDeleteButton: () => void = () => {
    // 状態を変えるためにdispatchを呼ぶ
    if (window.confirm(`id=${id}を削除します`)) {
      dispatch({
        type: DELETE_EVENT,
        id,
        title: '',
        body: '',
      });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベントid=${id}を削除しました`,
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  return (
    <>
      <tr>
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
    </>
  );
};

export default Event;
