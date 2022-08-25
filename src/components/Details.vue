<template>
  <section>
    <div class="back">
      <i class="fas fa-arrow-left"></i>
      <span @click="back()">Back</span>
    </div>
    <div v-if="!loading">
      <div class="rowe" v-for="count in country" :key="count.ccn3">
        <div class="col-2">
          <div class="image-container">
            <img :src="count.flags.png" alt="" />
          </div>
        </div>
        <div class="col-3">
          <div class="country-details">
            <div class="name">
              <h2>
                {{ count.name.common }}
              </h2>
            </div>
            <div class="details rowe2">
              <div class="col-6">
                <p>
                  Native Name:<span> {{ count.name.nativeName }}</span>
                </p>
                <p>
                  Population:<span>{{ count.population }}</span>
                </p>
                <p>
                  Region:<span>{{ count.region }}</span>
                </p>

                <p>
                  Sub Region:<span>{{ count.subregion }}</span>
                </p>
                <p>
                  Capital:<span v-for="cot in count.capital" :key="cot">{{
                    cot
                  }}</span>
                </p>
              </div>
              <div class="col-6">
                <p>
                  Top Level Domain:<span v-for="cot in count.tld" :key="cot">{{
                    cot
                  }}</span>
                </p>
                <p>
                  Currencies:<span>{{  }}</span>
                </p>
                <p>
                  Languages:<span>{{ count.languages }}</span>
                </p>
              </div>
            </div>
            <div class="border">
                <p>Border Countries: 
                    <span  v-for="bord in count.borders" :key="bord[0]">{{bord}}</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Details",
  data() {
    return {
      url: `https://restcountries.com/v3.1/alpha?codes=${this.$route.params.id}`,
      loading: true,
      country: null,
    };
  },
  mounted() {
    axios.get(this.url).then((response) => {
      this.loading = false;
      this.country = response.data;
      console.log(this.country);
    });
  },

 

  methods: {
    back() {
      this.$router.push("/");
   
    },
  },
};
</script>

<style  scoped>
section {
  position: relative;
  width: 100%;
  padding: 0 5%;
  margin: 2rem 0;
}
.back {
  box-shadow: var(--box-shadow);
  padding: 5px 9px;
  border-radius: 10px;
  width: 100px;
  transition: ease 0.3s;
  margin: 2rem 0;
}
.back span {
  margin-left: 10px;
}
.back:hover {
  box-shadow: none;
  cursor: pointer;
  border: 0.1px solid #ccc;
}
.rowe, .rowe2{
        display: flex;
    max-width: 100%;
    
    justify-content: space-between;
    width: 100%;
    position:relative; 
}
.details p{
font-weight: 800;
line-height: 1.6rem;
}
.details p span{
    font-weight: normal;
    margin-left: 5px;
}
.image-container{
    position: relative;
    height: 100%;
    max-width: 100%;
}
img{
    height:100%;
    position: relative;
        max-width: 100%;

}
.rowe .col-2{
position: relative;
width: 40%;
}.rowe .col-3{
    width:56%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.border{
    margin-top: 3rem;
}
</style>