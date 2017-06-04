var CONFIG = require('../../utils/config.js')
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navTab:'',
    currentNavtab:"",
    Info:'',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tiao:function(e){
         console.log(e.currentTarget.dataset.mark)
              wx.navigateTo({
                      url: '/pages/news/news-details?id='+e.currentTarget.dataset.mark+'&type=data',//页面跳转相对路径要写清楚且准确
                      success: function(res){
                        console.log('跳转到news页面成功')// success
                      },
                      fail: function() {
                      console.log('跳转到news页面失败')  // fail
                      },
                      complete: function() {
                        console.log('跳转到news页面完成') // complete
                      }
              })
  },
   switchTab: function(e){

     console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },onShow:function(){
    // 页面显示
  },
  onLoad: function (res) {

       


    var that = this
   
    wx.request({
      url:  CONFIG.API_URL.API_BASE_NEW_CONTENT,
      data: {
        mark:1
      },
      header:{
        "Content-Type":"application/json"
      },
      success: function(res) {

        var resData = res.data
     
        //设置导航
        that.setData({
                navTab:resData.type
        })

        var sel = 0;
        if( app.globalData.selectCondition >0){
            sel = app.globalData.selectCondition;
        }else{
            sel = resData.type[0].id;
        }
      
      

      

        //默认导航
        that.setData({
          currentNavtab:sel
        })
        

        //设置数据
        that.setData({
          Info:resData.info
        })

            console.log(resData.info[0].key[0])

         

      }
    });


  }
})
