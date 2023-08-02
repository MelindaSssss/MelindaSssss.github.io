import OmsSyntaxHighlight from '../../Components/CodeHighLight'

const code_1 = `
/**
 *
 * @description dom渲染完成后取到原始图片数据
 */
const getImgData = () => {
  let resultImgs: any[] = []
  //引入图片数据
  let cache = {}
  //@ts-ignore
  const context = require.context('./assets/', true, /.png$/)
  
  context.keys().forEach((key: string | number) => {
    //@ts-ignore
    const keyArr = key.split('/')
    const result = keyArr[1].split('.')[0]
    //@ts-ignore
    cache[result] = require('./assets/' + keyArr[1])
    resultImgs.push(new LogoImg(require('./assets/' + keyArr[1]), result))
  })
  setImgCache(cache)
  setLogoImgs(resultImgs)
}`

const code_2 = ` <div>
{logoImgs.map((item, index) => {
  const imgSrc = imgCache[item.name]
  return (
    <div>
      <img
        src={imgSrc}
        alt={item.name}
        id={item.name}
        crossOrigin="anonymous"
      />
    </div>
  )
})}
</div>`

const code_3 = `const element = document.getElementById('some-element-you-want-to-animate');
let start, previousTimeStamp;
let done = false

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // 这里使用 Math.min() 确保元素刚好停在 200px 的位置。
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = 'translateX(' + count + 'px)';
    if (count === 200) done = true;
  }

  if (elapsed < 2000) { // 在两秒后停止动画
    previousTimeStamp = timestamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

window.requestAnimationFrame(step);
`

const Essay20221215 = () => {
  return (
    <div>
      <h1>一、批量引入本地图片数据渲染</h1>
      <div>
        <OmsSyntaxHighlight
          textContent={code_1}
          language="typescript"
          darkMode={false}
        />
        <p>
          主要技术点在于 <i>require.context</i>
        </p>
        {/* */}
        <OmsSyntaxHighlight
          textContent="require.context(directory, useSubdirectories, regExp) "
          language="typescript"
          darkMode={false}
        />
        <div>
          <ul>
            <li> directory: 要查找的文件路径</li>
            <li> useSubdirectories: 是否查找子目录</li>
            <li> regExp: 要匹配文件的正则</li>
          </ul>
        </div>
        <p>
          代码很简单，require.context执行后，返回一个方法webpackContext，这个方法又返回一个__webpack_require__，这个__webpack_require__就相当于require或者import。同时webpackContext还有二个静态方法keys与resolve，一个id属性。
        </p>
        <div>
          <ol>
            <li>keys: 返回匹配成功模块的名字组成的数组</li>
            <li>
              resolve:
              接受一个参数request，request为test文件夹下面匹配文件的相对路径，返回这个匹配文件相对于整个工程的相对路径
            </li>
            <li>
              id:
              执行环境的id，返回的是一个字符串，主要用在module.hot.accept，应该是热加载
            </li>
          </ol>
        </div>
        <p>页面展示示例：</p>
        <OmsSyntaxHighlight
          textContent={code_2}
          language="typescript"
          darkMode={false}
        />
      </div>
      <h1>二、浏览器请求动画帧</h1>
      {/* window.requestAnimationFrame(callback); */}
      <OmsSyntaxHighlight
        textContent="window.requestAnimationFrame(callback)"
        language="typescript"
        darkMode={false}
      />
      <p>
        window.requestAnimationFrame()
        告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行.
      </p>
      <h2 style={{ color: '#2f8ef4' }}>参数</h2>
      <p>
        下一次重绘之前更新动画帧所调用的函数
        (即上面所说的回调函数)。该回调函数会被传入
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp"
          target="_blank"
          rel="noreferrer"
        >
          DOMHighResTimeStamp
        </a>
        参数，该参数与
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now"
          target="_blank"
          rel="noreferrer"
        >
          performance.now()
        </a>
        的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻。
      </p>
      <h2 style={{ color: '#2f8ef4' }}>返回值</h2>
      <p>
        一个 long 整数，请求
        ID，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给
        window.cancelAnimationFrame() 以取消回调函数。
      </p>
      <OmsSyntaxHighlight
        textContent={code_3}
        language="typescript"
        darkMode={false}
      />
      <p>简单理解其实就相当于一个定时器。</p>
    </div>
  )
}

export default Essay20221215
