//app.js
const request = require('/utils/request');
const { formatDate } = require('/utils/util');
App({
  onLaunch: function () {


    wx.getUserInfo({
      success: ({userInfo}) => {
        // 可以将 res 发送给后台解码出 unionId
        

        // 登录
        if (!wx.getStorageSync('openId')) {
          wx.login({
            success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              wx.request({
                url: 'http://192.168.31.104:7001/mini/login',
                method: 'POST',
                data: {
                  code: res.code,
                  userInfo
                },
                success: res => {
                  console.log(res)
                  wx.setStorageSync('openId', res.data.openid);
                  this.globalData.userInfo = Object.assign(userInfo, res.data)
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(this.globalData.userInfo)
                  }
                }
              })

            }
          })
        } else {
          // 获取会员信息
          request('/user/' + wx.getStorageSync('openId'))
            .then(res => {
              console.log(res)
              if (res.statusCode == 200) {
                res.data.cars.map(car => {
                  car.insuranceMaturity = formatDate(new Date(car.insuranceMaturity));
                  car.yearlyInspectionDate = formatDate(new Date(car.yearlyInspectionDate));
                  return car;
                })
                
                this.globalData.userInfo = Object.assign(userInfo, res.data);
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(this.globalData.userInfo)
                }
              }
            })
        }
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
       
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

    //   }
    // })
    // 获取设备宽度
    var self = this;
    wx.getSystemInfo({
      success({ windowWidth, pixelRatio }) {
        self.globalData.windowWidth = windowWidth;
        self.globalData.pixelRatio = pixelRatio;
      }
    })
    

  },
  globalData: {
    userInfo: null,
    user: null,
    windowWidth: 0,
    pixelRatio: 1,
    carBrand: null,
    carBrands: null
  }
})