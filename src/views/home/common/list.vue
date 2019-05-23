<template>
  <div class="list-warp">
    <div class="list-top">
      <h3>日志列表</h3>
      <el-button type="danger" @click="deleteAll">批量删除</el-button>
    </div>
    <el-table
      class="list"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column
        v-for="(item ,index) in tableData"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        align="center"
      ></el-table-column>

      <el-table-column align="center" label="操作" width="300" class="emit">
        <template slot-scope="scope">
          <el-button type="primary" @click="toLink">详情</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  // props: {
  //   list: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  data () {
    return {
      tableData: [{
        label: 'logid',
        prop: 'logid',
        // width:'200'
      }, {
        label: '字段1',
        prop: 'data1',
        // width:'200'
      }, {
        label: '字段2',
        prop: 'data2',
        // width:'200'
      }, {
        label: '字段3',
        prop: 'data3',
        // width:'200'
      }, {
        label: '状态',
        prop: 'status',
        // width:'200'
      }, {
        label: '上传时间',
        prop: 'uploaddate',
        width: '230'
      }],
      list: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    deleteAll () {
      this.$confirm('此操作将批量删除日志信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    toLink () {
      this.$router.push(`/logs/1`)
    }
  },
}
</script>

<style scoped lang='scss' type='text/css'>
.list-warp{
  background: #fff;
  padding: 20px;
  border:1px solid #dedede;
  margin-top: 20px;
  .list-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list {
    .el-button {
      width: 120px;
    }
  }
}
</style>
