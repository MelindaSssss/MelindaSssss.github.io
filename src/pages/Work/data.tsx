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
    label,
    type,
  } as MenuItem
}

const items: MenuProps['items'] = [
  // getItem('Artificial Intelligence', 'ai-parent'),
  getItem('Artificial Intelligence', 'ai-parent', <HeartFilled />, [
    getItem('ChatGPTInPython', 'chatgpt-1'),
  ]),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem(
  //     'Item 1',
  //     'g1',
  //     null,
  //     [getItem('Option 1', '1'), getItem('Option 2', '2')],
  //     'group',
  //   ),
  //   getItem(
  //     'Item 2',
  //     'g2',
  //     null,
  //     [getItem('Option 3', '3'), getItem('Option 4', '4')],
  //     'group',
  //   ),
  // ]),

  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [
  //     getItem('Option 7', '7'),
  //     getItem('Option 8', '8'),
  //   ]),
  // ]),

  { type: 'divider' },

  // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),

  // getItem(
  //   '有意思的CSS',
  //   'grp',
  //   null,
  //   [getItem('粒子动画', 'particle-canvas')],
  //   // [getItem('粒子动画', 'particle-canvas'), getItem('睡觉的', '14')],
  //   'group',
  // ),
  getItem('有意思的CSS', 'css', <HeartFilled />, [
    getItem('粒子动画', 'particle-canvas'),
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
