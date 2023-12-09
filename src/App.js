import Earth from "./game/Earth/Earth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Moon from "./game/Moon/Moon";
import React from "react";
import Mars from "./game/Mars/Mars";
import Neptune from "./game/Neptune/Neptune";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Earth/>}></Route>
                <Route path={'/moon'} element={<Moon/>}></Route>
                <Route path={'/mars'} element={<Mars/>}></Route>
                <Route path={'/neptune'} element={<Neptune/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
