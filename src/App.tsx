import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import PreSalePage from './pages/PreSalePage/PreSalePage';
import { Line, Content } from './theme';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Content>
        <Routes>
          <Route path='/presale' element={<PreSalePage/>}/>
        </Routes>
      </Content>
      <Line/>
      <Footer/>
    </>
  );
}

export default App;
