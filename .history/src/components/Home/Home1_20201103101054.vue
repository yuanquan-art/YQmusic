<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <img src="../../assets/images/logo_01.png" alt="" />
          </el-col>
          <el-col :span="8">
            <span class="el-icon-arrow-left zuojiantou"></span>
            <span class="el-icon-arrow-right youjiantou"></span>
            <!-- 搜索框 -->
            <el-input placeholder="搜索" prefix-icon="el-icon-search">
            </el-input>
            <span class="maike">
              <span class="iconfont iconziyuan"></span>
            </span>
          </el-col>
          <!-- 顶栏右部 -->
          <el-col :span="9" class="top-right">
            <el-row class="top-zujian">
              <el-col :span="1">
                <i class="iconfont iconiconset01100"></i>
              </el-col>
              <el-col class="user-unlogin" :span="2">
                <span class="unlogin">
                  <i>未登录</i>
                  <i class="iconfont iconxiajiantou"></i>
                </span>
              </el-col>
              <i class="kaivip">开通VIP</i>
              <el-col :span="5" class="tubiao">
                <i class="iconfont iconicon-"></i>
                <i class="iconfont iconzhuti"></i>
                <i class="iconfont iconyouxiang"></i>
                <i class="iconfont iconzuixiaohua"></i>
                <i class="iconfont iconjianhao"></i>
                <i class="iconfont iconfangkuang"></i>
                <i class="iconfont iconcancel-1-copy"></i>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-header {
  width: 100%;
  height: 75px;
  background-color: #ec4141;
  position: relative;
}
</style>
