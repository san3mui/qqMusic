// 用于创建vuex中的store

// 使用Vuex 时 需要在该文件下引入Vue 同时在此处引入Vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// action 用于响应组件中的动作
// const action = {
//     // 在action中写入响应，并传给mutations 让其做出对应操作
//     jia(content,value){
//         // 页面中的上下文被包裹成content对象传入 action 中 value 是传入的值
//         // 咋 store 中，利用 content 对象中的 content.dispatch 和 content.commit 将不同动作进行相关联
//         // 传递数据
//         content.dispatch('jian',value)
//         // 一般来说 action中的函数作为小写，mutations 中的函数大写 作为区分
//         content.commit('JIA',value)
//     },
//     jian(content,value){
//         content.commit('JIAN',value)
//     }
// }
// //  用于操作数据
// const mutations = {
//     JIA(state,value){
//         // mutations 中函数接收两个参数，一个state 一个value 
//         // state 就是下文中的state 状态管理 直接 state.sum 可以操作数据
//         //value 是action 中传递的value
//         state.sum += value;
//     },JIAN(state,value){
//         state.sum -= value;
//     },
// }

// // 用于存储数据
// const  state = {
//     // 设置存储的数据
//     sum : 0,

//     // 用 {{$store.state.xxx}}调用xxx数据 组件中为 this.$store.xxx
// }
// // 用于对存储数据进行加工，并不修改源数据
// const getter = {
//     bigSum(state){
//         return state.sum*10;

//     }
// }


// 单个状态管理写法
// 这里的Vuex.Store 中的Store 必须大写
// export default new Vuex.Store({
//     action,
//     mutations,
//     state,
// })


// 模块化写法
// 某个组件的相关配置
const Option1 = {
    namespaced:true,// 设置namespaced 为true Option1才能在组件中使用
    action:{
        jia(content,value){
            // 页面中的上下文被包裹成content对象传入 action 中 value 是传入的值
            // 咋 store 中，利用 content 对象中的 content.dispatch 和 content.commit 将不同动作进行相关联
            // 传递数据
            content.dispatch('jian',value)
            // 一般来说 action中的函数作为小写，mutations 中的函数大写 作为区分
            content.commit('JIA',value)
        },
    },
    mutations:{
        JIA(state,value){
            // mutations 中函数接收两个参数，一个state 一个value 
            // state 就是下文中的state 状态管理 直接 state.sum 可以操作数据
            //value 是action 中传递的value
            state.sum += value;
        }
    },
    state:{
        sum : 0,
    }

    // 有需要getters 时再添加getters
}
const Option2 = {
    namespaced:true,// 设置namespaced 为true Option1才能在组件中使用
    action:{
        jia(content,value){
            // 页面中的上下文被包裹成content对象传入 action 中 value 是传入的值
            // 咋 store 中，利用 content 对象中的 content.dispatch 和 content.commit 将不同动作进行相关联
            // 传递数据
            content.dispatch('jian',value)
            // 一般来说 action中的函数作为小写，mutations 中的函数大写 作为区分
            content.commit('JIA',value)
        },
    },
    mutations:{
        JIA(state,value){
            // mutations 中函数接收两个参数，一个state 一个value 
            // state 就是下文中的state 状态管理 直接 state.sum 可以操作数据
            //value 是action 中传递的value
            state.sum += value;
        }
    },
    state:{
        sum : 0,
    }

    // 有需要getters 时再添加getters
}

export default new Vuex.Store({
    
    modules:{
        Option1,
        Option2
    }
})
