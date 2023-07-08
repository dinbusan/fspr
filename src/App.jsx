import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Body />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
