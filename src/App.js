import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comments from './Comments/Comments';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
        <Route path="/comments" element={<Comments/>}  />
        
    </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
