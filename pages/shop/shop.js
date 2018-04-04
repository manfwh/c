// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    cateId: 'cate0',
    cates: [
      1, 2, 3, 4, 5, 6, 7
    ],
    scrollLeft: 0,
    products: [
      {
        type: 1,
        name: '兜兜保养VIP银卡',
        price: 500,
        nums: 0,
      },
      {
        type: 2,
        name: '兜兜保养VIP金卡',
        price: 1000,
        nums: 0,
      },
      {
        type: 3,
        name: '兜兜保养VIP白金金卡',
        price: 1500,
        nums: 0,
      },
      {
        type: 4,
        name: '兜兜保养VIP钻石金卡',
        price: 2000,
        nums: 0,
      }
      
    ],
    priceSum: 0,
    amountSum: 0,
  },
  getScrollOffset: function () {
    wx.createSelectorQuery().selectViewport().scrollOffset(function (res) {
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  },
  /**
   * 添加商品 
   */
  add(e) {
    var id = e.currentTarget.dataset.id;
    this.data.products.some((item) => {
      if (item.type == id) {
        item.nums++;
        this.setData({
          products: this.data.products,
          priceSum: this.data.priceSum + item.price,
          amountSum: this.data.amountSum+1
        })
        return true;
      }
    })
    
  },
  decrement(e) {
    var id = e.currentTarget.dataset.id;
    this.data.products.some((item) => {
      if (item.type == id) {
        item.nums--;
        this.setData({
          products: this.data.products,
          priceSum: this.data.priceSum - item.price,
          amountSum: this.data.amountSum-1
        })
        return true;
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  selectTab(e) {
    var index = e.currentTarget.id.slice(-1);
    this.setData({
      cateId: e.currentTarget.id,
      selected: e.currentTarget.id.slice(-1),
      // selected: e.currentTarget.id.slice(-1)
      // scrollLeft: scrollLeft
    })
  },
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