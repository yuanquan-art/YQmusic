<template>
  <div>
    <div class="home">
      <el-row>
        <el-col :span="4">
          <img src="../../assets/images/logo_01.png" alt="" />
        </el-col>
        <el-col :span="8">
          <span class="el-icon-arrow-left zuojiantou"></span>
          <span class="el-icon-arrow-right youjiantou"></span>
          <!-- 搜索框 -->
          <el-input
            placeholder="搜索"
            prefix-icon="el-icon-search"
          >
          </el-input>
          <span class="maike">
              <span class="iconfont iconziyuan"></span>
          </span>
        </el-col>
        <!-- 顶栏右部 -->
         <el-col :span="8" class="top-right" >
            <el-row class="top-zujian">
                <span class="user-unlogin">
                      <i class="iconfont iconiconset01100"></i>
                </span>
             
            </el-row>
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
  position: relative;
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
.maike{
    margin-top: 25px;
    margin-left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e63f3f;
    color: #f2b9b9;
    line-height: 40px;
    text-align: center;
  }
  .top-right{
      position: absolute;
      top: 0;
      right: 0;
  }
.top-zujian{
    line-height: 75px;
}
.iconfont,.iconiconset01100{
    font-size: 35px;
    background-color: #e0e0e0;
    color: #f2f1f1;
}
.user-login{
    width: 35px;
    height: 35px;
}
</style>
