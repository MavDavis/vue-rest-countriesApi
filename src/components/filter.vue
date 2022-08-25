<template>
  <section>
    <select name="region" v-model="selected" @change="changed()">
      <option value="">Filter By re</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      options: ["Asia", "Africa", "Americas", "Oceania", "Europe"],
      selected: "",
    };
  },
  methods: {
    changed() {
      this.$emit("select", this.selected);
    },
  },
};
</script>

<style scoped>
section {
}
select {
  border: none;
  position: absolute;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 0.8rem 1rem;
  background: none;
}
option {
  margin-top: 1rem;
  border: none;
}
@media (max-width: 450px) {
  select {
    position: relative;
    display: flex;
    justify-self: start;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
  }
}
</style>
