<template>
<section>
    <select name="region" >
    <option value="">Filter By re</option>
    <option v-for="option in options" :key="option" :value="option">{{option}}</option>
  
</select>
</section>
</template>

<script>
export default {
name:"Filter",
data(){
    return{
        options:[ 'Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia'
],
    }
}
}
</script>

<style scoped>
section{

}
select{
     border: none;
     position: absolute;
     right: 0;
         box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; 

      padding: .8rem 1rem;
      background: none;
   
}
</style>