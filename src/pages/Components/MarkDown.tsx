import React from 'react'
import ReactMarkdown from 'react-markdown'
//@ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  vscDarkPlus,
  coyWithoutShadows,
  darcula,
  //@ts-ignore
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm' // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw' // 解析标签，支持html语法
import 'github-markdown-css' // 内容样式
// darcula webstorm
// vscDarkPlus vscode暗色主题
//高亮的主题，还有很多别的主题，可以自行选择
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

type tProps = {
  textContent: string
  darkMode?: boolean // markdown文本
}

const them = {
  dark: vscDarkPlus,
  light: coyWithoutShadows,
}

const OmsViewMarkdown = (props: tProps) => {
  const { textContent, darkMode } = props
  if (typeof darkMode === 'undefined') {
    them.light = darcula
  }
  if (typeof darkMode === 'boolean') {
    them.light = coyWithoutShadows
  }
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      // remarkPlugins={[remarkGfm, { singleTilde: false }]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              showLineNumbers={true}
              style={darkMode ? them.dark : them.light}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {textContent}
    </ReactMarkdown>
  )
}

export default OmsViewMarkdown
