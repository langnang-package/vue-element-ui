<template>
  <el-card class="el-jumbotron" shadow="never">
    <h1 v-if="title">{{title}}</h1>
    <p v-if="description">{{description}}</p>
    <slot />
  </el-card>
</template>

<script>
export default {
  // 巨幕
  name: "ElJumbotron",
  props: {
    // 地址
    route: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    // 描述
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  text-align: center;
}
</style>
