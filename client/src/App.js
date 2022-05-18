import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChatList } from "./pages/ChatList";
import { ChatRoom } from "./pages/ChatRoom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatList />} />
                <Route path="/room1" element={<ChatRoom />} />
                <Route path="/room2" element={<ChatRoom />} />
            </Routes>
        </Router>
    );
}

export default App;
