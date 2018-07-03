import { Indicator } from 'mint-ui'

export function defaultPreHandler (data) {
  if (data.isOk) {
    if (data.content !== null || data.content !== undefined) {
      if (data.content) {
        return data.content
      } else {
        if (data.message) {
          alert(data.message)
        } else {
          return data.content
        }
      }
    } else {
      alert(data.message)
    }
  } else {
    alert(data.message)
  }
}

/**
 * 发送API请求获取数据，并对数据进行处理
 * @param sendRequest: 发送请求的函数
 * @param postHandler: 数据后处理函数
 * @param preHandler: 数据预处理函数。preHandler会对API响应数据进行预处理并返回结果，处理完的数据再交给postHandler来处理。如果不设置preHandler，API响应数据直接由postHandler来处理
 * @param ignoreIndicator: 是否忽略加载效果
 * @param loadingText: 加载文字
 * @returns {Promise<void>}
 */
export async function loadData (sendRequest, postHandler = null, preHandler = null, ignoreIndicator = false, loadingText = '加载中...') {
  const responseHandler = async () => {
    try {
      let data = await sendRequest()
      if (preHandler != null) {
        let preprocessedData = preHandler(data)
        if (postHandler != null) {
          postHandler(preprocessedData)
        }
      } else {
        if (postHandler != null) {
          postHandler(data)
        }
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  const responseHandlerWrapper = async () => {
    Indicator.open({
      text: loadingText,
      spinnerType: 'fading-circle'
    })
    await responseHandler()
    Indicator.close()
  }

  !ignoreIndicator ? await responseHandlerWrapper() : await responseHandler()
}
