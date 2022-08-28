import React from 'react';
import {Outlet, Route, Routes, Link} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to={'/'}>Главная</CustomLink>
        <CustomLink to={'/chats'}>Чаты</CustomLink>
        <CustomLink to={'/profile'}>Профиль</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;