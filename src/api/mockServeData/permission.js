import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              label: '农产品数据',
              icon: 'video-play',
              url: 'Mall.vue'
            },
            {
              path: '/user',
              name: 'user',
              label: '农场主管理',
              icon: 'user',
              url: 'User.vue'
            },
            {
              label: '详细信息',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '农场主详细信息',
                  icon: 'setting',
                  url: 'PageOne.vue'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '农场详细信息',
                  icon: 'setting',
                  url: 'PageTwo.vue'
                },
                {
                  path: '/page3',
                  name: 'page3',
                  label: '农产品详细信息',
                  icon: 'setting',
                  url: 'Product.vue'
                }
              ]
            },
            {
              label: '比赛信息',
              icon: 'location',
              children: [
                {
                  path: '/gameshow',
                  name: 'GameShow',
                  label: '比赛展示页',
                  icon: 'setting',
                  url: 'GameShow.vue'
                },
                {
                  path: '/gamemanage',
                  name: 'GameManage',
                  label: '比赛管理页',
                  icon: 'setting',
                  url: 'GameManage.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'user' && password === 'user') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home.vue'
            },
            {
              path: '/video',
              name: 'video',
              label: '商品管理',
              icon: 'video-play',
              url: 'Mall.vue'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}