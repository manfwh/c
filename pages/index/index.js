//index.js
//获取应用实例
const app = getApp()
const { formatTime } = require('../../utils/util')
Page({
  data: {
    gender: "男",
    showNewUserModal: true,
    showMoalForm: false,    // 信息采集表单 弹窗
    userinfo: {},
    headCarInfo: {      //车辆轮播图切换更新数据
      platenumber: '', //车牌
      cartype: ''      // 车型
    },
    carList: [
      {
        platenumber: '晋A1111', //车牌号
        cartype: '路虎发现2018', // 车型
        vehicleEvaluation: 4, //车辆评估
        projectRem: '更换雨刮， 更换轮胎', // 项目推荐
        imd: formatTime(new Date()), // 保险到期日
        vand: formatTime(new Date()) // 车辆年检日
      },
      {
        platenumber: '晋A21161', //车牌号
        cartype: '本田雅阁', // 车型
        vehicleEvaluation: 2, //车辆评估
        projectRem: '更换离合器， 更换轮胎', // 项目推荐
        imd: formatTime(new Date()), // 保险到期日
        vand: formatTime(new Date()) // 车辆年检日
      },
    ],
    animationData: '',
    animateModal: '',
  },
  onShow() {
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
  /**
   * 显示弹窗 信息采集表单
   */
  showModal: function () {
    this.setData({
      showMoalForm: true
    })
  },
  /**
   * 关闭弹窗 信息采集表单
   */
  hideModal: function () {

    this.setData({
      showMoalForm: true
    })
  },
  onLoad: function () {
    console.log('load')
    // 获取用户信息
    wx.getUserInfo({
      success: res => {
        this.setData({

          userinfo: res.userInfo
        })
      }
    })
    
  },
  /**
   * 车辆轮播图切换完成回调，更新头部车辆信息
   */
  animationfinish: function (e) {
    console.log(50)
    var index = e.detail.current;
    this.setData({
      headCarInfo: {
        platenumber: this.data.carList[index].platenumber,
        cartype: this.data.carList[index].cartype
      }
    })
  },
  /**
   * 跳转页面
   */
  navigateTo: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  /**
   * 切换 性别
   */
  genderChange: function (e) {
    console.log(e);
    this.setData({
      gender: e.detail.value
    })
  },
  /**
   * 获取绑定的手机号
   */
  getPhoneNumber(e) {
    console.log(e)
  },
  hideNewUserModal() {
    this.setData({
      showNewUserModal: false
    })
  },
  /**
   * 关闭 新用户专享弹窗
   */
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
  /**
   * 填写信息表单
   */
  writeInfo() {
    this.setData({
      showNewUserModal: false,
      showMoalForm: true
    })
  },
  /**
   * 联系客服
   */
  call(){
    wx.makePhoneCall({
      phoneNumber: '18016016382',
    })
  }
})
