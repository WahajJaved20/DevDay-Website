import './App.css'
import HOCCompetitions from './Components/CompetitionsPage'
import HOCFooter from './Components/HomeFooter'
import HOCHeader from './Components/Header'
import Navbar from './Components/Navbar'
import HOCSponsors from './Components/Sponsors'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import HOCPartners from './Components/OutreachPartners'
import HOCCommunities from './Components/CommunityPartners'

function App() {

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Navbar />
      <HOCHeader />
      <HOCSponsors />
      <HOCCommunities />
      <HOCPartners />
      <HOCCompetitions />
      <HOCFooter />
    </>
  )
}

export default App
