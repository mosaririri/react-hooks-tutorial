import React from 'react'

import _Event from "../types/Event";

const Event = (dispatch: any, event: _Event) => {

    console.log(event);
    console.log(dispatch);
    
    const id = event.id

    const handleClickDeleteButton = () => {
        // 状態を変えるためにdispatchを呼ぶ
        dispatch({
        type:'DELETE_EVENT',
        id,
        title: '',
        body: ''
        }) 
    }

    return (
        <tr> 
            <td>{ dispatch.event.id }</td>
            <td>{ dispatch.event.title }</td>
            <td>{ dispatch.event.body }</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
 
}

export default Event