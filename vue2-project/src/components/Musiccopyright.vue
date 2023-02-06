


<!-- qq音乐 vue2 案例 -->
<template>
    <section class="copyright">
        <div class="copyright__media"><img class="copyright__logo"
                src="https://y.qq.com/mediastyle/mod/mobile/img/logo_ch.svg" alt="QQ音乐"></div>
        <p class="copyright__para c_txt1">Copyright © 1998 - <span>2019</span> Tencent. All Rights Reserved.</p>
        <p class="copyright__para c_txt1">联系电话：0755-86013388 QQ群：55209235</p>
    </section>

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
.copyright {
    margin-top: 0.3rem;
    padding: 0.16rem 0;
    text-align: center;
}
.copyright__media {
    width: 0.8rem;
    height: 0.22rem;
    margin: 0 auto 0.1rem;
}
.copyright__logo {
    display: block;
    height: 100%;
}
.c_txt1 {
    color: rgba(26,26,26,1);
}
</style>
