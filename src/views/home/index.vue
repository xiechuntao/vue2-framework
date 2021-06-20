<template>
  <div class="home-container">
    <!-- <h1>{{ msg2 }}</h1> -->
    <a
      v-for="(item, i) in paneItems"
      :key="i"
      class="pane"
      :href="item.projectUrl"
      target="_blank"
    >
      <div class="title">
        <div class="icon-img">
          <el-avatar
            fit="fill"
            :src="item.imgSrc"
          />
          {{ item.name }}
        </div>
      </div>
      <div class="content">
        {{ item.desc }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      msg2: 'test',
      paneItems: [
        {
          name: 'vue3-gallery',
          projectUrl: 'http://www.ctsky.xyz:81',
          imgSrc: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png',
          desc: 'vue3的练手项目，常用demo集合。'
        },
        {
          name: 'react17-xct-word',
          projectUrl: 'http://www.ctsky.xyz:82',
          imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1658603858,686533857&fm=26&gp=0.jpg',
          desc: 'react17的练手项目，展示大屏。'
        }
      ]
    }
  },
  methods: {
    go() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home-container {
  width: 100%;
  height: 100%;
  padding: 20px;

  .pane {
    float: left;
    margin-right: 10px;
    border: 1px solid #EBEEF5;
    padding: 10px;
    width: 320px;
    height: 160px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 10%);
    border-radius: 4px;
    text-decoration: none;
    color: #000;

  }
}
</style>
