import {Header} from './components/Header'
import {Board} from './components/Board'
import {Colors} from './components/Colors'
import {Tools} from './components/Tools'
import {Size} from './components/Size'
import './App.css'

function App() {
  
  return (
    <>
      <Header />
      <main className='grid grid-cols-2 gap-4'>
        <Board />
        <aside>
          <Colors />
          <Tools />
          <Size />
        </aside>
      </main>
    </>
  )
}

export default App
