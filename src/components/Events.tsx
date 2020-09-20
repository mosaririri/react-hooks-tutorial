import React from 'react';
import Event from './Event';
import EventType from '../types/EventType';
import EventsProps from '../types/EventsProps';

const Events = (props: EventsProps) => {
  return (
    <>
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
          {props.events.map((event: EventType, index: number) => (
            <Event key={index} event={event} dispatch={props.dispatch} />
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
    </>
  );
};

export default Events;
