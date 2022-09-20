import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      value: "综合",
      isActive: true
    },
    {
      id: 1,
      value: "销量",
      isActive: false
    },
    {
      id: 2,
      value: "价格",
      isActive: false
    }],
    goods_list: []

  },
  Queryparams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10
  },
  totalpages: 1,
  onLoad(options) {
    this.Queryparams.cid = options.cid||"";
    this.Queryparams.query=options.query||"";
    this.getgoodslist();
  },

  async getgoodslist() {
    const res = await request({ url: "/goods/search", data: this.Queryparams })
    const total = res.total;
    this.totalpages = Math.ceil(total / this.Queryparams.pagesize)
    //console.log(this.totalpages)
    this.setData({
      goods_list: [...this.data.goods_list, ...res.goods]
    })
    wx.stopPullDownRefresh();



  },
  handletabsitemchange(e) {
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
  onReachBottom() {
    if (this.Queryparams.pagenum >= this.totalpages) {
      wx.showToast({
        title: '没有下一页数据',

      });
    }
    else {
      this.Queryparams.pagenum++;
      this.getgoodslist();

    }
  },
  onPullDownRefresh(){
    this.setData({
      goods_list:[]
    })
    this.Queryparams.pagenum=1;
    this.getgoodslist();
  }

})