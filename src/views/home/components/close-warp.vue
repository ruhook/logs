<template>
  <div class="close-warp" v-show="show">
    <div class="close" @click="handleClose" v-if="needClose">
      <i class="el-icon-close"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    needClose: {   // 是否需要close
      type: Boolean,
      default: true
    },
    show: {   //  展示筛选项
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  },
}
</script>

<style scoped lang='scss' type='text/css'>
.close-warp{
  display: inline-block;
  height: auto;
  width: auto;
  position: relative;
  .close {
    position: absolute;
    top: 2px;
    right: 2px;
    padding: 3px;
    cursor: pointer;
    &:hover {
      background: #F56C6C;
      transition:  all 0.3s;
      color: #fff;
    }
    .el-icon-close{
      font-size: 20px;
    }
  }
}
</style>
