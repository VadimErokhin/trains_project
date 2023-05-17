import { useState } from 'react'
import './App.css'
import Table from './components/Table'
import { Train } from './types'
import SpeedLimitTable from './components/SpeedLimitTable'

function App() {
  const [trains, setTrains] = useState<Train[]>([])
  const [currentTrain, setCurrentTrain] = useState<Train | null>(null)

  async function getData() {
    const response = await fetch("https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json")
    const data = await response.json()
    setTrains(data)
  }
  getData()


  return (
   <div className='wrapper'>
    <Table setCurrentTrain={setCurrentTrain} trains={trains} />
    {currentTrain && <SpeedLimitTable currentTrain={currentTrain} />}
   </div>
  )
}

export default App
