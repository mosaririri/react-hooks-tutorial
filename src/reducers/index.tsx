/*
* イベント
*/
type Event = {
    id: number,
    title: string,
    body: string
}

/*
*  アクション
*/
type Action = {
    type: string,
    title: string,
    body: string
}
/*
* reducer: 状態を表すstate,変化を起こすaction
*/
const events = (state: Event[] = [], action: Action) => {
   switch(action.type) {
       case 'CREATE_EVENT':
           const event = { title: action.title, body: action.body }
           const length = state.length
           const id = (length === 0) ? 1 : state[length - 1].id + 1 
           return [ ...state, { id, ...event }] 
       case 'DELETE_EVENT':
           return state
       case 'DELETE_ALL_EVENTS':
           return []
       default:
           return state
   }
}

export default events