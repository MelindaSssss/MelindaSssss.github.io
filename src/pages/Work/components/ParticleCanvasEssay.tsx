// import OmsViewMarkdown from '../../Components/MarkDown'
// import { useEffect, useState } from 'react'
import OmsSyntaxHighlight from '../../Components/CodeHighLight'
import AnchorPage from '../../Components/Anchor'
import unit8arraySrc from '../images/unit8array.jpg'
import xiangxianSrc from '../images/xiangxian.jpg'
import {
  first_code,
  second_code,
  third_code,
  fourth_code,
  fifth_code,
  six_code,
  seventh_code,
  eight_code,
} from './ParticleCode'

const ParticleCanvasEssay = () => {
  // const [mdContent, setMdContent] = useState('')

  const speSpan = (text: string) => {
    return <span className="need-bgColor-pink">{text}</span>
  }
  // useEffect(() => {
  //   //url是markdown文件的路径，我在项目中是放到了media文件夹下，示例：url为'/media/xx.md'
  //   fetch('/media/essay.md')
  //     .then((res) => res.text())
  //     .then((text) => {
  //       console.info('现在md文件的内容', text)
  //       setMdContent(text)
  //     })
  // }, [])

  return (
    <div
      style={{
        color: '#555666',
        width: '100%',
        height: '100%',
        display: 'flex',
        letterSpacing: '2px',
      }}
    >
      <div className="particle-essay-page">
        {/* <OmsViewMarkdown textContent={mdContent} darkMode /> */}
        <h1 id="jiyureactshixian">
          基于 react+typescript 实现仿
          <a
            href="https://ak.hypergryph.com/#information"
            target="_blank"
            rel="noreferrer"
          >
            明日方舟
          </a>
          首页粒子效果
        </h1>
        <h2 id="zhuyaoshixiansilushuoming">主要实现思路说明</h2>
        <div className="zhuyaoshixiansilushuoming">
          <p>
            主要使用三个类：Particle 粒子类、LogoImg 图片类、ParticleCanvas
            画布类
          </p>
          <ol>
            <li>
              <span className="need-font-bold">Particle：</span>
              记录粒子位置、颜色、大小、动画耗时 和 x/y
              方向上的移动速度，提供绘制粒子方法
              {speSpan('draw')}
              、更新方法{speSpan('update')}、替换方法{speSpan('change')}
            </li>
            <li>
              <span className="need-font-bold">LogoImg：</span>
              记录图片解析后的粒子数组信息 {speSpan('particleData')}
            </li>
            <li>
              <span className="need-font-bold">ParticleCanvas：</span>
              记录目标画布、画布中的粒子数组和鼠标在画布中的位置，提供绘制画布方法{' '}
              {speSpan('drawCanvas')} 、改变粒子数组方法 {speSpan('changeImg')}
            </li>
          </ol>
        </div>
        <h3 id="liucheng">流程：</h3>
        <div className="liucheng">
          <ul>
            <li>
              实例化一个 {speSpan('ParticleCanvas')}对象{speSpan('prtCanvas')}
            </li>
            <li>
              点击某个图片{speSpan('clickLogo')}
              时调用{speSpan('prtCanvas.changeImg(particleData)')}
              方法传入其粒子数组信息。
              <ol>
                <li>首次 changeImg，直接赋值</li>
                <li>非首次，对比粒子数组 移除/生成粒子，并随机映射</li>
              </ol>
            </li>
          </ul>
          <p>这里就已经实现粒子动画了，粒子的生成和移动就不细说了看代码！</p>
        </div>

        <h3 id="xiyinhepaichi">然后就是吸引/排斥</h3>
        <div className="xiyinhepaichi">
          <ul>
            <li>
              鼠标在实例对象{speSpan('prtCanvas')}
              对应的画布移动时触发{speSpan('mousemove')}
              回调，根据回调参数重新计算鼠标位置{speSpan('mouseX/mouseY')}
            </li>
            <li>
              <ol>
                <li>
                  {speSpan('prtCanvas')}
                  的绘制画布方法{speSpan('drawCanvas')}一直随着事件循环在执行，
                  {speSpan('drawCanvas')}
                  中遍历画布粒子数组并调用每一项的update方法并传入重新计算后的
                  {speSpan('mouseX/mouseY')}
                </li>
                <li>
                  {speSpan('particle.update')}
                  中又根据距离和设置好的引力/斥力重新计算{speSpan('vx/vy...')}
                </li>
              </ol>
            </li>
          </ul>

          <div>
            <OmsSyntaxHighlight
              textContent={first_code}
              language="javascript"
              darkMode={false}
            />
            <p>
              Particle 的 draw 方法符合面向对象的写法是接收一个 content
              上下文参数，图方便就直接读取了
            </p>
          </div>
        </div>

        {/* 大标题 */}
        <h2 id="fenxi">分析</h2>
        <h3 id="zhuyaobuzhou">实现主要步骤为</h3>
        <div>
          <ol>
            <li>解析图片转换为粒子</li>
            <li> 绘制时添加动画</li>
            <li>根据鼠标位置对粒子进行排斥</li>
          </ol>
          <p>解析图片通过Canvas的{speSpan('getImageData')}获取像素数据实现。</p>
          <p>
            <span className="need-font-bold">较难点</span>在于 绘制动画 和
            粒子排斥，涉及到 数学应用 和 动画/交互逻辑。
          </p>
        </div>
        <h3 id="xiangsucaozuo">此处涉及到像素操作</h3>
        <div>
          <p>
            canvas提供了 绘制图片 和 获取图片像素
            的方法，但在绘制图片或者获取图片信息用于操作之前，首先要获取目标图片源。
          </p>
          <p>
            我们通过在JS里创建{speSpan('Image')}对象 在{speSpan('onload')}
            回调时读取数据源。
          </p>
          <p>
            一旦获得了源图对象，我们就可以使用 {speSpan('drawImage')}{' '}
            方法将它渲染到 {speSpan('canvas')} 里。
          </p>
          <p>
            通过canvas的{speSpan('getImageData')}
            方法可以获得{speSpan('ImageData')}
            对象，而{speSpan('ImageData.data')}
            属性中存储着canvas对象真实的像素数据。
          </p>
          <div>
            <OmsSyntaxHighlight
              textContent={second_code}
              language="javascript"
              darkMode={false}
            />
          </div>
          <p>
            {speSpan('ImageData')}的{speSpan('data')}属性为
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray"
              target="_blank"
              rel="noreferrer"
            >
              Uint8ClampedArray
            </a>
            类型的一维数组，包含了指定区域里每个像素点的RGBA格式的整型数据，范围在0至255之间（包括255）。
          </p>
          <p>
            每一个像素点有4个值占据data数组4个索引位置，对应像素rgba(R, G, B,
            A)的四个值。如图：
          </p>
          <div>
            <img src={unit8arraySrc} alt="" />
          </div>
        </div>

        <h3 id="canvasdonghua">canvas动画</h3>
        <div>
          <p>canvas的动画主要是通过 在一些定时方法中去执行重绘操作实现的。</p>
          <p>
            canvas实现动画的过程通常是 清理-{'>'}绘制-{'>'}清理-{'>'}绘制 ...
            不断重复的过程。
          </p>
          <p>
            一般通过 setTimeOut、setInterval、requestAnimationFrame
            等定时执行的方法去调用重绘，实现动画的操控。
          </p>
        </div>

        <h2 id="shixianhhh">实现</h2>
        <div className="shixianhhh">
          <p>生成粒子/绘制画布</p>
          <p>
            像素会经过一系列操作转换为粒子，粒子绘制到画布后初始位置随机，并逐渐向目标方向移动。
            画布不断调用粒子中的更新方法和绘制方法，重新绘制画布。
          </p>
          <h4 id="lizilei">粒子类</h4>
          <div>
            <p>
              创建粒子类 {speSpan('Particle')}，其构造器接收 像素对象
              为参数转换为 粒子实例对象。
            </p>
            <OmsSyntaxHighlight
              textContent={fourth_code}
              language="javascript"
              darkMode={false}
            />
          </div>
          <h4 id="shaixuanxiangsu">筛选像素</h4>
          <div>
            <p>
              因为并不是每一个像素点都需要绘制，所以在获得了上文
              {speSpan('ImageData.data')}
              的像素数据后，先对数据进行一遍筛选，同时将符合条件的像素点生成为粒子。
            </p>
            <OmsSyntaxHighlight
              textContent={fifth_code}
              language="javascript"
              darkMode={false}
            />
          </div>

          <h4 id="chuangjianlizi">创建粒子</h4>
          <div>
            <p>
              首先我们观察到动画中的粒子是从随机位置（或者有一套算法确定位置，但肯定不在原位置）出现的，并逐渐位移向目标位置，同时会逐渐清晰（不透明度++）。
            </p>
            <p>所以我们需要调整粒子类：</p>
            <div>
              <ol>
                <li>{speSpan('x、y')}属性表示粒子当前位置</li>
                <li>{speSpan('mx、my')}属性表示粒子需要移动的距离</li>
                <li>{speSpan('vx、vy')}属性表示粒子在方向上的移动速度</li>
                <li>{speSpan('time')}属性表示粒子过渡动画所耗时间</li>
                <li>
                  {speSpan('update')}
                  方法在粒子更新时调用，在其中动态计算
                  {speSpan('mx、my、vx、vy')}
                </li>
                <li>{speSpan('draw')}方法在画布中绘制粒子</li>
              </ol>
            </div>
            <OmsSyntaxHighlight
              textContent={six_code}
              language="javascript"
              darkMode={false}
            />
          </div>

          <h4 id="huizhihuabu">绘制画布</h4>
          <div>
            <p>
              在明确怎么创建粒子后，需要将粒子绘制到画布上，画布不断更新其中的粒子实现动画效果。
            </p>
            <p>
              于是我们创建图片类{speSpan('LogoImg')}、画布类
              {speSpan('ParticleCanvas')}便于 存放数据 和 操作画布。
            </p>
            <OmsSyntaxHighlight
              textContent={seventh_code}
              language="javascript"
              darkMode={false}
            />
          </div>

          <h3 id="qiehuandonghua">切换动画</h3>
          <div>
            <p>
              在切换图片（即粒子数据源）时，复用页面上已存在的粒子，将其随机映射到新的位置。
              由粒子数量对比分为 相同、大于、小于
              3种情况，根据情况画布中的粒子数组进行移除或添加。
            </p>
            <p>
              可以发现在切换图片的时候并不是清空画布并重新生成所有粒子，
              {speSpan('已存在的粒子会按比例复用并移动到新的目标位置')}
              ，即旧粒子随机对应新粒子（官方应该有一套算法确定映射，但肯定不会顺序对应）。
            </p>
            <p>
              所以我们在画布类{speSpan('ParticleCanvas.changeImg')}
              切换数据源时对比新旧粒子数量，遍历新粒子数组，每次循环判断复用
              {speSpan('arr[idx].change(...)')};,还是生成新粒子。
            </p>
            <p>
              之后对比{speSpan('newLen')} {'<'}
              {speSpan('oldLen')}
              ，变少了就通过{speSpan('splice')}
              删除，变多了则在上述遍历中已通过{speSpan('new Particle(...)')}
              添加。
            </p>

            <p>
              最后随机打乱粒子最终对应的位置，每次循环随机的取一个粒子
              {speSpan('arr[randomIdx]')}和 倒序的取一个粒子
              {speSpan('arr[tmp_len]')}，并且上限逐渐递减{speSpan('tmp_len--')}
              （避免多个粒子映射到同一个粒子上）。
            </p>
            <div>
              <OmsSyntaxHighlight
                textContent={third_code}
                language="javascript"
                darkMode={false}
              />
            </div>
          </div>

          <h3 id="lizipaichi">粒子排斥</h3>
          <div className="lizipaichi">
            <p>
              每个粒子会根据与鼠标距离的比例受到x、y方向的力，在转换为对应方向上的速度后重新计算粒子的移动轨迹（这涉及到一些三角函数），即可实现粒子排斥效果。
            </p>
            <h4 id="zhenglisilu">整理思路</h4>
            <div>
              <p>
                明显观察到画布会
                {speSpan('以鼠标为中心对粒子进行一定范围的排斥')}
                ，越接近中心排斥的速度越快。
              </p>
              <p>
                我们可以向particle对象的{speSpan('update')}
                方法中传入鼠标在canvas画布中的位置{speSpan('mouseX')},
                {speSpan(' mouseY')}。
              </p>
              <p>
                并结合{speSpan('粒子当前位置(x, y)')} 和{' '}
                {speSpan('排斥力度Inten')}
                重新计算移动速度{speSpan('vx、vy')}。由此使粒子不断远离中心。
              </p>
            </div>
            <h4 id="shejifangan">设计方案</h4>
            <div>
              <p>
                调整粒子类{speSpan('Particle')}的{speSpan('update')}
                方法，重新计算{speSpan('vx、vy')}：
              </p>
              <div>
                <ol>
                  <li>
                    设置固定值 {speSpan('Radius(斥力影响范围)')}、
                    {speSpan('Inten(斥力标准值)')}。
                  </li>
                  <li>
                    设置鼠标位置 {speSpan('(mouseX, mouseY) ')}为斥力中心。
                  </li>
                  <li>计算每个粒子与中心的 {speSpan('直线距离distance')}。</li>
                  <li>
                    通过 {speSpan('Radius / distance')} 获得 中心影响范围 与
                    直线距离 的{speSpan('比例disPercent')}。
                    {speSpan(' 比例越大越接近中心，受到的斥力也越大')}。
                  </li>
                  <li>
                    将 粒子与中心形成的
                    {speSpan('夹角angle、比例disPercent')}和
                    {speSpan('斥力值Inten')}，转换为粒子x、y轴的速度
                    {speSpan('repX、repY')}。
                  </li>
                  <li>
                    {speSpan('vx += repX ')}& {speSpan('vy += repY')}
                    ，粒子逐渐远离中心。
                  </li>
                </ol>
              </div>
            </div>

            <h4 id="diergeshixian">实现</h4>
            <div>
              <p>注意：canvas坐标系采用第四象限，即x轴正向为右，y轴正向为下</p>
              <div>
                <img src={xiangxianSrc} alt="" />
              </div>
              <p>
                如图，假设{speSpan('某点Z')}
                为斥力中心，同时取三个粒子，位置分别为：{speSpan('A.边界外')}
                {speSpan('B.边界内')} {speSpan('C.边界上')}。
              </p>
              <p>
                用{speSpan('dx、dy')}代表粒子与中心的{speSpan('x、y轴距离')}
                ，并用正负表示方向。
              </p>
              <p>
                例如A粒子 {speSpan('dx = 2 - 4 = -2')}、
                {speSpan('dy = 2 - 4 = -2')}，通过三角函数
                <a
                  href="https://zhuanlan.zhihu.com/p/306534228"
                  target="_blank"
                  rel="noreferrer"
                >
                  Math.atan2
                </a>
                计算出 夹角{speSpan('angle = Math.atan2(-2, -2)')}。
              </p>
              <p>
                再通过{speSpan('angle')}和 正弦/余弦函数 计算出 sin =
                Math.sin(angle)、cos = Math.cos(angle)。
              </p>
              <p>
                将{speSpan('disPercent * Inten')}
                计算出的力度转换为x、y方向上的速度 repX = cos * disPercent *
                -Inten ... 因为是排斥，所以我们使用{speSpan('-Inten')}
                去掉负号则是吸引效果了。
              </p>
              <p>
                重新计算{speSpan('vx += repX')}、 {speSpan('vy += repY')}。
              </p>
              <OmsSyntaxHighlight
                textContent={eight_code}
                language="javascript"
                darkMode={false}
              />
              <p>同理可计算B、C粒子的速度。</p>
            </div>
          </div>
        </div>
        <h2 id="youhua">优化</h2>
        <div className="youhua">
          <h3 id="jianshaohuizhicaozuo">减少绘制操作</h3>
          <div>
            <p>
              canvas绘制圆（arc）相比绘制矩形（rect）会消耗更多的性能，arc
              每次绘制都要开启、闭合路径，而 rect 则直接绘制。
            </p>
            <p>
              当粒子数量过多时会有明显的性能差异，且在较小比例的情况下圆和矩形视觉上是类似的，所以可以用fillRect(...)
              替换 arc(...)。
            </p>
          </div>
          <h3 id="mianxiangduixiang">面向对象</h3>
          <div>
            <p>
              将画布、粒子、配置、图片抽象为类，通过对象的属性和方法去渲染、切换。这里很多参数都固定了就没再去抽象配置类，感兴趣的同学可以试试。
            </p>
          </div>
          <h3 id="shijianxunhuanhhhhhhhhh">事件循环</h3>
          <div>
            <p>
              因为浏览器执行机制是 宏任务{'->'}微任务{'->'}渲染{'->'}宏任务...
              这样一个循环，因此页面上的粒子排斥效果也不是实时的，有可能鼠标到了某个位置但是刚结束上一次循环的计算和渲染。
            </p>
            <p>
              所以在页面上监听{speSpan('mousemove')}事件 回调使用
              {speSpan('requestAnimationFrame')}
              ，回调中根据鼠标位置在页面上添加一个白圈，表明当前循环渲染的位置，优化视觉效果，详情查看index.html中的代码。
            </p>
          </div>
          <h3 id="lizijianruaaaaaaa">粒子渐入</h3>
          <div>
            <p>
              因为方便计算和还原粒子本身颜色
              所以没有实现不透明度逐渐增加的操作（一开始是写了的
              但考虑到还原粒子），导致动画少了渐入的视觉，追求完美复原的同学可以研究下。
            </p>
            <p>
              感觉主要问题在粒子筛选的条件上，使用{speSpan('#fff')}
              背景可以观察到画布中有黑色的粒子。
            </p>
          </div>
        </div>

        <div id="total">
          真的很喜欢明日方舟的美术风格、游戏剧情，从各方面来说都是一款佳作😆话说这算安利了吧！
          总结：canvasAPI数量精简，参数清晰，学习并不复杂，更多的是如何实践应用。如果感兴趣的话建议自己实现一些功能，相信你也能发现canvas的亮点。canvas有很多很有意思的实现，有兴趣的可以去探索。
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* 右边的定位bar */}
      <div>
        <AnchorPage nodeName="particle-essay-page" />
      </div>
    </div>
  )
}

export default ParticleCanvasEssay
