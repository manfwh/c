var app = getApp();
var request = require('../../utils/request');
var { formatDate } = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showNewUserModal: true,
    animationModal: null,
    animationData: null,
    userInfo: {},
    curCar: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      curCar: this.data.userInfo.cars ? this.data.userInfo.cars[0] : []
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回  
      // 所以此处加入 callback 以防止这种情况  

      app.userInfoReadyCallback = res => {
        console.log(31, res)
        this.setData({
          userInfo: res,
          hasUserInfo: true
        })
        console.log(res)
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理  
      wx.getUserInfo({
        success(res) {
          app.globalData.userInfo = res.userInfo
          _this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //  新用户弹窗
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    var animationModal = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    })
    this.animation = animation;
    this.animationModal = animationModal;

    animation.scale(1, 1).step();
    animationModal.opacity(1).step();

    this.setData({
      animationData: animation.export(),
      animationModal: animationModal.export()
    })
  },
  toggleCar(e) {
    this.setData({
      curCar: this.data.userInfo.cars[e.detail.current]
    })
  },
  closeNewUserModal() {
    //  animation = animation

    this.animation.scale(0).step();
    this.animationModal.opacity(0).step();

    this.setData({
      animationData: this.animation.export(),
      animationModal: this.animationModal.export()
    })
    setTimeout(() => {
      this.hideNewUserModal()
    }, 500)

  },
  hideNewUserModal() {
    this.setData({
      showNewUserModal: false
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    request('/user/' + wx.getStorageSync('openId'))
      .then(res => {
        app.globalData.userInfo = Object.assign(app.globalData.userInfo, res.data);
        res.data.cars.map(car => {
          car.insuranceMaturity = formatDate(new Date(car.insuranceMaturity));
          car.yearlyInspectionDate = formatDate(new Date(car.yearlyInspectionDate));
          return car;
        })
        this.setData({
          userInfo: app.globalData.userInfo,
        })
        wx.stopPullDownRefresh()
      })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// "tabBar": {
//   "backgroundColor": "#fff",
//     "color": "#7b7b7b",
//       "selectedColor": "",
//         "list": [
//           {
//             "pagePath": "pages/index/index",
//             "text": "首页",
//             "iconPath": "/images/icons/0.1.png",
//             "selectedIconPath": "/images/icons/1.png"
//           },

//           {
//             "pagePath": "pages/me/me",
//             "text": "我的",
//             "iconPath": "/images/icons/2.1.png",
//             "selectedIconPath": "/images/icons/2.png"
//           }
//         ]
// }