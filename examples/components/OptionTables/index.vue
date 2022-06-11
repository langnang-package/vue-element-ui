<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{description}}</p>
    <slot></slot>
    <div>
      <h2>{{$route.meta.name.substring(2)}} Attribute</h2>
      <el-table :data="Object.keys($route.meta.props).map(name => ({
          name,
          ...this.$route.meta.props[name]
        }))">
        <el-table-column prop="name" label="参数"></el-table-column>
        <el-table-column prop="_description" label="说明"></el-table-column>
        <el-table-column prop="type" label="类型">
          <template slot-scope="{row}">{{row.type.toString()|funcName}}</template>
        </el-table-column>
        <el-table-column prop="options" label="可选值">
          <template slot-scope="{row}">{{row.options || '—'}}</template>
        </el-table-column>
        <el-table-column prop="default" label="默认值">
          <template slot-scope="{row}">{{row.default || '—'}}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionTables",
  props: ['title', 'description'],
  created() {
  },
  filters: {
    funcName: val => val.substring(9, val.indexOf('('))
  }
}
</script>

<style>
</style>