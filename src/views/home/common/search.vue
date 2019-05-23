<template>
  <div class="search-warp">
    <h3>筛选</h3>

    <div class="flex-warp search-content">
      <div class="select-warp if-warp">
        <span class="label">下拉框筛选:</span>
        <div class="value">
          <el-select v-model="selectValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>

      <close-warp :show="show1" @close="close('关键字筛选')">
        <div class="input-warp if-warp">
          <span class="label">关键字筛选:</span>
          <div class="value">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </close-warp>

      <close-warp :show="show2" @close="close('下拉框筛选')">
        <div class="select-warp if-warp">
          <span class="label">下拉框筛选:</span>
          <div class="value">
            <el-select v-model="selectValue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </close-warp>

      <close-warp :show="show3" @close="close('日期选择')">
        <div class="date-warp if-warp">
          <span class="label">日期选择:</span>
          <div class="value">
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </div>
      </close-warp>
    </div>

    <div class="search-bottom">
      <div class="filter-warp">
        <el-button type="primary" @click="handleQueryContentShow">
          筛选项
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </el-button>

        <div class="query-content" v-show="queryContentShow">
          <el-checkbox-group v-model="showTypts">
            <el-checkbox label="关键字筛选"></el-checkbox>
            <el-checkbox label="下拉框筛选"></el-checkbox>
            <el-checkbox label="日期选择"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <el-button type="primary" @click="handleQuery">查询</el-button>
    </div>
  </div>
</template>

<script>
import closeWarp from '../components/close-warp.vue'

export default {
  data () {
    return {
      input: '',
      options: [{
        value: '1',
        label: 'a'
      }, {
        value: '2',
        label: 'b'
      }, {
        value: '3',
        label: 'c'
      }, {
        value: '4',
        label: 'd'
      }, {
        value: '5',
        label: 'e'
      }],
      selectValue: '',
      date: '',
      queryContentShow: false, // 筛选框是否展示
      showTypts: []
    }
  },
  computed: {
    // 筛选框 是否展示变量
    show1 () {
      return this.showTypts.includes('关键字筛选')
    },
    show2 () {
      return this.showTypts.includes('下拉框筛选')
    },
    show3 () {
      return this.showTypts.includes('日期选择')
    },
  },
  methods: {
    // 筛选内容 展示
    handleQueryContentShow () {
      this.queryContentShow = !this.queryContentShow
    },
    // 筛选框 关闭事件
    close (value) {
      let _value = this.showTypts.indexOf(value)
      if (_value === -1) return
      this.showTypts.splice(_value, 1)
    },
    // 查询事件 
    handleQuery () {
      // 筛选条件  建议 默认都为空 
      let options = {
        id: '',

      }
      this.$emit('query', options)
    }
  },
  watch: {

  },
  components: { closeWarp }
}
</script>

<style scoped lang='scss' type='text/css'>
.search-warp{
  background: #fff;
  padding: 20px;
  border:1px solid #dedede;
  .search-content{
    margin-top: 20px;
    min-height: 120px;
    // margin-top: -20px;
  }
  .flex-warp{
    display: flex;
    flex-wrap: wrap;
    .if-warp{
      height: 40px;
      display: flex;
      max-width: 500px;
      align-items: center;
      margin-right: 30px;
      margin-top: 20px;
    }
    .label{
      max-width: 200px;
      flex-shrink: 0;
      padding-right: 10px;
    }
    .value{
      width: 100%;
    }
  }

  .search-bottom{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-button{
      width: 140px;
      &:first-child{
        display: flex;
        margin-right: 20px;
        height: 40px;
        padding: 0;
        align-items: center;
        justify-content: center;
      }
      .el-icon-caret-bottom{
        font-size: 20px;
      }
    }
    
    .filter-warp{
      width: 140px;
      height: 40px;
      position: relative;
      margin-right: 20px;
      // .el-bottom{
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 140px;
      //   height: 40px;
      //   margin-left: 0!important;
      // }
      .query-content{
        position: absolute;
        height: 150px;
        overflow: hidden;
        width: 260px;
        background: #fff;
        border:1px solid #dedede;
        padding: 13px;
        border-radius: 3px;
        z-index: 1;
        top: 50px;
        left: 0;
      }
    }
  }
}
</style>
