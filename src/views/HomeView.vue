<template>
<div class="container">
  <div class="row">
    <div class="col-6">
      <Searchbar/>
    </div>
    <div class="col-6 filter">
<Filter/>
    </div>
  </div>
</div>
</template>

<script>
import Filter from '@/components/filter.vue';
import Searchbar from '@/components/searchbar.vue';
export default {
components:{
    Filter,
    Searchbar,
    
}
}
</script>

<style>
.container{
  width: 100%;
  margin:2rem 0;
  position: relative;
}
.row{
  padding :0 5%;
     display: flex;
   max-width: 100%;
    
    justify-content: space-between;
    width: 100%;
    position:relative;
}
.col-6{
      position:relative;
   
}
.col-6.filter{
  display: flex;
  justify-content: flex-end;
}
</style>