import { Badge } from 'antd'
import type { pageTypeProps } from '../../App'
import CommonFooter from '../../components/Footer'
import './style.css'
import { SKILL_LIST } from './data'

type IntroductionPageProps = {
  setPageType: React.Dispatch<React.SetStateAction<pageTypeProps>>
}
const IntroductionPage = (props: IntroductionPageProps) => {
  const { setPageType } = props
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ margin: '0 40px' }}>
        {/* header */}
        <div
          className="header-box"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <h2>:::::::::::::::</h2>
          {/* 特殊小鸟按钮 */}
          <div
            className="button button--bird"
            onClick={() => setPageType(null)}
          >
            <div className="button__wrapper">
              <span className="button__text">BACK</span>
            </div>
            {/* 有意思的三个小鸟 */}

            <div className="birdBox">
              <div className="bird wakeup">
                <div className="bird__face"></div>
              </div>
              <div className="bird">
                <div className="bird__face"></div>
              </div>
              <div className="bird wakeup">
                <div className="bird__face"></div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="content-box" style={{ display: 'flex' }}>
          <div className="content-left">
            {SKILL_LIST.map((item: typeof SKILL_LIST[0]) => {
              return (
                <div>
                  <Badge
                    className="site-badge-count-109"
                    count={item.desc}
                    style={{ backgroundColor: item.bg }}
                  />
                </div>
              )
            })}
          </div>
          <div className="content-right">
            <div className="content-wrapper-pink">
              {/* before */}
              <div className="content-inner-pink">
                <div className="content-title-pink">
                  <h2>自 白 书</h2>
                </div>
                <div className="content-desc-pink">
                  如果我明天死去，我的墓志铭可以这样写 ----
                  她拥有二十七年峥嵘岁月，和一位名叫点点的年轻爱人。不过如果运气好的话，也可以是她拥有百年峥嵘岁月，和一个叫做点点的老头儿。
                </div>
              </div>
              {/* after */}
            </div>
          </div>
        </div>
        {/* main-introduction */}
        <div className="main-introduction-box"></div>
        {/* footer */}
        <div className="footer-box">
          <CommonFooter />
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage
