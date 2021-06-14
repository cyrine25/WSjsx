import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadBar from './components/HeadBar';
import { Footer, Title } from './components/Footer';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <HeadBar/>
      <Title/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
