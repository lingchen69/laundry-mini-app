//app.js
App({
  onLaunch: function () {
    // 检查登录状态
    wx.login({
      success: res => {
        console.log('登录成功', res.code)
      }
    })
  },
  
  globalData: {
    userInfo: null,
    apiBaseUrl: 'https://your-api.com/api'
  },
  
  // 获取用户信息
  getUserInfo: function(cb) {
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    }
  }
})