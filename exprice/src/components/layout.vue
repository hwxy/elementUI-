<template>
  <div>
       <el-row :gutter="20">  
         <!-- gutter是给el-col增加了padding -->
         <el-col :span='12'><div class="grid-content bg-purple">1</div></el-col>
         <el-col :span='12'><div class="grid-content bg-purple">2</div></el-col>
       </el-row>
       <el-row :gutter='20'>
         <el-col :span='6' :offset='6'><div class="grid-content bg-purple">1</div></el-col>
         <el-col :span='6' ><div class="grid-content bg-purple">2</div></el-col>
       </el-row>
         <el-row  type='flex' justify="space-between">
         <el-col :span='6' ><div class="grid-content bg-purple">1</div></el-col>
         <el-col :span='6' ><div class="grid-content bg-purple">2</div></el-col>
       </el-row>
 <el-row :gutter="10" :tag='"span"'>   
     <!-- tag是让el-row转化为什么样的标签 -->
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">2</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">4</div></el-col>
</el-row>
 <el-row :gutter="10" >   
    <!-- push是向右移，pull是向左移动,可以产生覆盖-->
      <el-col :span='6' :push='12'><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span='6'><div class="grid-content bg-purple-light">2</div></el-col>
</el-row>
  </div>
</template>
<script>
export default {};
</script>

<style scoped >
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
