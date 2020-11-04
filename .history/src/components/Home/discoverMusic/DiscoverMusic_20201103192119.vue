<template>
  <div>
    <!-- Tabs标签切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
        <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in bannerlist" :key="item.encodeId">
            <img :src="item.imageUrl+'?param=550y190'" />
          </el-carousel-item>
        </el-carousel>
        <!-- 推荐歌单 -->
        <span class="tuijianMusic">推荐歌单</span>
        <span class="el-icon-arrow-right"></span>
        <div class="musicList">
             <img src="../../../assets/images/meirituijian_03.png" alt="">
             <span>每日歌曲推荐</span>
        </div>
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
      // 推荐歌单
      tuijianMusicList: []
    };
  },
  created() {
    this.getBanner();
    this.getTuijianMusicList();
  },
  methods: {
    //获取轮播图
    async getBanner() {
      const { data: res } = await this.$axios.get("/banner?type=0");
      this.bannerlist = res.banners;
    },
    // 获取推荐歌单
    async getTuijianMusicList(){
        const {data:res} = await this.$axios.get('/personalized');
       this.tuijianMusicList = res.result;
       console.log(this.tuijianMusicList)
    }
  },
};
</script>

<style lang="less" scoped>
.tuijianMusic {
  font-weight: 900;
  font-size: 20px;
  color: #373737;
}
.el-icon-arrow-right{
  width: 20px;
  font-size: 20px;
  margin-left: 5px;
}
.musicList{
  width: 260px;
  height: 310px;
  background-color: #ccc;
  margin-top: 5px;
}
</style>
