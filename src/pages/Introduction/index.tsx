import { Badge, Collapse } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import type { pageTypeProps } from '../../App'
import CommonFooter from '../../components/Footer'
import './style.css'
import { SKILL_LIST } from './data'

const { Panel } = Collapse

type IntroductionPageProps = {
  setPageType: React.Dispatch<React.SetStateAction<pageTypeProps>>
}

const IntroductionPage = (props: IntroductionPageProps) => {
  const { setPageType } = props
  return (
    <div className="introduction-page">
      <div  className="introduction-page-content">
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
        <div className="content-box">
          <div className="content-left">
            <div className="content-wrapper-pink">
              {/* before */}
              <div className="content-inner-pink">
                <div className="content-title-pink">
                  <h2>自 白 书</h2>
                </div>
                <div className="content-desc-pink">
                  如果我明天死去，我的墓志铭可以这样写 ----
                  <br />
                  她拥有二十七年峥嵘岁月，和一位名叫点点的年轻爱人。
                  <br />
                  不过如果运气好的话，
                  <br />
                  也可以是她拥有百年峥嵘岁月，和一个叫做点点的老头儿。
                </div>
              </div>
              {/* after */}
            </div>
          </div>
          <div className="content-right">
            <div className="content-right-inner">
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
          </div>
        </div>
        {/* main-introduction */}
        <div className="main-introduction-box">
          <Collapse
            defaultActiveKey={['1', '2', '3', '4', '5', '6']}
            ghost
            expandIcon={() => (
              <HeartFilled style={{ color: 'pink', fontSize: '14px' }} />
            )}
          >
            <Panel header="教育背景 / EDUCATION" key="1">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>齐齐哈尔大学 (Qiqihar University)</span>
                <span>2014.09 - 2018.07 </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>学位信息 ( Degree information)</span>
                <span>学士学位 (Bachelor of Engineering (B.E.) )</span>
              </div>
            </Panel>
            <Panel header="工作经历 / DEVELOP RELATED EXPERIENCE" key="2">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>上海德拓信息技术股份有限公司 (DATATOM)</span>
                <span>2021.06 - 至今 </span>
              </div>
            </Panel>
            <Panel header="个人简介 / PROFILE" key="3">
              Good command of Computer skills: familiar with different versions
              of Windows OS and Office application software, able to program
              with C and Fortran languages, obtained some experience and
              understanding about other widely-used software like Autocad,
              Photoshop.
            </Panel>
          </Collapse>
        </div>
        {/* footer */}
        <div className="footer-box">
          <CommonFooter />
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage
