import OmsSyntaxHighlight from '../../Components/CodeHighLight'
import { Image } from 'antd'
import { useEffect, useState } from 'react'

const step_one = `import matplotlib.pyplot as plt
import cv2
import numpy as np

""" 加载原始图片文件 RGB格式 非灰度图 ,放灰度图也可以 """
img1 = cv2.imread('../images/yibo.jpg')
print(img1)


plt.figure(figsize=(20, 20)) 
plt.subplot(2,2,1)
plt.imshow(img1, cmap='gray')
plt.axis ('off')

"""  #转成2D图像 """
img2 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)


plt.figure(figsize=(20, 20)) 
plt.subplot(2,2,1)
plt.imshow(img2, cmap='gray')
plt.axis ('off')

"""  1) 定义 3种 卷积核-Kernel """

"""  检测竖边 vertical edges """
kernel1 = np.array([[-1,0,1],[-1,0,1],[-1,0,1]])

"""  检测横边  horizontal edges """
kernel2 = np.array([[-1,-1,-1],[0,0,0],[1,1,1,]])

""" 平均 检测圆  round-shape """
kernel3 = np.array([[0.1,0.1,0.1],[0.1,0.8,0.1],[0.1,0.1,0.1]])


""" 2) 进行 卷积操作 Convolution """

img3a = cv2.filter2D(src=img2,ddepth= -1,kernel=kernel1)
img3b = cv2.filter2D(src=img2,ddepth= -1,kernel=kernel2)
img3c = cv2.filter2D(src=img2,ddepth= -1,kernel=kernel3)


""" 第一张图 """
plt.figure(figsize=(25, 25)) 
plt.subplot(3,3,1)
plt.imshow(img3a, cmap='gray')
# plt.axis ('off')

""" 第二张图 """
plt.subplot(3,3,2)
plt.imshow(img3b, cmap='gray')
# plt.axis ('off')

""" 第三张图 """
plt.subplot(3,3,3)
plt.imshow(img3c, cmap='gray')
# plt.axis ('off')

`
const BasixCNN = () => {
  const [imgCache, setImgCache] = useState<any>(null)
  /**
   *
   * @description dom渲染完成后取到原始图片数据
   */
  const getImgData = () => {
    //引入图片数据
    let cache = {}
    let resultImgs: any[] = []
    //@ts-ignore
    const context = require.context('../images/yibo/', true, /\.(png|jpg)$/)
    console.info('context.keys()', context.keys())
    context.keys().forEach((key: string | number) => {
      //@ts-ignore
      const keyArr = key.split('/')
      const result = keyArr[1].split('.')[0]
      //@ts-ignore
      cache[result] = require('../images/yibo/' + keyArr[1])

      resultImgs.push({
        name: result,
        //@ts-ignore
        src: cache[result],
      })
    })
    setImgCache(resultImgs)
  }
  useEffect(() => {
    // 将logo数据实例化为logoImg对象
    getImgData()
  }, [])
  return (
    <div>
      <OmsSyntaxHighlight
        textContent={step_one}
        language="python"
        darkMode={false}
      />
      <br />
      <div>图示：</div>
      <br />
      <div style={{ display: 'flex' }}>
        {imgCache
          ? imgCache.map((item: { src: string | undefined; name: string }) => {
              return (
                <Image.PreviewGroup preview>
                  {/* 切换多张预览不生效 后面再优化吧 */}
                  <div style={{ marginRight: '16px' }}>
                    <Image width={200} src={item.src} />
                  </div>
                </Image.PreviewGroup>
              )
            })
          : null}
      </div>
      <br />
    </div>
  )
}

export default BasixCNN
