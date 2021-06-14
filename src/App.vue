<template>
  <el-container
    id="app"
    class="default-theme"
  >
    <el-header>Header
      <el-button @click="openPane">
        test
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <!-- tabs bar -->
        <!-- @tab-remove="removeTab" -->
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
        >
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :class="`tag-${index}`"
            :label="item.title"
            :name="item.name"
          >
            {{ item.content }}
            <div class="main-content">
              <!-- <HelloWorld /> -->
              <component :is="item.componentName" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      editableTabsValue: '',
      editableTabs: [{
        label: 'test',
        title: 'test2',
        name: '1',
        componentName: 'HelloWorld'
      }, {
        label: '2',
        title: '2',
        name: '2',
        componentName: 'HelloWorld'
      }]
    }
  },
  methods: {
    openPane() {
      this.editableTabs.push({
        label: this.editableTabs.length,
        title: this.editableTabs.length,
        name: this.editableTabs.length
      })
    }
    // removeTab(targetName) {
    //   const tabs = this.editableTabs
    //   let activeName = this.editableTabsValue
    //   if (activeName === targetName) {
    //     tabs.forEach((tab, index) => {
    //       if (tab.name === targetName) {
    //         const nextTab = tabs[index + 1] || tabs[index - 1]
    //         if (nextTab) {
    //           activeName = nextTab.name
    //         }
    //       }
    //     })
    //   }
    //   this.editableTabsValue = activeName
    //   this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  .el-header, .el-aside {
    background: #409EFF;
  }

  span {
    color: blue;
  }
}
</style>
