

import { ToastContainer } from 'react-toastify'

import Nav from './Component/Navbar'
import MainRoutes from './MainRoutes'
import Footer from './Component/Footer'
import Loader from './Pages/Loader'
import LoaderHome from './Pages/Loaderhome'
import { useEffect, useState } from 'react'
// import "./App.css"
function App () {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 2500);


    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showGif ? (
        <LoaderHome />) : (<div>   <Nav />
          <ToastContainer />
          <MainRoutes />
          <Footer />
        </div>)}

      {/* <Student /> */}
      {/* <TableData /> */}
      {/* <Loader /> */}
    </>
  )
}

export default App
