import { useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import './index.css'
import { items, lyricsData } from './data'
import ContentMap from './ContentMap'
import CommonFooter from '../../components/Footer'
import CommonHeader from '../../components/Header'

const { Header, Sider, Content } = Layout

type LifeType = {
  setHomePage: React.Dispatch<React.SetStateAction<any>>
}
const LifePage = (props: LifeType) => {
  const { setHomePage } = props
  const [pageType, setPageType] = useState<any>('home')
  const onClick: MenuProps['onClick'] = (e) => {
    setPageType(e.key)
  }

  const getContent = (type: keyof typeof ContentMap) => {
    const result = ContentMap[type]
    return result
  }
  return (
    <div className="special-wrap-life">
      <Layout>
        <Sider
          // style={{
          //   overflow: 'auto',
          //   height: '100vh',
          //   position: 'fixed',
          //   left: 0,
          //   top: 0,
          //   bottom: 0,
          // }}
          className="life-sider"
          width={250}
        >
          <div
            className="sider-top"
            onClick={() => {
              // life的home
              setPageType('home')
            }}
          >
            好好生活，慢慢相遇
          </div>
          <div className="sider-bottom">
            <Menu onClick={onClick} mode="inline" items={items} />
          </div>
        </Sider>
        <Layout className="life-inner">
          {pageType === 'home' ? (
            <>
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
                <embed
                  src="../../assets/musics/M500001Qbv2W1EcBrT.mp3"
                  width="0"
                  height="0"
                ></embed>
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
            </>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '16px',
                // overflowY: 'scroll',
              }}
            >
              {getContent(pageType)}
            </div>
          )}
        </Layout>
      </Layout>
    </div>
  )
}

export default LifePage
