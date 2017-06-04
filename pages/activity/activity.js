var CONFIG = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
  
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.API_BASE_NEW_ACTIVITY,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        
        
         that.setData({activity: res.data});
         console.log(res.data);

          

       
      
      }
    })
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   console.log('onShareAppMessage')
   return {
      title: '小程序公司模板',
      desc: '',
      path: '/pages/index/index'
    }
  },
 
  
  



});
