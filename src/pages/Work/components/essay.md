### 基于 react+typescript 实现仿[明日方舟](https://ak.hypergryph.com/#information) 首页粒子效果

简述下实现方法，希望能有更多的人喜欢这个效果实现 😉

#### 主要使用三个类：Particle 粒子类、LogoImg 图片类、ParticleCanvas 画布类

- Particle： 记录粒子位置、颜色、大小、动画耗时 和 x/y 方向上的移动速度，提供绘制粒子方法<font color="#f06" > draw</font> 、更新方法<font color="#f06" > update</font>、替换方法<font color="#f06"> change</font>
- LogoImg： 记录图片解析后的粒子数组信息 particleData
- ParticleCanvas： 记录目标画布、画布中的粒子数组和鼠标在画布中的位置，提供绘制画布方法 drawCanvas、改变粒子数组方法 changeImg
