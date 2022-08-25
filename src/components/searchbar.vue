<template>
  <div class="icon-input">
      <i class="fas fa-search"></i>

  <input class="input-text" type="text" placeholder="Search for a country..">
  </div>
</template>

<script>
export default {
name:"SearchBar"
}
</script>

<style scoped>
.icon-input{
    position: relative;
    width: 300px;

    height:3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; 
}
.input-text{
    border: none;
     width: 80%;
     position: absolute;
     right: 0;
      padding: .8rem 1rem;
      background: none;
      appearance: none;
    }
    i{
         position: absolute;
        top: 1rem;
        left: 2rem;
    }
    .input-text:focus {
border:none;
}
</style>