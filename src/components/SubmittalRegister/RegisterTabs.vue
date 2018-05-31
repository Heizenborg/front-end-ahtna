<template>
    <div>
    <v-tabs

      color="indigo"
      dark
      slider-color="white"
    >
      <v-tab
        v-for="contract in contracts"
        :key="contract.index"
        ripple
      >
        {{ contract.name }}
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>

            <div>

              <RegisterTable />

            </div>

          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>

            <div>

              <RegisterTable />

            </div>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
  import RegisterTable from '@/components/SubmittalRegister/RegisterTable.vue';
    export default {
        name: "RegisterTabs",
        data: function(){
          return {
            contracts: [
              {
                name: "Cape Newenham"
              },
              {
                name: "Tatalina"
              }
            ]
          }
        },
      components:{
          RegisterTable
      }
    }
</script>

<style scoped>

</style>
