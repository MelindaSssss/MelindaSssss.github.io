// import { Watermark } from 'antd'

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { items, lyricsData } from './data'
import ContentMap from './ContentMap'
import './index.css'
import CommonFooter from '../../components/Footer'
import CommonHeader from '../../components/Header'

const { Header, Sider, Content } = Layout

type WorkType = {
  setHomePage: React.Dispatch<React.SetStateAction<any>>
}
const WorkPage = (props: WorkType) => {
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
    <div className="work-page">
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider className="work-sider" width={250}>
          <div
            className="sider-top"
            onClick={() => {
              // work的home
              setPageType('home')
            }}
          >
            好好工作，努力拼搏
          </div>
          <div className="sider-bottom">
            <Menu onClick={onClick} mode="inline" items={items} />
          </div>
        </Sider>
        <Layout style={{ width: '100%', height: '100%' }}>
          {/* <Layout style={{ boxSizing: 'border-box', padding: '16px' }}> */}
          {pageType === 'home' ? (
            <>
              <Header>
                <CommonHeader
                  setPageType={() => {
                    // 博客首页
                    setHomePage(null)
                  }}
                />
              </Header>
              <Content
                className="work-home-content"
                style={{
                  boxSizing: 'border-box',
                  marginTop: '85px',
                  textAlign: 'center',
                  overflowY: 'scroll',
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
            </>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '16px',
                overflowY: 'scroll',
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

export default WorkPage
