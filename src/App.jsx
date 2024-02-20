import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header/>
      <div className="flex-fill">
        <h1>App</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default App
