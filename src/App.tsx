/* eslint-disable no-new-func */
import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import WorkPage from './pages/Work'
import LifePage from './pages/Life'
import IntroductionPage from './pages/Introduction'

export type pageTypeProps = 'work' | 'life' | 'me' | null

function App() {
  const [pageType, setPageType] = useState<pageTypeProps>(null)
  // useEffect(() => {
  //   // 处理鼠标跟随效果
  //   const body = document.querySelector('body')
  //   const element = document.getElementById('pointer-home')
  //   // const elementEffect = document.getElementById('pointer-effect')

  //   function setPosition(x: number, y: number) {
  //     //@ts-ignore
  //     element.style.top = y - 1 + 'px'
  //     //@ts-ignore
  //     element.style.left = x - 1 + 'px'
  //   }
  //   //@ts-ignore
  //   body.onmousemove = (e) =>
  //     window.requestAnimationFrame(() => setPosition(e.clientX, e.clientY))
  //   //@ts-ignore
  //   body.onmouseenter = (e) => element.classList.remove('hidden')
  //   //@ts-ignore
  //   body.onmouseleave = (e) => element.classList.add('hidden')
  //   //@ts-ignore
  //   body.onmouseover = (e) =>
  //     //@ts-ignore
  //     e.target.dataset.cursor || e?.fromElement?.dataset.cursor
  //       ? element?.classList.add('hover')
  //       : element?.classList.remove('hover')
  // }, [])

  // useEffect(() => {
  //   var a_idx = 0
  //   window.onclick = function (event) {
  //     var a = [
  //       '❤富强❤',
  //       '❤民主❤',
  //       '❤文明❤',
  //       '❤和谐❤',
  //       '❤自由❤',
  //       '❤平等❤',
  //       '❤公正❤',
  //       '❤法治❤',
  //       '❤爱国❤',
  //       '❤敬业❤',
  //       '❤诚信❤',
  //       '❤友善❤',
  //     ]

  //     var heart = document.createElement('b') //创建b元素
  //     // @ts-ignore
  //     heart.onselectstart = new Function('event.returnValue=false') //防止拖动

  //     document.body.appendChild(heart).innerHTML = a[a_idx] //将b元素添加到页面上
  //     a_idx = (a_idx + 1) % a.length
  //     heart.style.cssText = 'position: fixed;left:-100%;' //给p元素设置样式

  //     var f = 16, // 字体大小
  //       x = event.clientX - f / 2, // 横坐标
  //       y = event.clientY - f, // 纵坐标
  //       c = randomColor(), // 随机颜色
  //       al = 1, // 透明度
  //       s = 1.2 // 放大缩小

  //     var timer = setInterval(function () {
  //       //添加定时器
  //       // @ts-ignore
  //       if (al <= 0) {
  //         document.body.removeChild(heart)
  //         clearInterval(timer)
  //       } else {
  //         heart.style.cssText =
  //           'font-size:16px;cursor: default;position: fixed;color:' +
  //           c +
  //           ';left:' +
  //           x +
  //           'px;top:' +
  //           y +
  //           'px;opacity:' +
  //           al +
  //           ';transform:scale(' +
  //           s +
  //           ');'

  //         y--
  //         al -= 0.016
  //         s += 0.002
  //       }
  //     }, 15)
  //   }
  //   // 随机颜色
  //   function randomColor() {
  //     return (
  //       'rgb(' +
  //       ~~(Math.random() * 255) +
  //       ',' +
  //       ~~(Math.random() * 255) +
  //       ',' +
  //       ~~(Math.random() * 255) +
  //       ')'
  //     )
  //   }
  // }, [])
  return (
    <div className="App">
      {/*  主页面 调整 鼠标跟随效果 */}

      {/* <div id="app-home"></div>
      <div id="pointer-home"></div>
      <div id="pointer-effect-home"></div> */}
      {/* 主页面 */}
      {!pageType && <HomePage setPageType={setPageType} />}
      {pageType === 'work' && <WorkPage setHomePage={setPageType} />}
      {pageType === 'life' && <LifePage setHomePage={setPageType} />}
      {pageType === 'me' && <IntroductionPage setPageType={setPageType} />}
    </div>
  )
}

export default App
