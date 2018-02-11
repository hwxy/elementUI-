<template>
   <el-slider v-model='value' vertical  :format-tooltip='FORM' :step='10' ></el-slider>
</template>
<script>
//show-tooltip 是否显示提示
//format-tooltip 初始化value
//step  步长
//vertical  步长
export default {
    data(){
        return {
           value:10 
        }
    },
    methods:{
        FORM(value) {
         return 1
        }
    }

}
</script>
<style>

</style>


