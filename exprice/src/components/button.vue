<template>
  <div>
      <div> 
          <!-- button样式   -->
      <el-button type='primary'>点我</el-button> 
      <el-button type='success'>点我</el-button> 
      <el-button type='info'>点我</el-button> 
      <el-button type='warn'>点我</el-button> 
      <el-button type='danger'>点我</el-button> 
      </div>
      <div> 
          <!-- button禁用   -->
      <el-button type='primary'  disabled>点我</el-button> 
      </div>
      <div> 
          <!-- button大小   -->
      <el-button type='primary'  size="larger">点我</el-button> 
      </div>
       <div> 
          <!-- button图标  -->
      <el-button type='primary'  icon="el-icon-edit">点我</el-button> 
      </div>
       <div> 
          <!-- button按钮组 -->
       <el-button-group>
      <el-button type='primary' >点</el-button> 
      <el-button type='success' >我</el-button> 
      <el-button type='warn'    >啊</el-button> 
      </el-button-group>   
      </div>
       <div> 
        <!-- loading -->
       <el-button :loading='true'></el-button>
      </div>
  </div>    
</template>
<script>
export default {
    
}
</script>
<style>

</style>

