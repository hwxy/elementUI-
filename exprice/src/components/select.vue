<template>
<div>
   <el-select v-model="options">
      <el-option
      v-for="item in optiona"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select> 
   <el-select v-model="options" disabled>
      <el-option
      v-for="item in optiona"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select> 
    <el-select v-model="optionsArray" multiple >
      <el-option
      v-for="item in optiona"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
   </el-select> 
   <el-select v-model="options" multiple >
      <el-option-group
      v-for="item in optiona"
      :key="item.value"
      :label="item.value"
     >
     <el-option
      :key="item.value"
      :label="item.group.label"
      :value="item.group.value">
    </el-option>
    </el-option-group>
   </el-select> 
</div>    
</template>
<script>
export default {
  data() {
    return {
      optiona: [
        {  label:1,group:{value: 1,label: "哈哈"} },
        { label: 2, group:{value: 2,label: "呵呵"} },
        { label: 3, group:{value: 3,label: "嘿嘿"} }
      ],
      options: 1,
      optionsArray:[]
    };
  }
};
</script>
<style>

</style>


