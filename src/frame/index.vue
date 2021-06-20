<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <!-- 侧边栏 -->
    <asise class="sidebar-container">
      <el-scrollbar wrap-class="scrollbar-wrapper">

        <el-menu
          background-color="transparent"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="0">
            <i class="el-icon-setting" />
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-document" />
            <span slot="title">关于我</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location" />
              <span>项目链</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu" />
            <span slot="title">图书馆</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-setting" />
            <span slot="title">更多</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </asise>
    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 面包屑 导航 -->
      <div class="bre-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- <div :class="{'fixed-header':fixedHeader}"> -->
      <!-- <navbar /> -->
      <tags-view v-if="needTagsView" />
      <!-- </div> -->
      <app-main />
    </div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import { AppMain, /* Navbar, Settings, Sidebar, */ TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    // Navbar,
    // RightPanel,
    // Settings,
    // Sidebar,
    TagsView
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style lang="stylus" scoped>
// stylus more see https://www.stylus-lang.cn/
// @import '~@/styles/mixin.styl'
// @import '~@/styles/variables.styl'
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  // side bar
  .sidebar-container {
    width: 210px;
    position: fixed;
    height: 100%;
    background-color: #304156;

    // 赶时间 实现再说
    ::v-deep .el-menu {
      .el-menu-item, span, .el-icon-location {
        color: #fff !important;
      }
    }
  }

  // 主体区域
  .main-container {
    margin-left: 210px;
    line-height: 50px;

    // 面包屑导航
    .bre-container {
      height: 50px;

      .el-breadcrumb {
        line-height: 50px;
        margin-left: 20px;
      }
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - $sideBarWidth);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }

  .mobile .fixed-header {
    width: 100%;
  }
}
</style>
