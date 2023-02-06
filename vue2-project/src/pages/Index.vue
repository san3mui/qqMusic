<template>
  <div v-if='$route.query.tab === "recommend"'>
    <!-- 搜索框 -->
    <div class="search_bar" :class="{ mfocus }">
      <div class="search_bar__bd c_bg2">
        <div class="search_bar__icon c_txt2">
          <img src="../assets/images/search.png" alt="">
        </div>
        <form action="#">
          <input type="search" class="search_bar__input c_input" placeholder="搜索" v-model="Minputvalue"
            @focus="mfocus = true, mclick = true" @blur=Monblur() @keyup.enter="Menter(Minputvalue)" ref="Minput">
        </form>
        <i class="search_bar__empty c_txt2" :style="{ display: Minputc() ? 'block' : 'none' }" @click="Mclear()">清空</i>
      </div>
      <span class="search_bar__cancel c_txt1" :style="{ display: mclick ? 'block' : 'none' }"
        @click="mfocus = false, mclick = false, Minputvalue = ''">取消</span>
    </div>
    <!-- 搜索历史 -->
    <section class="search_cont" :style="{ display: mhashistory() ? 'block' : 'none' }">
      <section class="hot_search">
        <h2 class="hot_search__tit c_txt1">搜索历史</h2>
        <div class="hot_search__bd">
          <a v-for="(item, index) in datalist" class="hot_search__item c_txt1 c_bg2" href="javascript:;" :key="index"
            @click="Minputvalue = item, mfocus = true, mclick = true">
            {{ item }}</a>
        </div>
        <div class="hot_search__delete" @click="Hclear()">
          <svg class="hot_search__icon_delete c_txt2">
            <use xlink:href="#icon_delete"></use>
          </svg>
        </div>
      </section>
    </section>
    <!--  scroll滚动 -->

    <main>
      <section class="mod " v-for="(item, index) in list" :key="index" :style="{ display: mclick ? 'none' :'block'  }">
        <!-- 标题及更多 -->
        <section class="mui_tit">
          <h2 class="mui_tit__text c_txt1">{{ item.title }}</h2>
          <a class="mui_tit__more c_txt2" href="javascript:;">更多
            <i class="mui_tit__arrow"></i>
          </a>
        </section>
        <!-- 引入mui插件及调用 -->
        <section class="mui_scroll scroll_x">
          <section class="mui_scroll__bd clearfix mui-content" :ref="'mi' + index">
            <ul v-if="item.class == 'songs'" class="mui_list horizontal tit_wrap" :ref="'mui' + index">
              <!--这里放置真实显示的DOM内容-->
              <li class="mui_list__item" v-for=" (song, lindex) in item.songs" :key="lindex">
                <div class="mui_list__box">
                  <div class="mui_list__media"><img class="mui_list__img" :src="song.imgurl">
                    <div class="mui_cover_count"><i class="mui_cover_count__icon"></i><span
                        class="mui_cover_count__num">{{ song.play }}</span></div>
                  </div>
                  <div class="mui_list__bd">
                    <h3 class="mui_list__tit c_txt1">{{ song.title }}</h3>
                  </div>
                </div>
              </li>
            </ul>
            <ul v-else class="mui_list horizontal tit_wrap video" :ref="'mui' + index">
              <!--这里放置真实显示的DOM内容-->
              <li class="mui_list__item" v-for=" (song, lindex) in item.songs" :key="lindex">
                <div class="mui_list__box">
                  <div class="mui_list__media"><img class="mui_list__img"
                      :src="song.imgurl">
                    <div class="zone_info">
                      <div class="zone_info__bd"><img class="zone_info__img"
                          src="https://y.gtimg.cn/music/common/upload/category_area/4522613.jpg?max_age=2592000"><span
                          class="zone_info__name">臻品母带专区</span></div>
                    </div>
                  </div>
                  <div class="mui_list__bd">
                    <h3 class="mui_list__tit c_txt1">{{song.title}}</h3>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
// import '../assets/lib/mui/css/mui.min.css';
import '../assets/css/index.css'
import mui from '../assets/lib/mui/js/mui.min.js'

