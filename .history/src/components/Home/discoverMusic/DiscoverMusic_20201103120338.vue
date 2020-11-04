<template>
  <div>
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">个性推荐</el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
    <!-- 轮播图 -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  created(){
    this.getBanner();
  },
  methods: {
  async getBanner(){
    const res =await this.$axios.get('/banner?type=0');
    console.log(res)
  }
  }
};
</script>

<style lang="less" scoped></style>
