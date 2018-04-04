var request = require('../../utils/request')
var app = getApp();
import { validate, validateRequired } from '../../utils/validate'
let self = {}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAddCarPage: null,
    gender: '男',
    birthday: '生日',
    brand: '选择品牌',
    insuranceMaturity: '保险到期日',
    yearlyInspectionDate: '年检日期',
    purchaseDate: '购车日期',

    form: {},
  },
  validate(e) {
    let name = e.currentTarget.dataset.name;
    if (name == 'model') {
      this.setData({
        model: this.data.models[e.detail.value].name
      })
    } else {
      this.setData({
        [name]: e.detail.value
      })
    }

    validate(e, this)
  },
  submit() {
    // 因blur事件在click事件之后触发，避免未校验直接提交
    if (this.data.isAddCarPage) {
      validateRequired(['plate', 'model'], self)

    } else {
      validateRequired(['plate', 'name', 'phone', 'model'], self)
    }

    if ('' === self.data.form.$invalidMsg) {
      wx.showLoading({
        title: '提交中...',
      })
      let { name, phone, birthday, gender, plate, brand, model, insuranceMaturity, yearlyInspectionDate, purchaseDate } = Object.assign({}, this.data);
      if (this.data.isAddCarPage) {
        request('/car', {
          method: 'POST',
          data: { openid: wx.getStorageSync('openId'), brand, model, plate, insuranceMaturity, yearlyInspectionDate, purchaseDate, }
        })
          .then(res => {
            app.globalData.userInfo.cars.push(res.data);
            wx.navigateBack({
              
            })
          })
      } else {
        request('/user', {
          method: 'POST',
          data: {
            user: {
              openid: wx.getStorageSync('openId'),
              name, phone, birthday, gender
            },
            car: { brand, model, plate, insuranceMaturity, yearlyInspectionDate, purchaseDate }
          }
        })
          .then(res => {
            wx.hideLoading()
            wx.showToast({
              title: '提交成功',
            })
            wx.nav
          })
          .catch(err => {
            wx.hideLoading();
            wx.showToast({
              title: err.msg,
            })
            console.log(err)
          })
      }




    } else {
      console.log('valid')
    }
  },
  genderChange(e) {
    this.setData({
      gender: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    self = this;
    // 判断是否是第一次添加车辆
    if (options.add) {
      this.setData({
        isAddCarPage: true
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var id = Object.assign({}, app.globalData.brand)._id
    if (app.globalData.brand) {
      request(`/brands/${id}`)
        .then(res => {
          this.setData({
            models: res.data.model,
            brand: res.data.name,
            model: '',
          })
        })
    }

  },
  selectBrand(e) {
    wx.navigateTo({
      url: '../brands/brands',
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