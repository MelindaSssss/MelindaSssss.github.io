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
  getItem('领袖用典', 'leader-talks', <HeartFilled />, [
    getItem('操其要于上', 'leader_one'),
  ]),
]

// 歌词
const lyricsData = [
  '轻轻敲醒沉睡的心灵',

  '慢慢张开你的眼睛',
  '看看忙碌的世界',

  '是否依然孤独的转个不停',

  '春风不解风情',

  '吹动少年的心',

  '让昨日脸上的泪痕',

  '随记忆风干了',

  '抬头寻找天空的翅膀',

  '候鸟出现它的影迹',

  '带来远处的饥荒',

  '无情的战火依然存在的消息',

  '玉山白雪飘零',

  '燃烧少年的心',

  '使真情溶化成音符',

  '倾诉遥远的祝福',

  '唱出你的热情',

  '伸出你双手',

  '让我拥抱着你的梦',

  '让我拥有你真心的面孔',

  '让我们的笑容',

  '充满着青春的骄傲',

  '为明天献出虔诚的祈祷',

  '轻轻敲醒沉睡的心灵',

  '慢慢张开你的眼睛',

  '看看忙碌的世界',

  '是否依然孤独的转个不停',

  '日出唤醒清晨',

  '大地光彩重生',

  '让和风拂出的音响',

  '谱成生命的乐章',

  '唱出你的热情',

  '伸出你双手',

  '让我拥抱着你的梦',

  '让我拥有你真心的面孔',

  '让我们的笑容',

  '充满着青春的骄傲',

  '让我们期待明天会更好',

  '唱出你的热情',

  '伸出你双手',

  '让我拥抱着你的梦',

  '让我拥有你真心的面孔',

  '让我们的笑容',

  '充满着青春的骄傲',

  '让我们期待明天会更好',

  '让我们期待明天会更好',
]

export { items, lyricsData }
