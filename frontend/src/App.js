import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-violet-300 via-fuchsia-200 to-violet-300">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
