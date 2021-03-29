import Navigation from "./components/Navigation";
import MyHeader from "./components/MyHeader";
import MyComponent from "./components/MyComponent";
import Cakes from "./components/Cakes";
import Footer from "./components/Footer";
import MyJSON from "./data/cupcakes.json";
import JSONCakes from "./data/cakes.json";
import "./styles/style.css";


export default function App() {
  const ComponentArray = MyJSON.map((item) => (
    <MyComponent key={item.id} title={item.title} fileName={item.fileName} price={item.price}/> 
  ));

  const CakesList = JSONCakes.map((item) => (
    <Cakes key={item.id} title={item.title} fileName={item.fileName} price={item.price}/> 
  ));

  return (
    <div className="App">
      <Navigation/>
      <MyHeader/>
      <section class="content">
      <h2>Cupcakes</h2>
        <div class="article-item">{ComponentArray}</div>
        <h2>Wedding Cakes</h2>
        <div class="article-item">{CakesList}</div>
      </section>
      <Footer/>
    </div>
  );
}
