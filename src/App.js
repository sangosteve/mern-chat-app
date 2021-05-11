import logo from "./logo.svg";
import "./App.css";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  return (
    <div className="App">
      <div className="header">
        <ChatHeader />
      </div>
      <div className="chat_contents_wrapper">
        <Sidebar />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
