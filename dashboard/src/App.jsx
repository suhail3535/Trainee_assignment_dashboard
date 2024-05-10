

import { ToastContainer } from 'react-toastify'

import Nav from './Component/Navbar'
import MainRoutes from './MainRoutes'
import Footer from './Component/Footer'
import Loader from './Pages/Loader'
// import "./App.css"
function App () {

  return (
    <>

      <Nav />
      <ToastContainer />
    <MainRoutes />
      <Footer />
      {/* <Student /> */}
      {/* <TableData /> */}
      {/* <Loader /> */}
    </>
  )
}

export default App
