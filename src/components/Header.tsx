import '../pages/Introduction/style.css'

type HeaderType = {
  setPageType: React.Dispatch<React.SetStateAction<any>>
  title?: string
  pageFrom?: string
}
const Header = (props: HeaderType) => {
  const { setPageType, title, pageFrom } = props
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2
          style={
            pageFrom === 'life' ? { color: 'white' } : { color: 'inherit' }
          }
        >
          {title ? title : ':::::::::::::::'}
        </h2>

        {/* 特殊小鸟按钮 */}
        <div className="button button--bird" onClick={() => setPageType(null)}>
          <div className="button__wrapper">
            <span className="button__text">BACK</span>
          </div>
          {/* 有意思的三个小鸟 */}

          <div className="birdBox">
            <div className="bird wakeup">
              <div className="bird__face"></div>
            </div>
            <div className="bird">
              <div className="bird__face"></div>
            </div>
            <div className="bird wakeup">
              <div className="bird__face"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
