var app = getApp()

Page({
  data: {
    data: {},
    sourceData:{},
    hotwords:{},
    url:app.globalData.url
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: that.data.url+'/get',
      method: 'GET',
      success:function(res) {
          that.setData({
            hotwords: res.data.hotwords,
            data: res.data.data,
            sourceData:res.data.data.weibo
          })
      },
      fail:function(res){
      },
      complete:function(res){
      }
    })

  },
  switchData: function(e) {
    var that=this
    console.log(e.target.dataset.name)
    that.setData({
      sourceData:that.data.data[e.target.dataset.name]
    })
  }
})
