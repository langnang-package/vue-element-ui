<template>
  <div class="jumbotron">
    <h1>
      Jumbotron
      <small>巨幕</small>
    </h1>
    <h2>Jumbotron Attribute</h2>
    <el-table :data="jumbotronAttributeTableData">
      <el-table-column prop="param" label="参数"></el-table-column>
      <el-table-column prop="description" label="说明"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="options" label="可选值">
        <template slot-scope="{row}">{{row.options || '—'}}</template>
      </el-table-column>
      <el-table-column prop="default" label="默认值">
        <template slot-scope="{row}">{{row.default || '—'}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      jumbotronAttributeTableData: [
        {
          param: "title",
          description: "标题",
          type: "string"
        },
        {
          param: "description",
          description: "描述",
          type: "string"
        }
      ]
    }
  }
};
</script>
