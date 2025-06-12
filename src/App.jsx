import { Outlet } from "react-router-dom";
import Nav from "./Nav";
function App() {
  return (
    <>

      <Nav />

      <main className="ml-5 mr-5 mt-5"> {/* acts as a wrapper */}
        <Outlet />
      </main>
    </>

  );
}

export default App;
