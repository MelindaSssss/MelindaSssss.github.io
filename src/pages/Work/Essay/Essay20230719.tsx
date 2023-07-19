import React, { useEffect } from 'react'
import { Card } from 'antd'
import OmsSyntaxHighlight from '../../Components/CodeHighLight'
import yooupiSrc from '../images/workimg/yooupi.png'
import rangeSrc from '../images/workimg/range.png'
import contentSrc from '../images/workimg/contentrange.png'
import lianxuSrc from '../images/workimg/liaison.png'
import threeOneSrc from '../images/workimg/three_1.png'
import threeTwoSrc from '../images/workimg/three_2.png'
import threeSrc from '../images/workimg/range-three-part.png'
import '../styles/essay.css'

interface Essay20230719Props {}

const imgHtmlOrigin = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <a href="http://localhost:3000/aaa">download img</a>
    <script>
      axios
        .get('http://localhost:3000', {
          headers: {
            Range: 'bytes=6-',
            // Range: 'bytes=0-15',
          },
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    </script>
  </body>
</html>
`

const imgJsOrigin = `
const express = require('express')
const app = express()

app.get('/aaa', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Disposition', 'attachment; filename="rangeTest.jpg"')
  // res.end('range-txt-test 测试range的范围哈哈嘿嘿嘻嘻呼呼啪啪')
  res.send('./rangeTest.jpg')
})

app.get('/', (req, res, next) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')

  res.download('./rangeTest.jpg', {
    acceptRanges: true,
  })
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
`

const imgHtmlMerge = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <img id="imgRange" />
    <!-- 1544332  分成三节-->
    <script>
      // 第一部分

      const p1 = new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000', {
            headers: {
              Range: 'bytes=0-450000',
            },
            responseType: 'arraybuffer',
          })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })

      // axios
      //   .get('http://localhost:3000', {
      //     headers: {
      //       Range: 'bytes=0-450000',
      //     },
      //   })
      //   .then((res) => {})
      //   .catch((err) => {
      //     console.log(err)
      //   })

      // 第二部分
      const p2 = new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000', {
            headers: {
              Range: 'bytes=450001-1000000',
            },
            responseType: 'arraybuffer',
          })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })

      // 第三部分
      const p3 = new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000', {
            headers: {
              Range: 'bytes=1000001-',
            },
            responseType: 'arraybuffer',
          })
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })

      // 把三个promise合起来

      Promise.all([p1, p2, p3]).then((res) => {
        // 拿到三个返回的二进制数据
        const [buffer1, buffer2, buffer3] = res
        console.log(buffer1, buffer2, buffer3)

        // todo 不知道为啥 buffer3.length 是undefined
        const totalLength =
          buffer1.byteLength + buffer2.byteLength + buffer3.maxByteLength

        // console.info(
        //   'totalLength=========>',
        //   totalLength,
        //   buffer1.byteLength,
        //   buffer2.byteLength,
        //   buffer3,
        //   buffer3.maxByteLength,
        // )
        // 把数组组装起来
        const arr = new Uint8Array(totalLength)

        // 每个 arraybuffer 都创建一个对应的 Uint8Array 对象，
        // 然后创建一个长度为两者之和的 Uint8Array 对象，把三个 Uint8Array 设置到不同位置。

        // 最后输出合并的 Uint8Array 对象的 arraybuffer。
        const arr1 = new Uint8Array(buffer1)

        arr.set(arr1, 0)

        const arr2 = new Uint8Array(buffer2)

        arr.set(arr2, arr1.byteLength)

        const arr3 = new Uint8Array(buffer3)

        arr.set(arr3, arr1.byteLength + arr2.byteLength)

        console.log('看看最后总的数据', arr.buffer)

        // 然后把 ArrayBuffer 转成 Blob 设置以对象形式设置为 img 的 url

        const blob = new Blob([arr.buffer])
        const url = URL.createObjectURL(blob)
        imgRange.src = url

        // const link = document.createElement('a')
        // link.href = url
        // link.download = 'image.png'
        // document.body.appendChild(link)
        // link.click()
        // link.addEventListener('click', () => {
        //   link.remove()
        // })
      })
    </script>
  </body>
</html>

`

const imgJsMerge = `
const express = require('express')
const app = express()

app.get('/aaa', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Disposition', 'attachment; filename="bmw.jpg"')
  // res.end('range-txt-test 测试range的范围哈哈嘿嘿嘻嘻呼呼啪啪')
  res.send('./bmw.jpg')
})

app.get('/', (req, res, next) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.download('./bmw.jpg', {
    acceptRanges: true,
  })
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})
`

const imgHtmlTotal = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <img id="img" />
    <script>
      /* 
       首先根据 chunk 大小来计算一共几个 chunk，通过 Math.ceil 向上取整。

      然后计算每个 chunk 的 range，构造下载任务的 promise。

      Promise.all 等待所有下载完成，之后合并 arraybuffer。

      这里 arraybuffer 合并也封装了一个 mergeArrayBuffer 的方法：

      */
      async function concurrencyDownload(path, size, chunkSize) {
        console.info('concurrencyDownload', path, size, chunkSize)
        let chunkNum = Math.ceil(size / chunkSize)

        const downloadTask = []
        for (let i = 1; i <= chunkNum; i++) {
          const rangeStart = chunkSize * (i - 1)
          const rangeEnd = chunkSize * i - 1

          downloadTask.push(
            axios.get(path, {
              headers: {
                 Range: bytes=rangeStart-rangeEnd, // 这里的rangeStart-rangeEnd 写法是模板字符串 但因格式限制 此处写成这样
              },
              responseType: 'arraybuffer',
            }),
          )
        }
        const arrayBuffers = await Promise.all(
          downloadTask.map((task) => {
            return task.then((res) => res.data)
          }),
        )
        return mergeArrayBuffer(arrayBuffers)
      }

      /* 
       就是计算总长度，创建一个大的 Uint8Array，
       然后把每个 arraybuffer 转成 Uint8Array 设置到对应的位置，
       之后再转为 arraybuffer 就好了。
     */
      function mergeArrayBuffer(arrays) {
        let totalLen = 0
        for (let arr of arrays) {
          totalLen += arr.byteLength
        }
        let res = new Uint8Array(totalLen)
        let offset = 0
        for (let arr of arrays) {
          let uint8Arr = new Uint8Array(arr)
          res.set(uint8Arr, offset)
          offset += arr.byteLength
        }
        return res.buffer
      }

      ;(async function () {
        // 当然，一般不会这么写死来用，我们可以封装一个通用的文件分片下载工具。

        //  但分片之前需要拿到文件的大小，所以要增加一个接口：
        const { data: len } = await axios.get('http://localhost:3000/length')
        const res = await concurrencyDownload(
          'http://localhost:3000',
          len,
          300000,
        )
        console.log('before new Blob', res)

        const blob = new Blob([res])
        const url = URL.createObjectURL(blob)
        img.src = url
      })()
    </script>
  </body>
</html>

`

const imgJsTotal = `
const express = require('express')
const fs = require('fs')
const app = express()

app.get('/length', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end('' + fs.statSync('./MelindaSssss.png').size)
})

app.options('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Range')
  res.end('')
})

