<template>
 <el-cascader :options='options' v-model="defaul" :show-all-levels='false'>

 </el-cascader>
</template>
<script>
//show-all-levels 只显示最后一级
//change-on-select 选中既改变
export default {
     data(){
         return {
          options:[
              {label:'熊一',value:1,children:[{label:'熊一一',value:11}]},
              {label:'熊二',value:2,children:[{label:'熊二二',value:22,disabled:true}]},
              {label:'熊三',value:3,children:[{label:'熊三三',value:33}]}
          ],
          defaul:[1,11]
         }
     },
     props:['value'],
     methods:{
         add(){
             this.$emit('input',this.a,this.b)
         }
     }
}
</script>
<style>

</style>


