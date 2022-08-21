import Message from "./Message";
import MessageForm from "./MessageForm";
import {useEffect, useRef, useState} from "react";

function App() {

  const [messageList, setMessageList] = useState([
    // {
    //   id: 1,
    //   text: "some text 1",
    //   author: "Author 1"
    // },
    // {
    //   id: 2,
    //   text: "some text 2",
    //   author: "Author 2"
    // },
    // {
    //   id: 3,
    //   text: "some text 3",
    //   author: "Author 3"
    // },
  ]);

  const inputText = useRef(null);
  const inputAuthor = useRef(null);

  const addMessage = (text, author) => {
    let newMessageList = [];
    let lustId = 1;

    if (messageList.length !== 0) {
      newMessageList = Object.assign([], messageList);
      lustId = messageList[messageList.length - 1].id + 1;
    }
    newMessageList.push({
      id: lustId,
      text: text,
      author: author,
    });

    setMessageList(newMessageList);
  };

  const sendMessage = () => {
    addMessage(inputText.current.value, inputAuthor.current.value)
  };

  const robotMessage = () => {

    if (messageList.length !== 0){

      const lustMessage = messageList[messageList.length - 1];

      if (lustMessage.author !== 'robot') {
        const text = `ответ для ${lustMessage.author}`;

        setTimeout(addMessage, 1500, text, 'robot');
      }
    }
  };

  useEffect(() => {
    robotMessage();

  }, [messageList, robotMessage])

  return (
    <>
      {messageList.map(item => {
        return(
          <Message key={item.id} text={item.text} author={item.author}/>
        )
      })}

      <br/>

      <MessageForm inputText={inputText} inputAuthor={inputAuthor} sendMessage={sendMessage}/>
    </>
  );
}

export default App;
