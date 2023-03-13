// import { Watermark } from 'antd'

import { useState } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { items } from './data'
import './index.css'

const { Header, Footer, Sider, Content } = Layout

const WorkPage = () => {
  const [pageType, setPageType] = useState<string | 'home'>('home')
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setPageType(e.key)
  }
  return (
    <div className="work-page">
      <Layout>
        <Sider className="work-sider" width={250}>
          <div className="sider-top">好好工作，努力拼搏</div>
          <div className="sider-bottom">
            <Menu onClick={onClick} mode="inline" items={items} />
          </div>
        </Sider>
        <Layout>
          {pageType === 'home' ? (
            <>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </>
          ) : (
            <div>展示文章详情</div>
          )}
        </Layout>
      </Layout>
    </div>
  )
}

export default WorkPage
