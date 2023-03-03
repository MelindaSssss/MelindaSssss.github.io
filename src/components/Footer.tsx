import {
  SmileOutlined,
  // FacebookFilled,
  GithubFilled,
  MailFilled,
} from '@ant-design/icons'
import { Space, message } from 'antd'
import './footer.css'

const ICON_COLOR = '#31BD8C'
type DataType = 'github' | 'facebook' | 'mail'
const TargetMap: {
  [key: string | DataType]: { url: string }
} = {
  github: {
    url: 'https://github.com/MelindaSssss',
  },
  facebook: {
    url: 'https://www.facebook.com/search/top?q=Shi MeiLing',
  },
  mail: {
    url: 'sml9584happy@gmail.com',
  },
}

const CommonFooter = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const goTo = (target: DataType) => {
    window.open(TargetMap[target].url, '_blank')
  }
  return (
    <div className="common-footer">
      <div>
        <Space>
          <span> 联系博客主人</span>
          {/* <FacebookFilled
            style={{ color: ICON_COLOR }}
            onClick={() => goTo('facebook')}
          /> */}
          <GithubFilled
            style={{ color: ICON_COLOR }}
            onClick={() => goTo('github')}
          />
          <MailFilled
            style={{ color: ICON_COLOR }}
            onClick={() => {
              messageApi.open({
                type: 'success',
                content: TargetMap['mail'].url,
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              })
            }}
          />
        </Space>
      </div>
      <div>
        <SmileOutlined style={{ color: '#eb2f96' }} />
      </div>
      <div>
        ©2023 Created by <a href=" ">MelindaSssss</a>
      </div>
      {contextHolder}
    </div>
  )
}

export default CommonFooter
