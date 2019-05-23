<template>
  <div class="log-warp">
    <log-search @query="handleQuery"/>
    <log-list :list="list"/>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import LogSearch from './common/search'
import LogList from './common/list'
export default {
  data () {
    return {
      page: 3,
      list: []
    }
  },
  methods: {
    //query
    handleQuery (options) {
      // axios 
      console.log(options)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: { LogSearch, LogList }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.log-warp{
  .block {
    text-align: center;
    margin: 15px 0;
  }
}
</style>
