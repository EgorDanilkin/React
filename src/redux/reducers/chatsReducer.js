
const initialState = {
  chats: [
    {
    id: 1,
    name: 'chat 1',
    },
    {
      id: 2,
      name: 'chat 2',
    },
  ]
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_chat':
      return {
        ...state,
        chats: [...state.chats, action.payload],
      }
    case 'delete_chat':
      return {
        ...state,
        chats: state.chats.filter(item => {return item.id !== action.payload})
      }
    default:
      return state
  }
};