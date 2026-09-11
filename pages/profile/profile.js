//pages/profile/profile.js
Page({
  data: {
    userInfo: {
      name: '用户名',
      phone: ''
    },
    stats: {
      totalOrders: 0,
      completedOrders: 0,
      totalSpent: 0
    }
  },

  onLoad: function() {
    this.loadUserInfo()
    this.loadStats()
  },

  loadUserInfo: function() {
    const userInfo = wx.getStorageSync('laundry_userInfo') || {
      name: '用户名',
      phone: ''
    }
    this.setData({ userInfo })
  },

  loadStats: function() {
    const orders = wx.getStorageSync('laundry_orders') || []
    const completedOrders = orders.filter(o => o.status === 'completed')
    const totalSpent = orders.reduce((sum, o) => sum + (parseInt(o.price) || 0), 0)
    
    this.setData({
      'stats.totalOrders': orders.length,
      'stats.completedOrders': completedOrders.length,
      'stats.totalSpent': totalSpent
    })
  },

  goToEditProfile: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  goToHelp: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  logout: function() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('laundry_userInfo')
          wx.removeStorageSync('laundry_orders')
          wx.reLaunch({
            url: '/pages/index/index'
          })
        }
      }
    })
  },

  onShow: function() {
    this.loadStats()
  }
})