<script setup>
    const props = defineProps({
        notification:String
    })
</script>

<template>
      <div class="nav-btn shadow order-1 place-self-end rounded-full flex items-center justify-center" :class="{'notification relative after:bg-teal-400' : props.notification}" >
          <slot></slot>
      </div>
</template>

<style lang="scss" scoped>
  .nav-btn{
    height:50px;
    width:50px;
  }

  .notification::after{
    content: v-bind('props.notification');
    color:black;
    position:absolute;
    top:-15%;
    right:-30%;
    height:50%;
    width:50%;
    border-radius:50%;
    text-align:center;
    display:flex !important;
    align-items:center;
    justify-content:center;
    margin: 0px 10px;
  }
</style>