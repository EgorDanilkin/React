import React, {useState} from 'react';
import {Grid, ListItem, List} from "@mui/material";
import {Routes, Route, Outlet} from "react-router-dom";
import CustomLink from "./Components/CustomLink";
import Chat from "./Chat";

const Chats = () => {
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

  const deleteChat = (event) => {
    const id = event.target.name;

    const newCatList = [...chatList]
    newCatList.splice(chatList.findIndex(item => item.id == id), 1);

    setChatList(newCatList);
  };

  return (
    <>
      <List>
        <Grid container justifyContent={"flex-start"} direction={"column"}>
          <Grid item md={3}>
            {chatList.map( item => {
              return (
                <ListItem key={item.id}>
                  <CustomLink to={'chat/' + item.id}>
                    {item.name} <button name={item.id} onClick={deleteChat}>X</button>
                  </CustomLink>
                </ListItem>
              )
            })}
          </Grid>
          <Outlet />
        </Grid>
      </List>
    </>
  );
};

export default Chats;