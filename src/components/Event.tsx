import React, { useContext } from 'react';
import EventProps from '../types/EventProps';
import { DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';
const Event = (props: EventProps) => {
  console.log(props);

  const id: number = props.event.id;

  /**
   * 削除ボタン押下時の処理
   */
  const handleClickDeleteButton: () => void = () => {
    // 状態を変えるためにdispatchを呼ぶ
    console.log(props);
    if (window.confirm(`id=${id}を削除します`)) {
      props.dispatch({
        type: DELETE_EVENT,
        id,
        title: '',
        body: '',
      });
    }
  };
  const value = useContext(AppContext);

  return (
    <>
      <div>{value}</div>
      <tr>
        <td>{id}</td>
        <td>{props.event.title}</td>
        <td>{props.event.body}</td>
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
