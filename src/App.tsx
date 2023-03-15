import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/Home'
import WorkPage from './pages/Work'
import LifePage from './pages/Life'
import IntroductionPage from './pages/Introduction'

export type pageTypeProps = 'work' | 'life' | 'me' | null

function App() {
  const [pageType, setPageType] = useState<pageTypeProps>(null)
  useEffect(() => {
    // 处理鼠标跟随效果
    const body = document.querySelector('body')
    const element = document.getElementById('pointer-home')
    // const elementEffect = document.getElementById('pointer-effect')

    function setPosition(x: number, y: number) {
      //@ts-ignore
      element.style.top = y - 1 + 'px'
      //@ts-ignore
      element.style.left = x - 1 + 'px'
    }
    //@ts-ignore
    body.onmousemove = (e) =>
      window.requestAnimationFrame(() => setPosition(e.clientX, e.clientY))
    //@ts-ignore
    body.onmouseenter = (e) => element.classList.remove('hidden')
    //@ts-ignore
    body.onmouseleave = (e) => element.classList.add('hidden')
    //@ts-ignore
    body.onmouseover = (e) =>
      //@ts-ignore
      e.target.dataset.cursor || e?.fromElement?.dataset.cursor
        ? element?.classList.add('hover')
        : element?.classList.remove('hover')
  }, [])
  return (
    <div className="App">
      {/*  主页面 调整 鼠标跟随效果 */}

      <div id="app-home"></div>
      <div id="pointer-home"></div>
      <div id="pointer-effect-home"></div>
      {/* 主页面 */}
      {!pageType && <HomePage setPageType={setPageType} />}
      {pageType === 'work' && <WorkPage setHomePage={setPageType} />}
      {pageType === 'life' && <LifePage />}
      {pageType === 'me' && <IntroductionPage setPageType={setPageType} />}
    </div>
  )
}

export default App
