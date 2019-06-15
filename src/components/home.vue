<template>
  <div id="home">
    <!--star loading -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="gka-wrap" v-if="showLoading">
        <div id="gka"></div>
      </div>
    </transition>
     <!--end loading -->

  <!-- 页面滑动 -->
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <!-- banner -->
      <swiper :options="swiperOption" class="banner">
        <swiper-slide
          v-for="(slide, index) in swiperSlides"
          :key="index"
          :style="{'background': `url(${slide.src}) no-repeat center`,'background-size':'cover'}"
        ></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- end banner -->
    </div>
    <div class="section section-about">
      <img src="../images/About.png" alt class="about-p">
      <div class="section2-con container">
        <h3 class="h3-title text-center">
          <p class="title-cn">
            <span>关</span>于安然
          </p>
          <p class="title-eng">About Anran</p>
        </h3>
        <div class="text-center about-con">
          山东安然纳米实业发展有限公司
          <br>为安然集团旗下全资子公司，成立于2004年，
          <br>注册资金一亿零八百万港币，
          <br>是一家从事纳米技术研发、生产、销售、服务、教育于一体的民族直销企业。
          <br>公司使用有机纳米材料和无机纳米材料制备与应用技术，
          <br>/
          主要生产销售与纳米技术相关的纺织、化工、食品、轻工、电子五大类、十一大系列...
          <br>
        </div>
        <p>
          <a href class="btn btn-more">
            <span>了解更多</span>
          </a>
        </p>
      </div>
    </div>
    <div class="section">
      <div class="container flex-item leader-con">
        <div class="col-sm-5 hidden-xs">
          <img src="../images/liuzong.png" alt srcset>
        </div>
        <div class="col-sm-7 text-center">
          <div class="visible-xs">
            <p class="leader-title">董事长寄语</p>
            <p class="leader-title-eng">Chairman Message</p>
          </div>
          <p class="text-left">
            <img src="../images/yinhao2.png" alt srcset>
          </p>
          <p class="leader">
            亲爱的：
            <br>安然事业合作伙伴们！
          </p>
          <div class="leader-say">
            欢迎您成为安然事业大家庭中的一员感谢您对安然事业的信赖和支持！
            <br>山东安然纳米实业发展有限公司成立多年来，
            <br>在伙伴们的关心和支持下，公司得以不断地发展与壮大，
            <br>在此，我谨代表安然公司向奋战在市场一线的伙伴们表示诚挚地谢意，
            <br>感谢你们对安然公司的信赖和支持；
            <br>
          </div>
          <p class="text-right">
            <img src="../images/yinhao1.png" alt srcset>
          </p>
          <p>
            <a href class="btn btn-more btn-leader">
              <span>了解更多</span>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="section section-news">
      <div class="container">
        <h3 class="h3-title text-center">
          <p class="title-cn">
            <span>资</span>讯聚焦
          </p>
          <p class="title-eng">Information focus</p>
        </h3>
        <div class="col-sm-12 flex-item flex-news hidden-xs">
          <div class="col-sm-6">
            <!--new banner -->
            <swiper :options="swiperOption" class="new-banner">
              <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
                <div>
                  <img src="../images/new-img1.jpg" alt srcset class="w100">
                  <div class="newlist-con">
                    <p>2019.5.13</p>
                    <p class="newlist-title nowarp">十五载春华逐梦，无畏青春砥砺向前</p>
                    <p>万木葱茏，激情初夏，安然集团职工趣味运动会于5月31日在安……</p>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- end banner -->
          </div>
          <div class="col-sm-6 row ">
            <ul class="newlist">
              <li class>
                <a href class="scale">
                  <img src="../images/new-img2.jpg" alt srcset>
                  <p class="nowarp new-title">高手在民间——安然集团员工技能比...</p>
                  <div class="new-master flex-item">
                    <div>
                      <p class="link-icon">
                        <img src="../images/link.png" alt srcset>
                      </p>
                      <p>高手在明见的解放军发到空间看辅导费</p>
                    </div>
                  </div>
                </a>
              </li>
              <li class>
                <a href class="scale">
                  <img src="../images/new-img2.jpg" alt srcset>
                  <p class="nowarp new-title">高手在民间——安然集团员工技能比...</p>
                </a>
              </li>
              <li class>
                <a href class="scale">
                  <img src="../images/new-img2.jpg" alt srcset>
                  <p class="nowarp new-title">高手在民间——安然集团员工技能比...</p>
                </a>
              </li>
              <li class>
                <a href class="scale">
                  <img src="../images/new-img2.jpg" alt srcset>
                  <p class="nowarp new-title">高手在民间——安然集团员工技能比...</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 手机端新闻列表 -->
        <div class="newlist-phone visible-xs">
          <ul>
            <li>
              <a href class="flex-item">
                <div class="new-phone-img">
                  <img src="../images/new-img2.jpg" alt srcset>
                </div>
                <div class="new-phone-con">
                  <p class="new-date">2019.5.13</p>
                  <p class="nowarp">十五载春华逐梦，无畏青春砥砺向前</p>
                  <p class="line2 new-desc">万木葱茏，激情初夏，安然集团职工趣味运动会于5月31日在安然纳米集团文化产业园科研</p>
                </div>
              </a>
            </li>
            <li>
              <a href class="flex-item">
                <div class="new-phone-img">
                  <img src="../images/new-img2.jpg" alt srcset>
                </div>
                <div class="new-phone-con">
                  <p>2019.5.13</p>
                  <p class="nowarp">十五载春华逐梦，无畏青春砥砺向前</p>
                  <p class="line2">万木葱茏，激情初夏，安然集团职工趣味运动会于5月31日在安然纳米集团文化产业园科研</p>
                </div>
              </a>
            </li>
            <li>
              <a href class="flex-item">
                <div class="new-phone-img">
                  <img src="../images/new-img2.jpg" alt srcset>
                </div>
                <div class="new-phone-con">
                  <p>2019.5.13</p>
                  <p class="nowarp">十五载春华逐梦，无畏青春砥砺向前</p>
                  <p class="line2">万木葱茏，激情初夏，安然集团职工趣味运动会于5月31日在安然纳米集团文化产业园科研</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 手机端新闻列表 -->
      </div>
    </div>
    <div class="section section-type">
      <img src="../images/porduct.png" alt class="produdct-p hidden-xs">
      <div class="container">
        <h3 class="h3-title text-center">
          <p class="title-cn">
            <span>产</span>品展馆
          </p>
          <p class="title-eng">Information focus</p>
        </h3>
        <ul class="productlist">
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
          <li class="col-sm-4 col-xs-6 scale">
            <a href>
              <img src="../images/product-img.jpg" alt srcset>
              <p class="type-name">产品分类</p>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--star  联系我们 -->
    <div class="section section-contact">
      <img src="../images/contact.png" alt class="contact-p hidden-xs">
      <div class="container flex-item contact-flex">
        <div class="col-sm-5">
          <div class="margin-b40 scale">
            <img src="../images/contact-youlun.jpg" alt srcset>
          </div>
          <div class="scale">
            <img src="../images/contact-aixin.jpg" alt srcset>
          </div>
        </div>
        <div class="col-sm-7 contact-us">
          <h3>
            <p>联系我们</p>
            <p class="h3-eng">contact us</p>
          </h3>
          <div>
            <p>地址：山东威海经济技术开发区环山路610号</p>
            <p>电话：+86-631-3651999 3653999</p>
            <p>传真：+86-631-3636777</p>
            <p>邮编：264205</p>
            <p>网址：http://www.hongkonganran.com</p>
            <p>邮箱：info@hongkonganran.com</p>
          </div>
          <div class="code flex-item hidden-xs">
            <div class="code-img">
              <img src="../images/code-wechat.jpg" alt srcset>
              <p>官方微信</p>
            </div>
            <div class="code-img">
              <img src="../images/code-douyin.jpg" alt srcset>
              <p>官方微信</p>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right">
        <div class="flex-item copy-right-footer">
          <p class="hidden-xs">
            友情链接：
            <a href>铂丽斯国际大酒店</a> 丨
            <a href>安然大酒店</a>
          </p>
          <p>鲁ICP备17017149号-2 | 鲁公网安备37100402000241号</p>
        </div>
      </div>
    </div>
    <!--end  联系我们 -->
  </full-page>
  <!-- end 页面滑动 -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  methods: {
    showMenu: function(index, event, isshow) {
      var el = event.currentTarget;
      console.log(event);
      this.showMenuFix = true;
      this.showMenuFixBtn = false;
      this.showMenuFixBtnColse = true;
      if (isshow == "close") {
        this.showMenuFix = false;
        this.showMenuFixBtnColse = false;
        if (this.nowIndex != 0 || this.showMenuFixBtnColse == false) {
          this.showMenuFixBtn = true;
        }
      }
    },
    showSearch: function(event, boolean) {
      var el = event.currentTarget;
      console.log(boolean);
      if (boolean) {
        this.showSearchForm = true;
      } else {
        this.showSearchForm = false;
      }
    },
    afterLoad: function(origin, destination, direction) {
      var _this = this;
      console.log(destination.index);
      _this.nowIndex = destination.index;
      if (destination.index == 0) {
        _this.showHeader = true;
        _this.showMenuFixBtn = false;
      } else {
        _this.showHeader = false;
        _this.showMenuFixBtn = true;
        if (_this.showMenuFixBtnColse) {
          _this.showMenuFixBtn = false;
        }
      }
      console.log('now-index:',_this.nowIndex);
    },
    showPhoneMenu: function(index, e) {
      this.showNavIndex = index;
      var el = e;
    },
    preloadImage(names, cb, prefix) {
      window.gkaCache = window.gkaCache || [];
      var n = 0,
        img,
        imgs = {};
      names.forEach(function(name) {
        img = new Image();
        window.gkaCache.push(img);
        img.onload = (function(name, img) {
          return function() {
            imgs[name] = img;
            ++n === names.length && cb && cb(imgs);
          };
        })(name, img);
        // img.src = (prefix || '') + name;
        img.src = require("../images/sprites.png");
      });
    },

    isOver() {
      axios.get("/act/essay_question/start").then(res => {
        let resData = res.data;
        if (resData.code == -2) {
          this.code = -2;
        } else {
          this.code = resData.code;
        }
      });
    }
  },
  data() {
    return {
     
      showLoading: true,
      showHeader: true,
      showNavIndex: -1,
      options: {
        menu: "#myMenu",
        sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#008bb8"],
        anchors: ["index", "about", "leader", "news", "products", "contact"],
        navigationTooltips: [
          "首页",
          "关于安然",
          "董事长寄语",
          "咨询报道",
          "产品展馆",
          "联系我们"
        ],
        fixedElements: '#header, .footer',
        css3: true,
        scrollingSpeed: 1000,
        navigation: true,
        slidesNavigation: true,
        responsiveHeight: 330,
        afterLoad: this.afterLoad
      },
      showMenuFix: false,
      showSearchForm: false,
      showIndex: null,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [
        {
          src: require("../images/index-banner.jpg")
        },
        {
          src: require("../images/index-banner.jpg")
        },
        {
          src: require("../images/index-banner.jpg")
        },
        {
          src: require("../images/index-banner.jpg")
        }
      ]
    };
  },
  mounted() {
    this.preloadImage(
      ["sprites.png"],
      function() {
        document.getElementById("gka").className += " animation";
      },
      "../images/"
    );
    setInterval(() => {
      if (this.swiperSlides.length < 4) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);

    setTimeout(() => {
      this.showLoading = false;
    }, 3000);
  }
};
</script>


