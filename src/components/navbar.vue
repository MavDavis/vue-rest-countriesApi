<template>
  <nav :class="{  bg : $store.state.theme} " >
    <div class="logo">
        <h3>Where in the world?</h3>
    </div>
    <div class="mode" @click="$store.commit('changetheme')">
        <div v-if="$store.state.theme">
        <i class="fas fa-moon"></i>
        <span>Dark Mode</span>
        </div>
         <div v-else>
       <i class="fas fa-sun"></i>
        <span>Light Mode</span>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
name:"Navbar",
data(){
    return{
        dark:false,
    }
}
}

</script>

<style>
nav{
    display: flex;
    justify-content: space-between;
    padding: 1rem 5%;
    margin: 0 0 1rem 0;
      box-shadow:
  var(--box-shadow);
    background:var(--Light-Mode-Elements) ;
    color:var(--Light-Mode-Text);
}
nav.bg{
        background:var(--Dark-Mode-Elements) ;
    color:var(--Dark-Mode-Text);
}
.mode{
       cursor: pointer;
       transition: .2s ease;
}
.mode:hover{
    letter-spacing: .1px;
}
    .mode span{
     

        margin-left: .6rem;
    }

    @media(max-width:400px){
        .logo h3, .mode i, .mode span{
            font-size: 90%;
        }
    }
       @media(max-width:280px){
        .logo h3, .mode i, .mode span{
            font-size: 80%;
        }
    }
</style>