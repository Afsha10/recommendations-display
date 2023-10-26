import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="bg-gradient-to-tl from-pink-300 via-purple-300 to-purple-300">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