app.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.download('MelindaSssss.png', {
    acceptRanges: true,
  })
})

app.listen(3000, () => {
  console.log('server is running at port 3000')
})

`
const title = (
  <div>
    <h2>Range</h2>
    <h3>------------------Web/HTTP/Headers/Range</h3>
  </div>
)
const Essay20230719 = (props: Essay20230719Props) => {
  useEffect(() => {}, [])
  return (
    <div>
      <Card
        title={title}
        bordered={false}
        style={{ background: 'transparent' }}
      >
        <div className="common-content-line-height common-content-text-indent">
          <div>
            最近半年真的是太忙了，每天都忙于工作业务迭代，已经很久没有静静地写篇文章了。
          </div>
          <div>
            幸好，现在可以稍稍喘口气，来写写最近遇到的好玩的点。事情的起因是下班后闲着无聊都会刷会儿B站，最近关注了一个非常可爱的博主叫做Yooupi,所以经经常看她的视频，然后就发现B站的视频怎么随便拉进度条，渲染都很快，有点东西哈，让我看看是怎么实现的，我的好奇心挠一下就上来了。
          </div>
          <div>
            B
            站视频播放是很快的，基本是点哪就播放到哪。而且如果你上次看到某个位置，下次会从那个位置继续播放。那么问题来了：如果一个很大的视频，下载下来需要很久，怎么做到点哪个位置快速播放那个位置的视频呢？
          </div>
          <div>
            打开network看了下，很多206，又搜了下206是啥，又看到很多content-range
          </div>
          <div className="common-flex-column-around">
            <div>
              随便拉了个进度条，看了下这个请求果然是206，请求标头里也有range范围
            </div>
            <img src={yooupiSrc} alt="Yooupi" width="100%" />
            再拉几个进度条，也是一样的请求
            <img src={contentSrc} alt="content search filter" width="100%" />
            <div>
              这里我连续点了很多次，视频画面拉了很长一段，但是没有新的请求发出，这个
              range 应该是提前确定好的，会根据进度条来计算下载哪个 range
              的视频。 播放的时候，会边播边下载后面的
              range，而调整进度的时候，也会从对应的 range 开始下载。 观察下
              range，新下载的片段和前面不连续了, 也就是说会根据进度来计算出
              range，再去请求。翻译成白话文就是
              一个视频的总长度和总片段是固定的，你拉动的进度条范围在哪个片段是会被计算出来的，如果拉动的两个范围在同一个range内，就不需要重新请求了。
            </div>
            <img
              src={lianxuSrc}
              alt="连续点击 但是并未有新的请求"
              width="100%"
            />
          </div>

          <div>
            来看下range是什么，The Range
            是一个请求首部，告知服务器返回文件的哪一部分。在一个 Range
            首部中，可以一次性请求多个部分，服务器会以 multipart
            文件的形式将其返回。如果服务器返回的是范围响应，需要使用 206 Partial
            Content 状态码。假如所请求的范围不合法，那么服务器会返回 416 Range
            Not Satisfiable 状态码，表示客户端错误。服务器允许忽略 Range
            首部，从而返回整个文件，状态码用 200 。
          </div>
          <div>
            <p>示例：</p>
            <OmsSyntaxHighlight
              textContent="Range: bytes=200-1000, 2000-6576, 19000-"
              language="javascript"
              darkMode={false}
            />
          </div>
          <div>
            <h2>到这个地步了，我们自己写个demo看下吧，先拿简单的图片试试水</h2>
            <p>html:</p>
            <OmsSyntaxHighlight
              textContent={imgHtmlOrigin}
              language="javascript"
              darkMode={false}
            />
            <p>js:</p>
            {/* imgJsOrigin */}
            <OmsSyntaxHighlight
              textContent={imgJsOrigin}
              language="javascript"
              darkMode={false}
            />
          </div>
          <div>
            <p>
              基本上可以看到完整的图片,当然这只是示例，其实上面的代码只是下载下来了而已
            </p>
            <img src={rangeSrc} alt="range" width="100%" />
          </div>
          <div>
            <h2>进阶一下，分分段</h2>
            <p>html:</p>
            <OmsSyntaxHighlight
              textContent={imgHtmlMerge}
              language="javascript"
              darkMode={false}
            />
            <p>js:</p>
            <OmsSyntaxHighlight
              textContent={imgJsMerge}
              language="javascript"
              darkMode={false}
            />
          </div>
          <div>
            <p>基本上可以看到分成了三次请求</p>
            <img src={threeOneSrc} alt="range" width="100%" />
            <img src={threeTwoSrc} alt="range" width="100%" />
            <img src={threeSrc} alt="range" width="100%" />
          </div>

          <div>
            <h2>最后，升级一下写法</h2>
            <p>html:</p>
            {/* imgHtmlTotal */}
            <OmsSyntaxHighlight
              textContent={imgHtmlTotal}
              language="javascript"
              darkMode={false}
            />
            <p>js:</p>
            <OmsSyntaxHighlight
              textContent={imgJsTotal}
              language="javascript"
              darkMode={false}
            />
          </div>

          <div>
            基本上这就是简单的range用法啦，可以实现简单的图片分片下载功能，即便是很大的图片，也可以就此优化渲染程序了。
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Essay20230719
