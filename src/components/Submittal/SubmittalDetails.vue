<template>
  <div>
    <h1>Submittal Details</h1>
    <h2>{{ submittal }}</h2>
  </div>
</template>

<script>
  import store from '@/store/store.js';
    export default {
        name: "SubmittalDetails",
        data: function(){return {submittal: store.state.submittal}}
    }
</script>

<style scoped>

</style>
