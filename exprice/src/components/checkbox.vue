<template>
        <div>
       <!-- <el-checkbox v-model='value'>点击</el-checkbox>    
       <br>
        <el-checkbox-group v-model="array">
            <el-checkbox lable='1'>
            </el-checkbox>
            <el-checkbox lable='2'>
            </el-checkbox>
              <el-checkbox lable='3'>
            </el-checkbox>
        </el-checkbox-group> -->
      <!-- min,max-->
       <el-checkbox-group v-model="array" :min='1' :max='2'>
           <el-checkbox label='1'>213123</el-checkbox>
           <el-checkbox label='2'>213123</el-checkbox>
           <el-checkbox label='3'>213123</el-checkbox>
       </el-checkbox-group>
       <!-- 和el-radio-button对应的还有个el-checkbox-button多选按钮 -->
        <el-checkbox-group v-model="array" :min='1' :max='2'>
           <el-checkbox-button label='1'>213123</el-checkbox-button>
           <el-checkbox-button label='2'>213123</el-checkbox-button>
           <el-checkbox-button label='3'>213123</el-checkbox-button>
       </el-checkbox-group>
       <!-- 和el-radio一样加边框给border属性 -->
       </div>
</template>
<script>
export default {
  data() {
    return {
      value: true,
      array: []
    };
  },
  methods:{
      add(val){
         console.log(val)
      }
  },
  watch:{
      array:function(a,b){
        console.log(a)
      }
  }
};
</script>
<style>

</style>


