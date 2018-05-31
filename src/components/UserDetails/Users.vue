<template>
  <div>
    <h1>Users</h1>

    <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-center">{{ props.item.company }}</td>
      <td class="text-xs-center">{{ props.item.email }}</td>
      <td class="text-xs-center">{{ props.item.phone }}</td>
      <td class="text-xs-center"><a @click='viewUser' :id="props.item.id">View Details</a></td>
    </template>
  </v-data-table>

  </div>

</template>

<script>
    export default {
        name: "Users",
      data: function(){
          return {
            headers: [

              { text: 'Name', value:'name', align:'center'  },
              { text: 'Company', value:'company', align:'center'},
              { text: 'Email', value:'email', align:'center'},
              { text: 'Phone Number', value:'phone', align:'center'},
              { text: 'View Assigned Submittals', value:'details', align:'center'}
            ],
            users:[
              {
               id:"0001",
               name: "John Doe",
               company: "Contractor 1",
               email: "jdoe@email.com",
               phone:"867-5309",
               details:true
              },

            ]
          }
        },
      methods:{
          viewUser:function(e){
            let target=e.target.id;
            window.location.href = "#/UserDetails?user_id="+target;
          }
      }
    }
</script>

<style scoped>

</style>
