import { Watermark, Layout, Badge } from 'antd'
import type { pageTypeProps } from '../../App'
import CommonFooter from '../../components/Footer'
import './style.css'
import { SKILL_LIST } from './data'
const { Header, Content, Footer, Sider } = Layout
type IntroductionPageProps = {
  setPageType: React.Dispatch<React.SetStateAction<pageTypeProps>>
}
const IntroductionPage = (props: IntroductionPageProps) => {
  const { setPageType } = props
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layout>
        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2>:::::::::::::::</h2>
          <div className="button-wrap">
            <span
              onClick={() => setPageType(null)}
              className="beautiful-button"
            >
              返 回
            </span>
          </div>
        </Header>
        <Content style={{ height: 'calc( 100% - 100px)' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider width={200} style={{ paddingLeft: 50 }}>
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
            </Sider>
            <Content style={{ padding: '0 24px' }}>
              {/* <h2>自 白 书</h2>
              <div>
                如果我明天死去，我的墓志铭可以这样写 ----
                她拥有二十七年峥嵘岁月，和一位名叫点点的年轻爱人。不过如果运气好的话，也可以是她拥有百年峥嵘岁月，和一个叫做点点的老头儿。
              </div> */}

              <div className="content-wrapper-pink">
                {/* before */}
                <div className="content-inner-pink">
                  <div className="content-title-pink">
                    {' '}
                    <h2>自 白 书</h2>
                  </div>
                  <div className="content-desc-pink">
                    如果我明天死去，我的墓志铭可以这样写 ----
                    她拥有二十七年峥嵘岁月，和一位名叫点点的年轻爱人。不过如果运气好的话，也可以是她拥有百年峥嵘岁月，和一个叫做点点的老头儿。
                  </div>
                </div>
                {/* after */}
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer>
          <CommonFooter />
        </Footer>
      </Layout>
    </div>
  )
}

export default IntroductionPage
