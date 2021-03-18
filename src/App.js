import './App.css';
import "./styles.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import HeaderTwo from "./components/Header/HeaderTwo";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderTwo />
        <Body />
        <Footer />
    </div>
  );
}

export default App;
