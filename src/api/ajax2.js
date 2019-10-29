/*
ajax请求函数模块
返回值：promise对象（异步返回的数据是response.data的数据）
*/
import axios from 'axios'
// eslint-disable-next-line no-undef
export default function ajax2 (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
      // 执行异步的ajax请求
      // eslint-disable-next-line no-unused-vars
      let promise
      if (type === 'GET') {
        // 准 备 url query 参 数 数 据
        let dataStr = ''
        // 数 据 拼 接 字 符 串
        Object.keys(data).forEach(key => {
          dataStr += data[key] + '&' + '?pageindex='
          console.log(dataStr)
        })
        // if (dataStr !== '') {
        //   let dataStr1 = dataStr.substring(3, dataStr.lastIndexOf('&'))
        //   console.log(dataStr1)//?pageindex=1
        //   dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        //   console.log(dataStr)//20&?pageindex=1
        //   dataStr = dataStr.substring(0, dataStr.lastIndexOf('?'))
        //   console.log(dataStr)//20&
        //   dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        //   console.log(dataStr)//20
        //   dataStr=dataStr+dataStr1
        //   url = url + '/' + dataStr
        //   console.log(url)
        //   //http://www.liulongbin.top:3005/api/getcomments/20?pageindex=1
        // }
        if (dataStr !== '') {
          //23
          let dataStr2 = dataStr.substring(0, dataStr.indexOf('&'))
          dataStr = dataStr.substring(3, dataStr.lastIndexOf('?'))
          console.log(dataStr)
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          console.log(dataStr)
          dataStr = dataStr2 + dataStr
          console.log(dataStr)
          url = url + '/' + dataStr
          console.log(url)
        }
        // 发 送 get 请 求
        // eslint-disable-next-line no-undef
        promise = axios.get(url)
      } else {
        // 发 送 post 请 求
        // eslint-disable-next-line no-undef
        promise = axios.post(url, data)
      }
      promise.then(function (response) {
        // eslint-disable-next-line handle-callback-err
        // 成功调用resolve(),是Promise最终的返回去的
        resolve(response.data)
      }).catch(function (error) {
        // 失败调用reject()
        reject(error)
      })
    }
  )
}
