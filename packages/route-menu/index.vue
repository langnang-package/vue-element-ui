<template>
  <el-menu v-bind="$attrs" router>
    <ElRouteMenuItem v-for="item in data" :key="item.path" v-bind="item" />
  </el-menu>
</template>
<script>
import ElRouteMenuItem from './item.vue'
export default {
  name: 'ElRouteMenu',
  components: {
    ElRouteMenuItem
  },
  props: {
    // 路由配置
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  date() {
    return {}
  },
  computed: {
    routeList() {
      return this.data.map(item => {
        return {
          ...item,
          ...item.meta,
          path: (item.path.charAt(0) === '/' ? '' : '/') + item.path
        }
      })
    }
  }
}
</script>
