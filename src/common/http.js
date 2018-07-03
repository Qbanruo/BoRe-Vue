import axios from 'axios'
import queryString from 'querystring'

/**
 * get方法获取数据，并对数据进行处理
 * @param url: url
 * @param params: 参数
 * @returns {Promise<void>}
 */

export async function get (url, params = {}) {
  try {
    let res = await axios.get(url, {params})
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}

/**
 * post方法提交数据，并对数据进行处理
 * @param url: url
 * @param data: 提交的数据
 * @returns {Promise<void>}
 */
export async function post (url, data = {}) {
  data = queryString.stringify({data})
  try {
    let res = await axios.post(url, data)
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}
