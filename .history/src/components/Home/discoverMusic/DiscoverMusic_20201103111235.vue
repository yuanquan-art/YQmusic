<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="first" >个性推荐</el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five" >歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return {
            activeName: 'first'
        }
    }
};
</script>

<style lang="less" scoped></style>
