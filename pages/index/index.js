var CONFIG = require('../../utils/config.js')
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swipers: [],
    news: [],
    cat: '17',
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: CONFIG.API_URL.GET_INDEX_NEW,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        
         var data = res.data['lunbo'];  
         var success = res.data['success'];
         var activity = res.data['activity'];    
           var other = res.data['other'];    
         that.setData({swipers: data});
         that.setData({success: success});
          that.setData({activity: activity});

           that.setData({other: other});


          

        // if (res.statusCode == 200 && res.data.status == 'ok') {
        //   var data = res.data;
        //   var swipers = [];
        //   var news = [];
          
        //   console.log(data);
        //   for (var i = 0; i < data.count; i++) {
        //     if (i < 3) {
        //       swipers.push(data.posts[i]);
        //     }
        //     else {
        //       var excerpt_plain = data.posts[i].excerpt.replace(/<[^>].*?>/g, "");
        //       data.posts[i].excerpt_plain = excerpt_plain.replace(/\[[^\]].*?\]/g, "");
        //       news.push(data.posts[i]);
        //     }
        //   }
        //   that.setData({swipers: swipers});
        //   that.setData({news: news});
        // } else {
          
        // }
      },
      fail:function(res){
        console.log(res);
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
  tapName: function (event) {        
        wx.switchTab({
            url: "../success/success"
        });
        
    },
    tapAct: function (event) {   

        wx.switchTab({
            url: "../activity/activity"
        });
        
    },
    tabContent: function (event) { 
      var idx = event.currentTarget.dataset.idx;    
      
      app.globalData.selectCondition=idx;
      console.log(app.globalData.selectCondition)



        wx.switchTab({
            url: "../content/content",
            success:function(){
                var page = getCurrentPages().pop();  
              if (page == undefined || page == null) return;  
                page.onLoad();  
            }
        });
        
    }



});
