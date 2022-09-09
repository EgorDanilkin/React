
const initialState = {
  messages: [
    {
      id: 1,
      author: 'author1',
      text: 'text1',
    },
    {
      id: 2,
      author: 'author2',
      text: 'text2',
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch(action.type) {


    default:
      return state;
  }
};