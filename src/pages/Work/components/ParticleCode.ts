const first_code = `this.ParticleArr.forEach((particle) => {
  particle.update(this.mouseX, this.mouseY);
  particle.draw();
});
`

const second_code = `  ......
let img = new Image();
img.src = src;
// canvas 获取粒子位置数据
img.onload = () => {
  // 获取图片像素数据
  const tmp_canvas = document.createElement("canvas"); // 创建一个空的canvas
  const tmp_ctx = tmp_canvas.getContext("2d");

  tmp_ctx?.drawImage(img, 0, 0, imgW, imgH); // 将图片绘制到canvas中
  const imgData = tmp_ctx?.getImageData(0, 0, imgW, imgH).data; // 获取像素点数据
  tmp_ctx?.clearRect(0, 0, width, height);
};
......`

const fourth_code = `class Particle {
  totalX: number; // 粒子x轴的目标位置
  totalY: number; // 粒子y轴的目标位置
  r: number; // 粒子的半径
  color: number[]; // 粒子的颜色
  opacity: number; // 粒子的透明度
  constructor(totalX: number, totalY: number, time: number, color: number[]) {
    // 目标位置dx、dy，总耗时time
    this.totalX = totalX;
    this.totalY = totalY;
    // 设置粒子的颜色和半径
    this.r = 1.2;
    this.color = [...color];
    this.opacity = 0;
  }
  // 在画布中绘制粒子
  draw() {}
  // 更新粒子
  update() {}
  // 切换粒子
  change() {}
}`

const fifth_code = `......
img.onload = () => {
  // 获取图片像素数据
  ......
  const imgData = tmp_ctx?.getImageData(0, 0, imgW, imgH).data; // 获取像素点数据
  tmp_ctx?.clearRect(0, 0, width, height);

  // 筛选像素点
  for (let y = 0; y < imgH; y += 5) {
    for (let x = 0; x < imgW; x += 5) {
      // 像素点的索引
      const index = (x + y * imgW) * 4;
      // 在数组中对应的值
      const r = imgData![index];
      const g = imgData![index + 1];
      const b = imgData![index + 2];
      const a = imgData![index + 3];
      const sum = r + g + b + a;
      // 筛选条件
      if (sum >= 100) {
        const particle = new Particle(x, y, animateTime, [r, g, b, a]);
        this.particleData.push(particle);
      }
    }
  }
};
......
`

const six_code = `class Particle {
  x: number; // 粒子x轴的初始位置
  y: number; // 粒子y轴的初始位置
  totalX: number; // 粒子x轴的目标位置
  totalY: number; // 粒子y轴的目标位置
  mx?: number; // 粒子x轴需要移动的距离
  my?: number; // 粒子y轴需要移动的距离
  vx?: number; // 粒子x轴移动速度
  vy?: number; // 粒子y轴移动速度
  time: number; // 粒子移动耗时
  r: number; // 粒子的半径
  color: number[]; // 粒子的颜色
  opacity: number; // 粒子的透明度
  constructor(totalX: number, totalY: number, time: number, color: number[]) {
    // 设置粒子的初始位置x、y，目标位置dx、dy，总耗时time
    this.x = (Math.random() * width) >> 0;
    this.y = (Math.random() * height) >> 0;
    this.totalX = totalX;
    this.totalY = totalY;
    this.time = time;
    // 设置粒子的颜色和半径
    this.r = 1.2;
    this.color = [...color];
    this.opacity = 0;
  }
  /** 更新粒子
   * @param {number} mouseX 鼠标X位置
   * @param {number} mouseY 鼠标Y位置
   */
  update(mouseX?: number, mouseY?: number) {
    // 设置粒子需要移动的距离
    this.mx = this.totalX - this.x;
    this.my = this.totalY - this.y;
    // 设置粒子移动速度
    this.vx = this.mx / this.time;
    this.vy = this.my / this.time;
    this.x += this.vx;
    this.y += this.vy;
    // 随着移动不断增加透明度
    if (this.opacity < 1) this.opacity += opacityStep;
  }
  // 在画布中绘制粒子
  draw() {
    context.beginPath()
    context.value!.fillStyle = "rgba(${'this.color.toString()'})";
    context.value!.arc(this.x, this.y, this.r * 2, 0, 2 * Math.PI);
    context.value!.fill();
    context.closePath()
  }
}
`