<style scoped  lang="scss">
$colorb: #3cafd6;
@keyframes zoomIn {
  from {
    -webkit-transform: scale3d(0.95, 0.95, 0.95);
    transform: scale3d(0.95, 0.95, 0.95);
  }

  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.gka-wrap {
  width: 211px;
  height: 211px;
}

.animation {
  width: 211px;
  height: 211px;
  background-image: url("../images/sprites.png");
  background-size: 4431px 211px;
  background-repeat: no-repeat;
  animation-name: keyframes-img;
  animation-duration: 3s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: steps(1);
}

@keyframes keyframes-img {
  0% {
    width: 211px;
    height: 211px;
    background-image: url("../images/sprites.png");
    background-size: 4431px 211px;
  }

  4.55% {
    background-position: -211px 0px;
  }

  9.09% {
    background-position: -422px 0px;
  }

  13.64% {
    background-position: -633px 0px;
  }

  18.18% {
    background-position: -844px 0px;
  }

  22.73% {
    background-position: -1055px 0px;
  }

  27.27% {
    background-position: -1266px 0px;
  }

  31.82% {
    background-position: -1477px 0px;
  }

  40.91% {
    background-position: -1688px 0px;
  }

  45.45% {
    background-position: -1899px 0px;
  }

  50.00% {
    background-position: -2110px 0px;
  }

  54.55% {
    background-position: -2321px 0px;
  }

  59.09% {
    background-position: -2532px 0px;
  }

  63.64% {
    background-position: -2743px 0px;
  }

  68.18% {
    background-position: -2954px 0px;
  }

  72.73% {
    background-position: -3165px 0px;
  }

  77.27% {
    background-position: -3376px 0px;
  }

  81.82% {
    background-position: -3587px 0px;
  }

  86.36% {
    background-position: -3798px 0px;
  }

  90.91% {
    background-position: -4009px 0px;
  }

  95.45%,
  100% {
    background-position: -4220px 0px;
  }
}

#fullpage {
  width: 100%;
}

