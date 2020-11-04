<template>
  <div>
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
        <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in bannerlist" :key="item.encodeId">
            <img :src="item.imageUrl" />
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
      <el-tab-pane label="歌手" name="five">歌手</el-tab-pane>
      <el-tab-pane label="最新音乐" name="six">最新音乐</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Tabs激活默认
      activeName: "first",
      //bannner
      bannerlist: [],
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      const { data: res } = await this.$axios.get("/banner?type=0");
      this.bannerlist = res.banners;
      console.log(this.bannerlist);
    },
  },
};
</script>

<style lang="less" scoped></style>
