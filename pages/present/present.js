// pages/present/present.js
var utils = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusList: {
      0: "未开赛",
      1: "直播中",
      2: "已结束"
    },
    schedules: [],
    loading: true
  },

  fetchScheduleData: function () {
    var that = this;
    var scheduleData = utils.readDataFromStorage('schedule:');
    if (!scheduleData.result) {
      wx.navigateTo({
        url: '../error/error'
      })
    }
    else {
      that.setData({
        schedules: scheduleData.result.list[1],
        loading: false
      });
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
    this.fetchScheduleData();
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