


<!-- qq音乐 vue2 案例 -->
<template>
    <div class="footer">
        <a class="bottom_bar__bd c_bg1" href="javascript:;">
            <div class="bottom_bar__media"><img class="bottom_bar__logo"
                    src="https://y.qq.com/mediastyle/mod/mobile/img/logo.svg" alt="QQ音乐"></div>
            <p class="bottom_bar__desc c_txt1">安装QQ音乐 发现更多精彩</p>
        </a>
    </div>

</template>

<script>

export default {
    name: "Musicfooter",
    data() {
        return {};
    },

}
</script>


<style>
.footer {
    height: 0.45rem;
    padding: 0.16rem;
}
.c_bg1{

    background-color: #fafafa;
}
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
