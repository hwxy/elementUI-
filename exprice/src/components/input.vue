<template>
   <div>
     <!-- 基本用法 -->
     <el-row :gutter='20'>
     <el-col :span='8'>
     <el-input v-model="value" placeholder='请输入'></el-input>  
     <!-- 可以清空 -->
    </el-col>
    <el-col  :span='8' ref='input1'>
        <el-input v-model="value" placeholder='请输入' clearable></el-input>  
    </el-col>
     <el-col  :span='8' ref='input'>
        <el-input v-model="value" placeholder='请输入' suffix-icon="el-icon-date"  prefix-icon="el-icon-search"></el-input>  
    </el-col>
    <el-col  :span='8' ref='input'>
        <el-input type="textarea" v-model="value" :autosize='{minRows:2,maxRows:4}' placeholder='请输入' >
      </el-input>  
    </el-col>
    <el-col  :span='8' ref='input'>
        <el-input type="textarea" v-model="value" :autosize='{minRows:2,maxRows:4}' placeholder='请输入' >
      </el-input>  
    </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return { value: "" };
  },
  created() {},
  mounted() {
    console.log(this.$refs);
  }
};
</script>
<style>

</style>


