//  专门构造路由器
import VueRouter from 'vue-router'


import Home from '../pages/Home'

/*
    API：
        this.$router.forward() 前进
        this.$router.back() 后退
        this.$router.go() 可进可退

    可以通过在组件中调用 API 进行方法的设置

    组件中有两个特殊的路由生命周期钩子

    activated(){} 激活的
    deactivated(){} 失活的

    当组件被作调用时
    调用activated()中函数
    而当路由发生切换时，组件的两个生命周期钩子也会发生切换，切不会影响组件的缓存



*/
/*

    组件中用 <router-link to="" active-class="" ></router-link> 设置连接
    to表示指向哪个地址 
    active-class 表示该页面活跃时添加上该类名




    如果要在路由中携带query参数，
    to的字符串写法 例
    <router-link :to="***`{*.id}`**" active-class="" ></router-link>

    to 的对象写法 例
    <router-link :to="{
    path:'/home'
    query:{
        id:**.id,
        title:*.title
    }
    }" active-class="" ></router-link>

    建议使用对象写法


    如果要在路由中携带params参数
    to的字符串写法
    <router-link :to="`/home/${m.id}/${m.title}`" active-class="" ></router-link>
    to 的对象写法 例
    <router-link :to="{
        name:'/home'
        params:{
            id:**.id,
            title:*.title
        }
    }" active-class="" ></router-link>

    用 <RouterView></RouterView> 设置路由中页面组件展示位置
    利用 
    <keep-alive include="News">
        <RouterView></RouterView>
    </keep-alive>
    keep-alive可以将内部组件数据缓存 可以设置include 限制组件可以缓存 :include=["",""]设置多个组件缓存，不设置默认为所有 

*/

const router = new VueRouter({
    routes:[

        {
        name:'Home',
        /*
        
        如果给路由设置了 name属性 设置为命名路由，则可以用params 传输参数进行跳转
        
        例如 ： 
            path:'/home:/id:/title'
            此时 home 路由下存在参数 params属性 里面有 id 和title属性
            由to利用params的字符串写法或对象写法传递参数
        
        */ 
        path:'/Home',
        component:Home,
        // 嵌套路由利用children 添加
        /* children:{
            // 在children中 path属性会自动加 / 不需要手动添加
            path:'homechildren'，
            component: Homechildren
        }*/



        /*
        路由中可通过 props 属性，向组件中传值


        第一种写法 值为对象 路由中写死
        props:{
            id:0,
            title:1
        }
        第二种写法 值为布尔值 设置props为true 所有 params 参数以 props 的形式传输过去 
        props:true
        第三章写法 值为函数
        props($route){
            return {
                id :$route.query.id,
                title: $route.query.title
            }
        }

        */

        // meta:{isAuth:true，***} 媒体标签 每个路由中都可以设置，


        // 组件内部守卫
        // 只有前置守卫，但可以和全局后置守卫配合使用
        // beforeEnter:(to,from,next)=>{
        //     next()
        // }
    }]
})


// 全局前置路由守卫
// router.beforeEach((to,from,next)=>{
    
//     // 当开启前置路由守卫时，所有路由都将无法进行跳转，除非调用 next() API 
//     // to 前往的路由信息
//     // from 从哪个路由开始点击
//     // next 允许跳转
    
    


//     // 若只有next 则允许所有路由进行跳转
//     // next()

//     // 一般用于对路由进行判断，判断该用户是否有权限进入该网址
//     // 可以通过调用 to.meta.isAuth 或者 to.meta.*** 再获取缓存 localStorge.getItem('***') 进行判断，路由是否可以跳转
// })

// // 全局后置路由守卫
// // 初始化时被调用，每次路由切换时被调用
// router.afterEach((to,from)=>{
//     // 在路由切换后可以对当前路由进行一个判断，常用于切换后的状态判断
// })


export default  router;