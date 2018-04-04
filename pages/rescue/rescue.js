// pages/rescue /rescue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',                       //  姓名
    gender: '男',                   //  性别
    loading: false,                 //  是否是加载状态
    LocationBtnValue: '获取位置',    //  获取位置按钮文字， 加载成功换成 重新获取
    location: '',                   //  经纬度
    phonenumber: '',                //  电话号码
    disabled: false                  //  没有填写完整禁止提交
  },
  /**
   * 选择性别
   */
  genderChange(e) {
    console.log(e)
    this.setData({
      gender: e.detail.value
    })
  },
  /**
   * 获取位置
   */
  getLocation(e) {
    var self = this;
    this.setData({
      loading: true,
      LocationBtnValue: ''
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        self.setData({
          loading: false,
          LocationBtnValue: '重新获取',
          location: res.latitude + ',' + res.longitude
        })
      }
    })
  },
  /**
   * 发送求助
   */
  submit(e) {
    // 验证表单
    var phoneRe = /^1[0-9][0-9]\d{4,8}$/;
    var { name, phonenumber, location, gender } = this.data;
    if (name == '') {
      wx.showToast({
        title: '请填写姓名',
        mask: true,
        icon: 'none'
      })
      return 
    } else if (!phoneRe.test(phonenumber)) {
      wx.showToast({
        title: '请填写正确的手机号',
        mask: true, 
        icon: 'none'
      })
     return 
    } else if (location == '') {
      wx.showToast({
        title: '请获取位置',
        mask: true,
        icon: 'none'
      })
      return 
    }
    console.log('验证通过可以提交')
  },

  /**
   * 表单失去焦点后 更新 name 和 phoneNUmber
   */
  update(e) {
    if (e.currentTarget.dataset.type == 'name') {
      this.setData({
        name: e.detail.value.trim()
      })
    } else if (e.currentTarget.dataset.type == 'phone') {
      this.setData({
        phonenumber: e.detail.value.trim()
      })
    }
    
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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