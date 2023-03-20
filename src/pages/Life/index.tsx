// import { Watermark } from 'antd'
import { Layout, Menu } from 'antd'
import './index.css'
import { items, lyricsData } from './data'
import CommonFooter from '../../components/Footer'
import CommonHeader from '../../components/Header'

const { Header, Sider, Content } = Layout

type LifeType = {
  setHomePage: React.Dispatch<React.SetStateAction<any>>
}
const LifePage = (props: LifeType) => {
  const { setHomePage } = props
  return (
    <div className="special-wrap-life">
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
          className="life-sider"
          width={250}
        >
          <div
            className="sider-top"
            onClick={() => {
              console.info('回到这里的首页')
            }}
          >
            好好生活，慢慢相遇
          </div>
          <div className="sider-bottom">
            <Menu
              onClick={() => {
                console.info('点了按钮')
              }}
              mode="inline"
              items={items}
            />
          </div>
        </Sider>
        <Layout style={{ width: '100%', height: '100%', marginLeft: 250 }}>
          <Header>
            <CommonHeader
              setPageType={() => {
                // 博客首页
                setHomePage(null)
              }}
              pageFrom="life"
            />
          </Header>
          <Content
            style={{
              boxSizing: 'border-box',
              marginTop: '85px',
              textAlign: 'center',
              // overflowY: 'scroll',
            }}
          >
            <div style={{ borderTop: '4px solid #fff' }}>
              {lyricsData.map((item) => {
                return (
                  <div style={{ lineHeight: '34px', letterSpacing: '4px' }}>
                    {item}
                  </div>
                )
              })}
            </div>

            <div style={{ borderTop: '4px solid #fff' }}>
              <CommonFooter />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LifePage
