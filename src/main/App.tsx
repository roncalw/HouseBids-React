import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from '../house/HouseDetail';
import HouseAdd from '../house/HouseAdd';
import HouseEdit from '../house/HouseEdit';
import ReactDoc from '../documentation/ReactDoc';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header subtitle="CodeFest Proof of Concept"></Header>
      <Routes>
        <Route path="/" element={<HouseList/>}></Route>
        <Route path="/house/:id" element={<HouseDetail/>}></Route>
          <Route path="/house/add" element={<HouseAdd />}></Route>
          <Route path="/house/edit/:id" element={<HouseEdit />}></Route>
          <Route path="/reactdoc" element={<ReactDoc/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;