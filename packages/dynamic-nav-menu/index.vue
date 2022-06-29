<template>
  <el-menu v-bind="$attrs" router>
    <ElDynamicNavMenuItem v-for="item in data" :key="item.path" v-bind="item" />
  </el-menu>
</template>
<script>
import ElDynamicNavMenuItem from './item.vue'
export default {
  name: 'ElDynamicNavMenu',
  components: {
    ElDynamicNavMenuItem
  },
  props: {
    // 菜单配置
    data: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object,
      default: () => ({ value: 'value', label: 'label' })
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
