<template>
<div class="container">
  <div class="row">
    <div class="col-6">
      <Searchbar/>
    </div>
    <div class="col-6 filter">
<Filter  @select="filterCountry"/>
    </div>
  </div>
  <div class="row" v-if="loading">
<h1 style="position:absolute; top:50%; left:40%; width:5%;">Loading...</h1>
  </div>
  <div class="rows" v-else>
    <Country :datas="countries"/>
  </div>
</div>
</template>

<script>
import Filter from '@/components/filter.vue';
import Searchbar from '@/components/searchbar.vue';
import axios from 'axios'
import Country from '@/components/Country.vue';
export default {
components:{
    Filter,
    Searchbar,
    Country
},
mounted(){
    let country = JSON.parse(localStorage.getItem('country'))
if(country === undefined ){
  this.loading = false;
  this.countries = country
}else{
 axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        this.loading= false
        this.countries = (response.data)
        localStorage.setItem('country', JSON.stringify(response.data))
        })}
}, 
data(){
  return{
    countries:null,
    loading:true,
  };
},
methods:{
filterCountry(region){
  let country = JSON.parse(localStorage.getItem('country'))

  this.countries = country.filter(country => country.region === region)

},
},
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
.rows{
  width: 100%;
  margin:2rem 0;

}
.col-6{
      position:relative;
   
}
.col-6.filter{
  display: flex;
  justify-content: flex-end;
}
@media(max-width:450px){
.row{
  flex-direction:column;
}
.col-6.col-6.filter{
  justify-content: start;
}
}
</style>