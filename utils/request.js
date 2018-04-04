const baseUrl = 'http://192.168.31.249:3000/api';
const request = function(url, options) {
  return new Promise((resolve, reject) =>{
    wx.request({
      ...options,      
      url: `${baseUrl}${url}`,
      success(res) {
        resolve(res)
      },
      fail(e) {
        reject(e)
      }
    })
  })
}

module.exports = request;