


<!-- qq音乐 vue2 案例 -->
<template>
    <div class="MusicTitle">
        <div class="header_bg">
            <div class="top">
                <div class="top_box">
                    <span class="top_media logo">
                        <img class="logo_img" src="../assets/images/logo.svg" alt="">
                    </span>
                    <div class="top_operation_bar__bd">
                        <h2 class="top_operation_bar__tit">QQ音乐 </h2>
                        <p class="top_operation_bar__txt">打开APP收藏下载</p>
                    </div>
                    <a href="qqmusic://qq.com/ui/musicHall?p=%7B%7D&source=https%3A%2F%2Fi.y.qq.com%2Fn2%2Fm%2Findex.html%3Ftab%3Drecommend%26ADTAG%3Dmyqqtop"
                        class="top_operation_bar__btn">下载APP</a>
                </div>
            </div>
            <div class="mui_tab_wrap">
                <div class="mui_tab">
                    <div class="mui_tab_bd">
                        <RouterLink :to="{
                            path: 'Index',
                            query: {
                                tab: 'recommend'
                            }
                        
                        }" exact-active-class="current c_txt3" class="mui_tab__item c_txt2"><span class="mui_tab__text">
                                推荐
                            </span></RouterLink>
                        <RouterLink :to="{
                            path: 'Index',
                            query: {
                                tab: 'toplist'
                            }
                        }" exact-active-class="current c_txt3" class="mui_tab__item c_txt2">
                            <span class="mui_tab__text">
                                排行
                            </span>
                        </RouterLink>

                    </div>
                </div>

            </div>

        </div>

    </div>
   
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import router from '../router';
import Index from '../pages/Index.vue'
export default {
    name: "MusicTitle",
    data() {
        return {};
    },
    components: { RouterLink, router, Index }
}
</script>

<style >
.MusicTitle {
    height: 0.96rem;
}

.header_bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 3px 25px rgb(0 0 0 / 5%);
    background-color: #fff;
}

.top {
    position: relative;
    height: 0.54rem;
}

.top_box {
    height: 100%;
    padding: 0 0.14rem 0 0.16rem;
    display: -webkit-box;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
}

.top_media {

    margin-right: 0.06rem;
    width: 0.33rem;
    height: 0.33rem;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
}

.logo {
    border-radius: 0.05rem;
    background-color: #fff;

}

.logo_img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
}

.logo,
.logo_img {
    display: block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 0;
}

.top_operation_bar__bd {
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: justify;
}

.top_operation_bar__tit {
    font-size: .16rem;
    color: #000;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.top_operation_bar__txt {
    font-size: .12rem;
    color: grey;
}

.top_operation_bar__btn {
    display: block;
    height: 0.25rem;
    line-height: .25rem;
    padding: 0 0.17rem;
    text-align: center;
    font-size: .13rem;
    color: #575656;
    border: solid 1px #d8d8d8;
    border-radius: 999px;
    box-sizing: border-box;
}

.mui_tab_wrap {
    height: 0.42rem;
}

.mui_tab {
    position: relative;
    height: 0.42rem;
    overflow: hidden;
    box-shadow: 0 0.03rem 0.25rem rgb(0 0 0 / 5%);
}

.mui_tab {
    box-shadow: none;
}

.mui_tab_bd {
    position: relative;
    z-index: 2;
    display: -webkit-box;
    height: 100%;
    font-size: 0;
}

.mui_tab__item {
    display: block;
    -webkit-box-flex: 1;
    width: 0;
    height: 100%;
}

.c_txt2 {
    color: rgba(26, 26, 26, .5);
}

.c_txt3 {
    color: rgba(34, 213, 156, 1);
}

.mui_tab__text {
    position: relative;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 100%;
    white-space: nowrap;
    font-size: .16rem;
    font-weight: 300;
}

.mui_tab__item.current .mui_tab__text::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0.2rem;
    height: 0.03rem;
    border-radius: 0.03rem;
    background: currentColor;
    -webkit-transform: translate3d(-50%, 0, 0);
}
</style>
<style>
.bottom_bar__bd {
    position: fixed;
    bottom: 0.16rem;
    left: 50%;
    z-index: 100;
    display: -webkit-box;
    -webkit-box-align: center;
    height: 0.45rem;
    padding: 0 0.15rem;
    border-radius: 0.45rem;
    box-shadow: 0 3px 25px rgb(0 0 0 / 5%);
    -webkit-transform: translate(-50%);
}
.bottom_bar__media {
    width: 0.22rem;
    margin-right: 0.1rem;
}
.bottom_bar__desc {
    white-space: nowrap;
}
.bottom_bar__logo {
    display: block;
    width: 100%;
}
</style>
