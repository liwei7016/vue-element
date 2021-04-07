import axios from "axios"


// 默认永不超时
axios.defaults.timeout = 0;

axios.interceptors.response.use(response => {
    let { data, config } = response;
    if (data === '') {
      let message = '数据不存在';
      return Promise.reject(message);
    }
    let { success, errCode, errMsg } = data;
    if (success === undefined) {
      return Promise.reject(errMsg);
    }
    if (!success) {
      return Promise.reject(errMsg);
    }
    return response;
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求';
                break;
            case 401:
                error.message = '未授权，请重新登录';
                break;
            case 403:
                error.message = '拒绝访问';
                break;
            case 404:
                error.message = '请求错误,未找到该资源';
                break;
            case 405:
                error.message = '请求方法未允许';
                break;
            case 408:
                error.message = '请求超时';
                break;
            case 500:
                error.message = '服务器端出错';
                break;
            case 501:
                error.message = '网络未实现';
                break;
            case 502:
                error.message = '网络错误';
                break;
            case 503:
                error.message = '服务不可用';
                break;
            case 504:
                error.message = '网络超时';
                break;
            case 505:
                error.message = 'http版本不支持该请求';
                break;
            default:
                error.message = `连接错误${error.response.status}`;
        }
        let errorData = {
            status: error.response.status,
            message: error.message,
            config: error.response.config
        };
    } else {
      
    }
    return Promise.reject(error);
});

export const ajaxPost = (url, data, headers)=>{
  return axios.post(url, data, {
    headers: headers
  })
}

export const ajaxDelete = (url, data = {}, headers = {})=>{
    return axios.delete(url, data, {
      headers: headers
    })
  }