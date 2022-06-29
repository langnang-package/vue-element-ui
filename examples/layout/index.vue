<template>
  <div id="app">
    <el-row :gutter="10">
      <el-col :span="6">
        <el-menu default-active="2" router>
          <el-menu-item index="jumbotron">
            <span slot="title">Jumbotron 巨幕</span>
          </el-menu-item>
          <el-menu-item index="dynamic-select">
            <span slot="title">dynamic-select 巨幕</span>
          </el-menu-item>
          <el-menu-item index="route-menu">
            <span slot="title">route-menu 巨幕</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
