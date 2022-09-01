import Chats from "./Chats";
import Layout from "./Components/Layout";
import Profile from "./Profile";
import {Routes, Route, Link} from "react-router-dom";
import Chat from "./Chat";
import NotFound from "./NotFound";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/chats'} element={<Chats />}>
          <Route path={'chat/:id'} element={<Chat />}/>
        </Route>
        <Route path={'/profile'} element={<Profile />}/>
        <Route path={'/*'} element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
