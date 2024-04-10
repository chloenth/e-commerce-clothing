import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Navigation from './routes/navigation/Navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
