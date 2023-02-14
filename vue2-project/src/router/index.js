//  专门构造路由器
import VueRouter from 'vue-router'
// import Index from '../pages/Index'
import taoge from '../pages/detail/taoge'
import toplist from '../pages/detail/toplist'
const router = new VueRouter({
    routes:[
        {
            path:'/',
            // 默认路由重定向
            redirect:to=>{
                return {
                    path:'Index',
                    query:{
                        tab: 'recommend'
                    }
                }
            }
        },
        {
            path:'/Index',
            component:()=>import('@/pages/Index'),
        },{
            path:'/detail',
            children:[
                {
                    path:'taoge',
                    component:()=>import('@/pages/detail/taoge'),
                },
                {
                    path:'toplist',
                    component:()=>import('@/pages/detail/toplist'),
                }
            ]
        }


]
})




export default  router;