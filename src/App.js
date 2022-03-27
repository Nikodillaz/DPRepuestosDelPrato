import './App.css';
import ComponenteA from './components/ComponenteA';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  const nombre = "Nicolas";
  return (
    <div>
   <NavBar/>
   <ItemListContainer greeting={"Saludos desde la app"}></ItemListContainer>

    </div>
  );
}

export default App;
