/* 引入js文件 进行路由的相关配置 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var routes = [
  {
    path: "/film",
    component: () => import(/* webpackChunkName:'film' */ "../film/film"),
    children: [
      {
        path: "nowPlaying",
        component: () =>
          import(
            /* webpackChunkName:'nowPlaying' */ "../film/nowPlaying/nowPlaying"
          )
      },
      {
        path: "/film/comingSoon",
        component: () =>
          import(
            /* webpackChunkName:'comingSoon' */ "../film/comingSoon/comingSoon"
          )
      },
      {
        path: "/",
        redirect: "/film/nowPlaying"
      }
    ]
  },
  {
    path: "/msg",
    component: () =>
      import(/* webpackChunkName:'comingSoon' */ "../components/msg")
  },
  {
    path: "/city",
    component: () =>
      import(/* webpackChunkName:'comingSoon' */ "../cinema/city")
  },
  {
    path: "/Cinema",
    component: () => import(/* webpackChunkName:'Cinema' */ "../cinema/Cinema")
  },
  {
    name: "s",
    path: "/Cinema/search",
    component: () => import(/* webpackChunkName:'search' */ "../search/search")
  },
  {
    path: "/Center",
    component: () => import(/* webpackChunkName:'Center' */ "../center/Center"),
    beforeEnter(to, form, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/login");
      }
      next();
    }
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName:'Login' */ "../Login/Login")
  },
  {
    path: "/sinUp",
    component: () => import(/* webpackChunkName:'Login' */ "../sinUp/sinup")
  },
  // 路由重定向
  {
    path: "/film/:id",
    component: () => import(/* webpackChunkName:'detail' */ "../detail/detail")
  },
  {
    path: "/",
    redirect: "/film/nowPlaying"
  }
];
var router = new Router({
  mode: 'hash',
  routes
})
// 路由守卫
/* router.beforeEach((to,from,next)=> {
  console.log('路由切换了');
   console.log(to, from);
  next()
})
router.afterEach((to,from)=> {
  console.log(to,from);
}) */
export default router