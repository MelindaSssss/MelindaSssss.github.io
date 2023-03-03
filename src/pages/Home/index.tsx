import { Timeline } from 'antd'

import './style/index.css'
import type { pageTypeProps } from '../../App'

type HomePageProps = {
  setPageType: React.Dispatch<React.SetStateAction<pageTypeProps>>
}
const HomePage = (props: HomePageProps) => {
  const { setPageType } = props
  const TIME_LINE_DATA = [
    {
      color: 'rgb(58,79,138)',
      children: (
        <div className="line-item" onClick={() => setPageType('work')}>
          好好工作
        </div>
      ),
    },
    {
      color: 'rgb(58,79,138)',
      children: (
        <div className="line-item" onClick={() => setPageType('life')}>
          好好生活
        </div>
      ),
    },
    {
      color: 'rgb(58,79,138)',
      children: (
        <div className="line-item" onClick={() => setPageType('me')}>
          关于我
        </div>
      ),
    },
  ]

  return (
    <div className="home-page">
      <h1 className="slogan">人活三万多天，开心一天是一天，所以要开心一点</h1>

      {/* 首页引导 */}
      <div className="time-line">
        <Timeline items={TIME_LINE_DATA} />
      </div>
    </div>
  )
}

export default HomePage
