import { request } from "../../request/index.js";
import regeneratorRuntime from'../../lib/runtime/runtime';
Page({

  data: {
    leftmenulist: [],
    rightcontent: [],
    currentIndex: 0,
    scrolltop:0


  },
  Cates: [],


  onLoad: function (options) {
    const Cates = wx.getStorageSync("cates");
    if (!Cates){
      this.getCates();
    }
    else{
      if(Date.now()-Cates.time>1000*10){
        this.getCates();
      }
      else{
        this.Cates=Cates.data;
        let leftmenulist = this.Cates.map(v => v.cat_name);
        let rightcontent = this.Cates[0].children;
        this.setData({
          leftmenulist,
          rightcontent
        })
      }
    }

      
  },
   async getCates() {
    /* request({
      url: "/categories"
    })
      .then(res => {
        this.Cates = res.data.message;
        wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
        //左边菜单
        let leftmenulist = this.Cates.map(v => v.cat_name);
        //右边数据
        let rightcontent = this.Cates[0].children;
        this.setData({
          leftmenulist,
          rightcontent
        })


      }) */
      const res=await request({url:"/categories"});
      this.Cates = res;
      wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
        //左边菜单
        let leftmenulist = this.Cates.map(v => v.cat_name);
        //右边数据
        let rightcontent = this.Cates[0].children;
        this.setData({
          leftmenulist,
          rightcontent
        })

  },
  //左侧点击事件
  handleitemtap(e) {
    const { index } = e.currentTarget.dataset;

    let rightcontent = this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightcontent,
      scrolltop:0
    })
  }


})