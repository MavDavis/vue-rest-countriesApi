<template>
    <div id="show-loading" class="loading" >
      <div class="semi-loader">
        <div class="bouncing-loader"  :class="{  Light : $store.state.theme} ">
          <span style="--order: 1"></span>
          <span style="--order: 2"></span>
          <span style="--order: 3"></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loading {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  z-index: 4;
}
.semi-loader {
  height: 100%;
}

.bouncing-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bouncing-loader > span {
  position: relative;
  width: 20px;
  height: 20px;
  margin: 3rem 0.2rem;
  background-color: var(--Dark-Mode-Background);

  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
  animation-delay: calc(0.3s * var(--order));
}
.bouncing-loader.Light > span{
    background-color: var(--Light-Mode-Background);

}
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -16px, 0);
  }
}

.show-loading {
  display: block;
}
</style>