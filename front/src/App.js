

import {Routes, Route} from "react-router-dom"
import Home from "./page/Home";
import Detail from "./page/Detail";
import Update from "./page/Update";
import Create from "./page/Create";

function App() {
  return (
    <div className="container-sm">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
