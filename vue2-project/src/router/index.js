//  专门构造路由器
import VueRouter from 'vue-router'
import Index from '../pages/Index'
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'Index',
        },
        {
        path:'/Index',
        component:Index,
        }


]
})




export default  router;