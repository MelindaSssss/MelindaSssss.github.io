import ParticleCanvas from './components/ParticleCanvas'
import ChatGPTInPython from './components/ChatGPTInPython'
import ParticleCanvasEssay from './components/ParticleCanvasEssay'
import Essay20221215 from './Essay/Essay20221215'
import Essay20230320 from './Essay/Essay20230320'
import Essay20230719 from './Essay/Essay20230719'
import BasixCNN from './components/Basix-CNN'

const ContentMap = {
  'particle-canvas': <ParticleCanvas />,
  'chatgpt-1': <ChatGPTInPython />,
  'particle-canvas-essay': <ParticleCanvasEssay />,
  'essay-20230719': <Essay20230719 />,
  'essay-20230320': <Essay20230320 />,
  'essay-20221215': <Essay20221215 />,
  'basic-nn': <BasixCNN />,
}

export default ContentMap
