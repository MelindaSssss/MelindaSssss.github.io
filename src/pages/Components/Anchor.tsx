import { useState, useEffect } from 'react'
import { Anchor } from 'antd'

type AnchorType = {
  nodeName?: string
  items?: AnchorItem[]
}
type AnchorItem = {
  key: string
  href: string
  title: string
  children?: AnchorItem[]
}

const AnchorPage = (props: AnchorType) => {
  const { nodeName, items } = props
  const [titles, setTitles] = useState<AnchorItem[]>([])

  useEffect(() => {
    if (nodeName) {
      const ele = document.getElementsByClassName(nodeName)[0]
      console.info('nodeName', nodeName, ele)
      let eid = 0
      let result = []
      // @ts-ignore
      for (const e of ele.childNodes) {
        if (
          // e.nodeName === 'H1' ||
          e.nodeName === 'H2' ||
          e.nodeName === 'H3' ||
          e.nodeName === 'H4' ||
          e.nodeName === 'H5' ||
          e.nodeName === 'H6'
        ) {
          let a = document.createElement('a')
          // a.setAttribute('id', '#' + eid)
          a.setAttribute('class', 'anchor-title' + eid)
          a.setAttribute('href', '#' + e.id)
          a.innerText = ' '
          let title = {
            key: e.nodeName + Math.random() * 1000,
            href: '#' + e.id,
            title: e.innerText,
          }
          result.push(title)
          e.appendChild(a)
          eid++
        }
      }
      setTitles(result)
    }
  }, [nodeName])

  return (
    <div>
      <Anchor
        //  @ts-ignore
        getContainer={() => document.getElementsByClassName(nodeName)[0]}
        items={nodeName ? titles : items}
      />
    </div>
  )
}

export default AnchorPage