export default {
  name: 'Index',
  data() {
    return {
      // 模拟数据
      Minputvalue: "",
      mclick: false,
      mfocus: false,
      datalist: JSON.parse(localStorage.getItem('datalist')) || [],
      list: [
        {
          title: '官方歌单',
          class: 'songs',
          songs: [
            {
              play: '7442.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
              title: '欧美| 流行节奏控'
            },
            {
              play: '7442.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
              title: '欧美| 流行节奏控'
            },
            {
              play: '2232.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJU7UhBRvQcdookqiaqkurvWR8j7PKeyzcFA/300?n=1',
              title: '最·SUPER JUNIOR最·SUPER JUNIOR最·SUPER JUNIOR'
            },
            {
              play: '2232.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJU7UhBRvQcdookqiaqkurvWR8j7PKeyzcFA/300?n=1',
              title: '最·SUPER JUNIOR最·SUPER JUNIOR最·SUPER JUNIOR'
            },
            {
              play: '2232.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/4pmnRu5sL5QbtO8OS8NKJU7UhBRvQcdookqiaqkurvWR8j7PKeyzcFA/300?n=1',
              title: '最·SUPER JUNIOR最·SUPER JUNIOR最·SUPER JUNIOR'
            }
          ]
        },
        {
          title: '达人歌单',
          class: 'songs',
          songs: [
            {
              play: '7442.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
              title: '欧美| 流行节奏控'
            },
            {
              play: '7442.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
              title: '欧美| 流行节奏控'
            }
          ]
        },
        {
          title: '专区',
          class: 'video',
          songs: [
            {
              play: '7442.2万',
              imgurl: 'https://y.gtimg.cn/music/common/upload/category_area/4522616.jpg?max_age=2592000',
              title: '欧美| 流行节奏控'
            },
            {
              play: '7442.2万',
              imgurl: 'https://qpic.y.qq.com/music_cover/xiabfMZAmQ0PYUzgCvOicArIoGLzqL3n6q3fDiawWkhTTVWgGNM52HBNA/300?n=1',
              title: '欧美| 流行节奏控'
            }
          ]
        }


      ],

    }
  },
  methods: {
    // 判断input框内有无数据
    Minputc(){
      if(this.mfocus){
        if(this.$data.Minputvalue  )return true
      }
      return false
    },
    // 清除input框内数据
    Mclear() {
      this.$data.Minputvalue = '';
      this.$refs.Minput.focus();
    },
    // input 取消焦点时
    Monblur() {
      if (!this.$data.Minputvalue) {
        this.$data.mfocus = false
      }
    },
    // input 按下enter后加入缓存
    Menter(value) {
      this.datalist.unshift(value)
    },
    // 搜索历史
    mhashistory() {
      if (this.$data.mclick) {
        if (this.$data.datalist != '') {
          return true
        }
      }
      return false
    },
    // 清除历史
    Hclear() {
      localStorage.clear();
      this.datalist = [];
    },
    // 发送请求 ...跨域了
    postsongs() {
      let that = this;
      that.$axios({
        methods: 'POST',
        url: 'https://u.y.qq.com/cgi-bin/musicu.fcg?_webcgikey=GetAll&_=1674561669481',
        data: {
          '_webcgikey': 'GetAll'

        }

      }).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log('err', err)
      })
    },
    // 让高度自适应
    muiheight() {
      let height = 0;
      let that = this;
      setTimeout(() => {
        for (let i = 0; i < that.list.length; i++) {
          let ref = eval('that.$refs.mui' + i)[0];
          eval('that.$refs.mi' + i)[0].style.height = ref.offsetHeight + 'px';
        }
      }, 0)
    },
    // rem初始化
    setRem () { 
      // 基准大小
      const baseSize = 100;
      // 设置 rem 函数
      // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
      const scale = document.documentElement.clientWidth / 320;
      // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + "px";
    },
  },
  watch: {
    datalist(value) {
      localStorage.setItem('datalist', JSON.stringify(value))
    },
    $route(){
      if(this.$route.query.tab == 'recommend')
      {
        this.muiheight();
        setTimeout(()=>{
          mui('.mui_scroll__bd').scroll({
            scrollY: false, //是否竖向滚动
            scrollX: true, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: false, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
          });
        },0)
     
      }
    },
  },
  
  mounted() {
    // 
    console.log('已挂载')
    mui.init();
    mui('.mui_scroll__bd').scroll({

      scrollY: false, //是否竖向滚动
      scrollX: true, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: false, //是否显示滚动条
      deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
      bounce: true //是否启用回弹

    });
    this.muiheight();
    this.setRem();
    let that = this;
    window.onresize = ()=>{
      that.muiheight();
      that.setRem();
    }
    // this.postsongs();
  },

}
</script>
<!-- 推荐 -->
<!-- 搜索 -->


<!-- mui  -->


