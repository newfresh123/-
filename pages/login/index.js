
Page({
  handlegetuserinfo(e) {
    const { userinfo } = e.detail;
    wx.setStorageSync("userInfo", userinfo);

    wx.navigateBack({
      delta: 1
    });
  },

  data: {

  },


})