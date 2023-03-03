import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import WorkPage from './pages/Work'
import LifePage from './pages/Life'
import IntroductionPage from './pages/Introduction'

export type pageTypeProps = 'work' | 'life' | 'me' | null

function App() {
  const [pageType, setPageType] = useState<pageTypeProps>(null)

  return (
    <div className="App">
      {!pageType && <HomePage setPageType={setPageType} />}
      {pageType === 'work' && <WorkPage />}
      {pageType === 'life' && <LifePage />}
      {pageType === 'me' && <IntroductionPage />}
    </div>
  )
}

export default App
