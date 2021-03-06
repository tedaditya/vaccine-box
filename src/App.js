import React from "react";
import Home from "./pages/home/Home";
import Notify from "./pages/notify/Notify";
import Log from "./pages/log/Log";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/notify" element={<Notify/>}/>
            <Route path="/log" element={<Log/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
