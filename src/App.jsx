import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Item from "./pages/item/Item";
import Board from "./pages/board/Board";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="item" element={<Item />} />
        <Route path="board" element={<Board />} />
      </Route>
    </Routes>
  );
}

export default App;
