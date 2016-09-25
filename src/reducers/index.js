const defaultState = {count: 0, total:0}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1, total: state.total + 1})
    case 'DECREMENT':
      return Object.assign({}, state, {count: state.count - 1, total: state.total + 1})
    default:
      return state
  }
}