.section {
  position: relative;
  transform: scale(0.95);
  transition: 0.5s linear all;
}
.section.active {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
  animation-duration: 0.5s;
  transition: 0.5s linear all;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}
.banner {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
// .swiper-slide {
//   width: 100% !important;
// }
.section-about {
  background: url(../images/about-bg.png) no-repeat center;
  background-size: cover;
}
.about-p {
  position: absolute;
  right: 40px;
  top: 40px;
}

.about-con {
  padding: 40px 0;
}
.leader {
  font-size: 21px;
  color: #2082a9;
}
.leader-say {
  padding: 20px 0;
}
.btn-leader {
  width: 280px;
  height: 45px;
  line-height: 45px;
}
.btn-leader::after {
  top: 21px;
}
.newlist {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  li {
    overflow: hidden;
    width: 50%;
    padding: 0 10px;
  }
  li a {
    position: relative;
    display: block;
  }
  li:hover .new-master {
    bottom: 0;
    transition: 0.5s linear all;
  }
  li:hover .link-icon {
    top: 10%;
    transition: 0.5s linear all;
  }
}
.new-master {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -100%;
  background: rgba(31, 131, 164, 0.7);
  text-align: center;
  color: #fff;
  padding: 0 40px;
  font-size: 12px;
  line-height: 22px;
  padding-top: 35px;
}
.link-icon {
  position: absolute;
  top: -120%;
  left: 50%;
  transform: translateX(-50%);
}
.new-title {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 35px;
  line-height: 35px;
  background: rgba(31, 131, 164, 0.7);
  color: #fff;
  padding: 0 10px;
}
.newlist-con {
  background: #008bb8;
  line-height: 25px;
  color: #e5e5e5;
  padding: 5px;
  font-size: 14px;
}
.newlist-title {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
.newlist-phone {
  padding-top: 40px;
  li {
    display: flex;
    background: #fff;
    margin-bottom: 15px;
  }
  .new-phone-img {
    width: 35%;
  }
  .new-phone-con {
    width: 65%;
    background: #fff;
    color: #333;
    line-height: 20px;
    padding: 5px;
  }
  .new-date {
    color: #d9d9d9;
  }
  .new-desc {
    color: #666;
  }
}
.flex-news .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 90px;
  text-align: right;
  padding-right: 30px;
}
.flex-news {
  align-items: inherit;
  padding: 40px 0;
}
.section-news {
  background: url(../images/new-bg.jpg) no-repeat center;
  background-size: cover;
}
.productlist {
  padding: 40px 0;
  li {
    margin-bottom: 40px;
  }
  li p {
    line-height: 40px;
    text-align: center;
  }
  a {
    color: #333;
    display: block;
    overflow: hidden;
  }
  .type-name {
    background: #fff;
    position: relative;
  }
  .type-name::after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background: $colorb;
    content: "";
    width: 0;
    transition: 0.5s linear all;
  }
  li:hover .type-name::after {
    width: 100%;
    transition: 0.5s linear all;
  }
  li:hover img {
    transform: scale(1.1);
    transition: 0.5s linear all;
  }
}
.section-type {
  background: url(../images/product-bg.jpg) repeat-x;
}
.produdct-p {
  position: absolute;
  right: 40px;
  top: 40px;
}
.section {
  position: relative;
}
.section-contact {
  background: url(../images/anran-contact.png) no-repeat right center;
}
.contact-img:hover img {
  transform: scale(1.1);
  transition: 0.5s linear all;
}
.contact-us {
  color: #fff;
  align-content: space-between;
  display: flex;
  flex-wrap: wrap;
  h3 {
    font-size: 30px;
    font-weight: normal;
    width: 100%;
  }
  .h3-eng {
    color: #d6d6d6;
    font-size: 19px;
    text-transform: uppercase;
    position: relative;
  }
  .h3-eng:after {
    display: block;
    content: "";
    width: 30px;
    height: 2px;
    background: #fff;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
}
.code {
  text-align: center;
}
.code-img {
  margin-right: 30px;
}
.contact-flex {
  align-items: inherit;
  margin-bottom: 40px;
}
.contact-p {
  position: absolute;
  right: 40px;
  top: 40px;
}
.copy-right {
  background: #00779e;
  line-height: 40px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  a {
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
}
.copy-right-footer {
  justify-content: space-between;
  padding: 0 40px;
}
.gka-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #008bb8;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767px) {
  .productlist li {
    padding: 0 7px;
    margin-bottom: 14px;
  }
  .copy-right-footer {
    padding: 0 10px;
  }
  .contact-flex {
    flex-wrap: wrap-reverse;
  }
  .contact-us {
    line-height: 24px;
    h3 {
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>
