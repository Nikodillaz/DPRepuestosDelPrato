import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';


function App() {
 
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a DP Repuestos"}></ItemListContainer>

    </>


  );
}

export default App;
