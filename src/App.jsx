import './App.css'
import HOCCompetitions from './Components/CompetitionsPage'
import HOCHeader from './Components/Header'
import Navbar from './Components/Navbar'
import HOCSponsors from './Components/Sponsors'

function App() {

  return (
    <>
      <Navbar />
      <HOCHeader />
      <HOCSponsors />
      <HOCCompetitions />
    </>
  )
}

export default App
