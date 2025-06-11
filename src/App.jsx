import Nav from "./Nav";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Nav />
      <div className="ml-5 mr-5 mt-5"> {/* acts as a wrapper */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
