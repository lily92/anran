<template>
  <div id="header">
    <!--star  nav-btn -->
    <div
      class="nav-btn nav-btn-fix"
      v-on:click="showMenu(index,$event)"
      v-if="showMenuFixBtn && nowIndex>0"
    >
      <span></span>
    </div>
    <!-- end nav-btn -->
    <div
      class="nav-btn nav-btn-fix nav-btn-close"
      v-on:click="showMenu(index,$event,'close')"
      v-if="showMenuFixBtnColse"
    >
      <span></span>
    </div>

    <!--star header -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <header class="header flex-item" v-if="showHeader" id="header">
        <div class="logo">
          <a href>
            <img src="../images/logo.png" alt srcset>
          </a>
        </div>
        <div class="header-right flex-item">
          <nav>
            <ul class="flex-item">
              <li
                v-for="(item,index) in navList"
                v-bind:key="item.id"
                @mouseover="hoverIndex = index"
                @mouseout="hoverIndex = -1"
                :class="{'active':index==hoverIndex}"
                
              >
                <a href>{{item.menu}}</a>
                <transition
                  name="custom-classes-transition"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <dl>
                    <dd v-for="(subitem) in item.subMenu" v-bind:key="subitem.id">
                      <a href>{{subitem.name}}</a>
                    </dd>
                  </dl>
                </transition>
              </li>
            </ul>
          </nav>
          <div class="search" @click="showSearch($event,true)">
            <img src="../images/search.png" alt srcset>
          </div>
          <div class="nav-btn" id="nav_btn" v-on:click="showMenu(index,$event)">
            <span></span>
          </div>
        </div>
      </header>
    </transition>
   <!--end header -->

    <!--star search -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutUp"
    >
      <div class="search-container flex-item" v-if="showSearchForm">
        <div class="search-close" v-on:click="showSearch($event,false)">×</div>
        <input type="text" class="search-txt" placeholder="请输入想要搜索的关键词">
        <input type="button" value="搜索" class="search-btn">
      </div>
    </transition>
    <!--end  search -->

<!-- star nav-fix -->
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
    <div class="nav-fix" v-if="showMenuFix">
      <div class="container">
        <p class="nav-fix-logo hidden-xs">
          <a href>
            <img src="../images/logo1.png" alt srcset>
          </a>
        </p>
        <div class="col-sm-12 flex-item container">
          <div class="col-sm-7 flex-item nav-all col-xs-12">
            <dl class="col-sm-4 col-xs-12" v-for="(item,index) in navList " v-bind:key="item.id" :class="{'active':index==showNavIndex}" >
              <dt>
                <div class="pull-right phone-more visible-xs" @click="showPhoneMenu(index,$event)">
                  <span v-if="showNavIndex ==index">-</span>
                  <span v-if="showNavIndex !=index">+</span>
                </div>
                <span>{{item.menu}}</span>
              </dt> 
              <div  class="dd-list" >
                <dd v-for="(subitem,i) in item.subMenu " v-bind:key="i">
                  <a href>{{subitem.name}}</a>
                </dd>
              </div>
              
            </dl>
          </div>
          <div class="col-sm-5 hidden-xs">
            <div class="text-center">
              <img src="../images/logo2.png" alt srcset>
              <p>&nbsp;</p>
              <p class="nav-p">
                让安然产品
                <br>走进世界每一个家庭
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </transition>
<!-- end nav-fix -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "headers",
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
    showPhoneMenu: function(index, e) {
      this.showNavIndex = index;
      var el = e;
    }
  },
  data() {
    return {
      showMenuFixBtn:true,
      showLoading: true,
      hoverIndex: -1,
      showHeader: true,
      nowIndex: 0,
      showNavIndex: -1,
      showMenuFix: false,
      showSearchForm: false,
      navList: [
        {
          menu: "关于安然",
          id: 1,
          subMenu: [
            {
              id: 1,
              name: "公司简介"
            },
            {
              id: 2,
              name: "董事长寄语"
            },
            {
              id: 2,
              name: "技术成就"
            },
            {
              id: 2,
              name: "荣誉展馆"
            },
            {
              id: 2,
              name: "联系我们"
            },
            {
              id: 2,
              name: "营业守则"
            }
          ]
        },
        {
          menu: "资讯聚焦",
          id: 2,
          subMenu: [
            {
              id: 1,
              name: "企业资讯"
            },
            {
              id: 2,
              name: "媒体报道"
            },
            {
              id: 2,
              name: "安然播库"
            },
            {
              id: 2,
              name: "安然旅游记"
            },
            {
              id: 2,
              name: "电子出版物"
            }
          ]
        },
        {
          menu: "产品展馆",
          id: 3,
          subMenu: [
            {
              id: 1,
              name: "功能纺织类"
            },
            {
              id: 2,
              name: "营养保健类"
            },
            {
              id: 2,
              name: "养颜护肤类"
            },
            {
              id: 2,
              name: "家居生活类"
            },
            {
              id: 2,
              name: "热点促销"
            }
          ]
        },
        {
          menu: "社会责任",
          id: 4,
          subMenu: [
            {
              id: 1,
              name: "爱心基金会"
            },
            {
              id: 2,
              name: "志愿者联盟"
            }
          ]
        },
        {
          menu: "安然文化",
          id: 5,
          subMenu: [
            {
              id: 1,
              name: "安然事业"
            },
            {
              id: 2,
              name: "企业文化"
            },
            {
              id: 1,
              name: "传统文化"
            },
            {
              id: 2,
              name: "安然之歌"
            }
          ]
        },
        {
          menu: "下载中心",
          id: 6,

          subMenu: [
            {
              id: 1,
              name: "掌上安然"
            },
            {
              id: 2,
              name: "物料下载"
            }
          ]
        }
      ],
      showIndex: null,
    };
  },
  mounted() {
  }
};
</script>

