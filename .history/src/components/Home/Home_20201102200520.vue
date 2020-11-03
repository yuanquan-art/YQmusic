<template>
  <div>
    <div class="home">
      <el-row>
        <el-col :span="4">
          <img src="../../assets/images/logo_01.png" alt="" />
        </el-col>
        <el-col :span="6">
          <span class="el-icon-arrow-left zuojiantou"></span>
          <span class="el-icon-arrow-right youjiantou"></span>
          <!-- 搜索框 -->
          <el-input
            placeholder="搜索"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
          <span class="iconfont "></span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 75px;
  background-color: #ec4141;
}
.zuojiantou {
  margin-top: 25px;
  margin-left: 35px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e63f3f;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.youjiantou {
  margin-top: 25px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e63f3f;
  color: #ed6565;
  line-height: 30px;
  text-align: center;
}
.el-input {
  width: 200px;
  height: 40px;
  margin-left: 30px;
}
.search {
  width: 17px;
  height: 20px;
  color: #f9d8d8;
  margin-left: 10px;
  line-height: 20px;
}
</style>
