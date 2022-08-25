<template>
  <div class="grid">

    <div v-for="data in datas" :key="data.cca2"
class="country-container" @click="openDetails(data.ccn3)">
        <div class="flag-container">
            <img :src="data.flags.png" alt="flagimg" class="flag-img" />
        </div>
        <div class="info-container">
            <div class="name">
                <h3>
                    {{data.name.official}}
                </h3>
            </div>
            <p>Population: <span class="population">{{data.population}}</span></p>
            <p>Region:<span class="currencies">{{data.region}}</span></p>
            <p>Capital: <span class="capital" v-for="data in data.capital" :key="data">{{data}}</span></p>
        </div>
  </div>

  </div>
</template>

<script>
export default {
props:["datas"],
created(){
   
},
methods:{
    openDetails(code){
this.$router.push(`/Details/${code}`)
    }
}
}
</script>

<style>
.grid{
         width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
}
.country-container{
    cursor: pointer;
    display:flex;
    flex-direction: column;
    box-shadow: var(--box-shadow);
    transition: ease .63s ;
}
.flag-container{
        position: relative;
    overflow: hidden;
    height: 50%;
}
.flag-img{
        display: block;
    width: 100%;
    min-height: 5rem;
}
.info-container{
    padding: 0 1rem;
    margin:1rem 0;
}
.name{
    margin-bottom: 1rem;
}
.info-container p{
    padding: 4px 0;
}
.country-container:hover{
    transform: translateY(-5px);
}
</style>