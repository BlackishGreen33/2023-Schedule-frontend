import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import TodoList from "./page/TodoList";



export default function App() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/TodoList" element={<TodoList />} />
            </Routes >
        </BrowserRouter >
    );
}