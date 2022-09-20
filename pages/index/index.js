import { request } from "../../request/index.js";
wx - Page({
  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList: [],
    //导航数组
    cateList:[],
    //楼层数据
    floorList:[]
  },
  /**
轮播图
   */
  onLoad: function (options) {
   
    request({ url: "/home/swiperdata" })
      .then(result => {
        this.setData({
          swiperList: result
        })

      })
  this.getSwiperList();
  this.getCateList();
  this. getFloorList();
  },
  /**
   获取轮播图数据
   */
  getSwiperList() {
    request({ url: "/home/swiperdata" })
    .then(result => {
      this.setData({
        swiperList: result
      })

    })

  },
  //获取分类导航数据
  getCateList() {
    request({ url: "/home/catitems" })
    .then(result => {
      this.setData({
        cateList: result
      })

    })

  },
  //获取楼层 数据
  getFloorList() {
    request({ url: "/home/floordata" })
    .then(result => {
      this.setData({
        floorList: result
      })

    })

  },

  }
)