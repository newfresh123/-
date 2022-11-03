// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          土豆: Mock.Random.float(100, 8000, 0, 0),
          番茄: Mock.Random.float(100, 8000, 0, 0),
          冬瓜: Mock.Random.float(100, 8000, 0, 0),
          莴笋: Mock.Random.float(100, 8000, 0, 0),
          南瓜: Mock.Random.float(100, 8000, 0, 0),
          木耳: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '木耳',
            value: 2999
          },
          {
            name: '土豆',
            value: 5999
          },
          {
            name: '番茄',
            value: 1500
          },
          {
            name: '冬瓜',
            value: 1999
          },
          {
            name: '莴笋',
            value: 2200
          },
          {
            name: '木耳',
            value: 4500
          }
        ],
        // 柱状图
        userData: [
          {
            date: '土豆',

            active: 200
          },
          {
            date: '番茄',

            active: 500
          },
          {
            date: '冬瓜',

            active: 550
          },
          {
            date: '莴笋',

            active: 800
          },
          {
            date: '木耳',

            active: 550
          },
          {
            date: '南瓜',

            active: 770
          },
        ],
        // 折线图
        orderData: {
          date: ['20221001', '20221002', '20221003', '20221004', '20221005', '20221006', '20221007'],
          data: List
        },
        tableData: [
          {
            name: '土豆',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: '莴笋',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: '冬瓜',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: '木耳',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: '番茄',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: '南瓜',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  }
}