const seventh_code = `/** Logo图片类 */
class LogoImg {
  src: string;
  name: string;
  particleData: Particle[]; // 用于保存筛选后的粒子
  constructor(src: string, name: string) {
    this.src = src;
    this.name = name;
    this.particleData = [];
    let img = new Image();
    img.crossOrigin = '';
    img.src = src;
    // canvas 获取粒子位置数据
    img.onload = () => {
      // 获取图片像素数据
      const tmp_canvas = document.createElement("canvas"); // 创建一个空的canvas
      const tmp_ctx = tmp_canvas.getContext("2d");
      const imgW = width;
      const imgH = ~~(width * (img.height / img.width));
      tmp_canvas.width = imgW;
      tmp_canvas.height = imgH;
      tmp_ctx?.drawImage(img, 0, 0, imgW, imgH); // 将图片绘制到canvas中
      const imgData = tmp_ctx?.getImageData(0, 0, imgW, imgH).data; // 获取像素点数据
      tmp_ctx?.clearRect(0, 0, width, height);

      // 同上筛选像素点
    };
  }
}

// 画布类
class ParticleCanvas {
  canvasEle: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  ParticleArr: Particle[];
  constructor(target: HTMLCanvasElement) {
    this.canvasEle = target;
    this.ctx = target.getContext("2d") as CanvasRenderingContext2D;
    this.width = target.width;
    this.height = target.height;
    this.ParticleArr = [];
  }
  // 改变画布数据源
  changeImg(img: LogoImg) {
      this.ParticleArr = img.particleData.map(
        (item) =>
          new Particle(item.totalX, item.totalY, animateTime, item.color)
      );
  }
  // 画布绘制方法
  drawCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ParticleArr.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    window.requestAnimationFrame(() => this.drawCanvas());
  }
}`

const third_code = `
// 改变图片 如果已存在图片则进行额外切换操作
changeImg(img: LogoImg) {
  if (this.ParticleArr.length) {
    // 如果当前粒子数组大于新的粒子数组 删除多余的粒子
    let newPrtArr = img.particleData;
    let newLen = newPrtArr.length;
    let arr = this.ParticleArr;
    let oldLen = arr.length;

    // 调用change修改已存在粒子
    for (let idx = 0; idx < newLen; idx++) {
      const { totalX, totalY, color } = newPrtArr[idx];
      if (arr[idx]) {
        // 找到已存在的粒子 调用change 接收新粒子的属性
        arr[idx].change(totalX, totalY, color);
      } else {
        arr[idx] = new Particle(totalX, totalY, animateTime, color);
      }
    }

    if (newLen < oldLen) this.ParticleArr = arr.splice(0, newLen);
    let tmp_len = arr.length;
    // 随机打乱粒子最终对应的位置 使切换效果更自然
    while (tmp_len) {
      // 随机的一个粒子 与 倒序的一个粒子
      let randomIdx = ~~(Math.random() * tmp_len--);
      let randomPrt = arr[randomIdx];
      let { totalX: tx, totalY: ty, color } = randomPrt;

      // 交换位置
      randomPrt.totalX = arr[tmp_len].totalX;
      randomPrt.totalY = arr[tmp_len].totalY;
      randomPrt.color = arr[tmp_len].color;
      arr[tmp_len].totalX = tx;
      arr[tmp_len].totalY = ty;
      arr[tmp_len].color = color;
    }
  } else {
    this.ParticleArr = img.particleData.map(
      (item) =>
        new Particle(item.totalX, item.totalY, animateTime, item.color)
    );
  }
}
`

const eight_code = `// Particle.class -> update
update(mouseX?: number, mouseY?: number) {
    ....
    if (mouseX && mouseY) {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.sqrt(dx ** 2 + dy ** 2);
        // 粒子相对鼠标距离的比例 判断受到的力度比例
        let disPercent = Radius / distance;
        // 设置阈值 避免粒子受到的斥力过大
        disPercent = disPercent > 7 ? 7 : disPercent;
        // 获得夹角值 正弦值 余弦值
        let angle = Math.atan2(dy, dx);
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        // 将力度转换为速度 并重新计算vx vy
        let repX = cos * disPercent * -Inten;
        let repY = sin * disPercent * -Inten;
        this.vx += repX;
        this.vy += repY;
    }
    ....
  }
`

export {
  first_code,
  second_code,
  third_code,
  fourth_code,
  fifth_code,
  six_code,
  seventh_code,
  eight_code,
}
