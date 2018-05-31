<template>
  <div>
    <h1>Submittal Register</h1>
    <RegisterTabs />
  </div>
</template>

<script>
  import RegisterTabs from '@/components/SubmittalRegister/RegisterTabs.vue';
    export default {
        name: "SubmittalRegister",
        components:{
          RegisterTabs
        }
    }
</script>

<style scoped>

</style>
