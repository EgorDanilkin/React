import React, {useState} from 'react';
import {Grid, ListItem, List} from "@mui/material";
import {Routes, Route, Outlet} from "react-router-dom";
import CustomLink from "./Components/CustomLink";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {chatsGetSelector} from "./redux/reducers/chatsSelector";

const Chats = () => {
  const chatList = useSelector(chatsGetSelector)

  const dispatch = useDispatch();

  const deleteChat = (id) => {
    dispatch({type: 'delete_chat', payload: id})
  };

  const addChat = () => {
    dispatch({type: 'add_chat', payload: {
      id: Math.random(),
      name: prompt(),
      }})
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
                    {item.name} <button onClick={() => deleteChat(item.id)}>X</button>
                  </CustomLink>
                </ListItem>
              )
            })}
            <button onClick={addChat}>Добавить чат</button>
          </Grid>
          <Outlet />
        </Grid>
      </List>
    </>
  );
};

export default Chats;