import { useState } from 'react'

import './App.css'
import Student from './Pages/Student'
import TableData from './Pages/TableData'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>

      <Student />
      {/* <TableData /> */}
    </>
  )
}

export default App
