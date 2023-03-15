import OmsSyntaxHighlight from '../../Components/CodeHighLight'
import chatGPTSrc from '../images/chatGPT.png'
const step_one = 'pip  install openai'
const step_two = `
import openai

# 填你的秘钥
openai.api_key = "your_openai_api_key"

# 提问代码


def chat_gpt(prompt):
    # 你的问题
    prompt = prompt

    # 调用 ChatGPT 接口
    model_engine = "text-davinci-003"
    completion = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    response = completion.choices[0].text
    print(response)


chat_gpt('如何使用Pytorch创建一个简单模型?')`
const ChatGPTInPython = () => {
  return (
    <div>
      <p>默认大家都会python</p>
      <p>第一步</p>
      <OmsSyntaxHighlight
        textContent={step_one}
        language="python"
        darkMode={false}
      />
      <p>第二步</p>
      <OmsSyntaxHighlight
        textContent={step_two}
        language="python"
        darkMode={false}
      />
      <p>第三步</p>
      <div>
        <img
          // width="820"
          // height="300"
          alt="chatgpt结果"
          src={chatGPTSrc}
        />
      </div>
      <p>
        上面是班门弄斧的演示，具体详细的使用可以去看Chatgpt官网，
        <a
          href="https://platform.openai.com/docs/libraries/python-bindings"
          target="_blank"
          rel="noreferrer"
        >
          文档
        </a>
        非常之详细，特别是python这块。
      </p>
      <br />
    </div>
  )
}

export default ChatGPTInPython
