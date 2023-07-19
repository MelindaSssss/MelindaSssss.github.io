import { Tooltip } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label: (
      <Tooltip color="blue" title={label}>
        <span>{label}</span>
      </Tooltip>
    ),
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Artificial Intelligence', 'ai-parent', <HeartFilled />, [
    getItem('ChatGPTInPython', 'chatgpt-1'),
    getItem('Convolutional Neural Networks', 'basic-nn'),
  ]),
  getItem('有意思的CSS', 'css', <HeartFilled />, [
    getItem('粒子动画', 'particle-canvas'),
    getItem('粒子动画代码实现说明', 'particle-canvas-essay'),
  ]),
  getItem('工作随笔', 'workessay', <HeartFilled />, [
    // getItem('20230320', 'essay-20230320'),
    getItem('20221215', 'essay-20221215'),
    getItem('20230719', 'essay-20230719'),
  ]),
]

// 歌词
const lyricsData = [
  '一时失志不免怨叹',
  '一时落魄不免胆寒',
  '哪怕失去希望',
  '每日醉茫茫',
  '无魂有体亲像稻草人',
  '人生可比是海上的波浪',
  '有时起有时落',
  '好运歹运',
  '总嘛要照起工来行',
  '三分天注定',
  '七分靠打拼',
  '爱拼才会赢',
  '一时失志不免怨叹',
  '一时落魄不免胆寒',
  '那怕失去希望',
  '每日醉茫茫',
  '无魂有体亲像稻草人',
  '人生可比是海上的波浪',
  '有时起有时落',
  '好运歹运',
  '总嘛要照起工来行',
  '三分天注定',
  '七分靠打拼',
  '爱拼才会赢',
  '人生可比是海上的波浪',
  '有时起有时落',
  '好运歹运',
  '总嘛要照起工来行',
  '三分天注定',
  '七分靠打拼',
  '爱拼才会赢',
]

export { items, lyricsData }
