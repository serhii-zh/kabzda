import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import { addPostEntry } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.dialogsPage} />
        <div className="app-wrapper-content">
          <Route path="/profile">
            <Profile
              state={props.state.profilePage}
              addPostEntry={addPostEntry}
            />
          </Route>
          <Route path="/dialogs">
            <Dialogs state={props.state.dialogsPage} addMessageEntry={props.addMessageEntry} />
          </Route>
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
