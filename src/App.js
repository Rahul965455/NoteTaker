import Note from "./Component/Note/Note";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Edit from "./Component/Notes/Edit";
function App() {
  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Note/>}></Route>
            <Route path="/edit/:id" element={<Edit/>} />


          </Routes>
         </BrowserRouter>
    </div>  
  );
}

export default App;
