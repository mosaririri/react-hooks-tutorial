import React, { useReducer, useState } from 'react';
import reducer from '../reducers'
// bootstrap導入後、コメントを解けばスタイルが適用される
// import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e: any) => {
    e.preventDefault() //デフォルト動作の抑止
    

    // dispatchを呼ぶにはactionが必要
    // actionにはtypeが必要
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    
    setTitle('')
    setBody('')

  }

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => {
            setTitle(e.target.value)
          }}/>
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={e => {
            setBody(e.target.value)
          }}/>
        </div>

        <button className='btn btn-promary' onClick={addEvent}>イベントを作成する</button>
        <button className='btn btn-danger'>全てのイベントを削除する</button>
        {/* <button className='btn btn-danger'>全ての操作ログを削除する</button> */}

        <h4>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>

          </thead>
          <tbody>

          </tbody>
        </table>



      </form>
   </div>
  );
}

export default App;
