<template>
     <div>
         <el-radio-group v-model="value">
             <el-radio label='1'></el-radio>
             <el-radio label='2'></el-radio>
             <el-radio label='3'></el-radio>
         </el-radio-group>
        <el-radio-group v-model="value">
             <el-radio-button label='上海'></el-radio-button>
             <el-radio-button label='北京'></el-radio-button>
             <el-radio-button label='天津'></el-radio-button>
         </el-radio-group>
     </div>
</template>
<script>
import _ from 'lodash'
export default {
    data(){
        return {
            value:'1'
        }
    },
    watch:{
      value:function(newvalue){
      
         var a=_.find({name:1,value:2},function(v){
             return v==1
         })
         console.log(a)
      }
    }
}
</script>
<style>

</style>


