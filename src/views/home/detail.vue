<template>
  <div class="detail-warp">
    <div class="detail-top">
      <h3>日志详情</h3>
      <el-button type="primary" @click="operation">批量操作</el-button>
    </div>

    <el-table
      class="list"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>

      <el-table-column
        v-for="(item ,index) in tableData"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        align="center"
      ></el-table-column>

      <el-table-column align="center" label="状态" width="130" class="emit">
        <template slot-scope="scope">
          <el-select
            v-model="valueList[scope.row.index]"
            placeholder="请选择"
            @change="change(scope.row.index,$event)"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column label="操作人" prop="prop" align="center"></el-table-column>
    </el-table>

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
export default {
  data () {
    return {
      page: 3,
      valueList: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],   //  所有值的状态  
      multipleSelection: [],
      options2: [{
        value: '0',
        label: '通过'
      }, {
        value: '1',
        label: '不通过'
      }],
      list: [{ index: 0 }, { index: 1 }],
      tableData: [{
        label: '字段',
        prop: 'logid',
        // width:'200'
      }, {
        label: '字段说明',
        prop: 'data1',
        // width:'200'
      }, {
        label: '值',
        prop: 'data2',
        // width:'200'
      }, {
        label: '日志采集',
        prop: 'data3',
        // width:'200'
      }, {
        label: '上传时间',
        prop: 'status',
        // width:'200'
      }, {
        label: '验证方式',
        prop: 'uploaddate',
        width: '230'
      }],
    }
  },
  methods: {
    // 批量操作
    /**
     * multipleSelection  是选择的
     * valueList  是对应的index 的 状态值    每次加载页面需要重置 或者 映射
     * 
     * 提交的时候 multipleSelection 和  valueList 做映射关系
     */
    operation () {
      let options = this.multipleSelection.map(item => {
        return {
          index: `${item.index}被选择`,
          status: `${this.valueList[item.index] === '0' ? '通过' : '不通过'}`
        }
      })
      console.log(options)
    },
    change (index, value) {
      this.valueList[index] = value
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val;
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped lang='scss' type='text/css'>
.detail-warp{
  background: #fff;
  padding: 20px;
  border:1px solid #dedede;
  .detail-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 20px;
  }
  .block {
    text-align: center;
    margin: 15px 0;
  }
}
</style>
