import Message from "./Message";
import MessageForm from "./MessageForm";
import Chat from "./Chat"
import {useEffect, useRef, useState} from "react";
import {List, Box, Grid, Container, ThemeProvider, createTheme} from "@mui/material";
import {orange} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: orange,
  },
  spacing: 6,
});

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
  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: 'chat 1',
    },
    {
      id: 2,
      name: 'chat 2',
    },
  ]);

  const inputText = useRef(null);
  const inputAuthor = useRef(null);

  const addMessage = (text, author) => {
    let lustId = 1;

    if (messageList.length !== 0) {
      lustId = messageList[messageList.length - 1].id + 1;
    }

    setMessageList(prev => [...prev, {id: lustId, text: text, author: author}]);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const text = event.target.text.value;
    const author = event.target.author.value;

    addMessage(text, author)
  };

  const robotMessage = () => {

    if (messageList.length !== 0){

      const lustMessage = messageList[messageList.length - 1];

      if (lustMessage.author !== 'robot') {
        const text = `ответ для ${lustMessage.author}`;
        addMessage(text, 'robot');
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      robotMessage();
    }, 1500);
  }, [messageList, robotMessage])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Grid container justifyContent="center">
          <Grid item md={3}>
            {chatList.map( item => {
              return (
                <Chat key={item.id} name={item.name}/>
              )
            })}
          </Grid>
          <Grid item md={9}>
            {messageList.map(item => {
              return(
                <Message key={item.id} text={item.text} author={item.author}/>
              )
            })}
          </Grid>
          <MessageForm sendMessage={sendMessage}/>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
