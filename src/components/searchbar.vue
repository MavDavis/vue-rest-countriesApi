<template>
  <div class="icon-input" :class="{  bg : $store.state.theme} " >
    <i class="fas fa-search"></i>

    <input
      v-model="searchValue"
      class="input-text"
      type="text"
      placeholder="Search for a country.."
      @keyup.enter="searchCountry()"
    />
  </div>
</template>

<script>

export default {
  name: "SearchBar",
  data() {
    return {
      searchValue: "",
    };
  },
methods:{
  searchCountry(){
  let newValue = (this.searchValue.toLocaleLowerCase());
  let countryArray = JSON.parse(localStorage.getItem('country'))
  let foundItem = countryArray.find(country => country.name.common.toLocaleLowerCase() === newValue)
 if(foundItem === undefined){
  alert('enter a valid country name')
 }else{
  this.$router.push(`/Details/${foundItem.ccn3}`);
 }
  }
}
};
</script>

<style scoped>
.icon-input {
  position: relative;
  width: 300px;
    background:var(--Light-Mode-Elements) ;
    color:var(--Light-Mode-Text);
  height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.icon-input.bg{
      background:var(--Dark-Mode-Elements) ;
   
}
.input-text {
  border: none;
  width: 80%;
  position: absolute;
  right: 0;
  padding: 0.8rem 1rem;
  background: none;
  appearance: none;
}
.icon-input.bg .input-text, .icon-input.bg i{
   color:var(--Dark-Mode-Text);
}
i {
  position: absolute;
  top: 1rem;
  left: 2rem;
}
.input-text:focus {
  border: none;
}
@media (max-width: 450px) {
  i {
  position: absolute;
  top: .6rem;
  left: 1rem;
}
  .icon-input{
    height:2.4rem;
    width:60%;
  }
  .input-text {
  
    padding: 0.4rem 0.6rem;
  }}
</style>
