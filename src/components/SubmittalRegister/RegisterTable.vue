<template>
    <div>
      <h1>Register Table</h1>
      <v-data-table
      :headers="headers"
      :items="submittals"
      hide-actions
      class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.transmittalNumber }}</td>
          <td class="text-xs-center">{{ props.item.specSection }}</td>
          <td class="text-xs-center">{{ props.item.description }}</td>
          <td class="text-xs-center">{{ props.item.paragraph }}</td>
          <td class="text-xs-center">{{ props.item.classification }}</td>
          <td class="text-xs-center">{{ props.item.status }}</td>
          <td class="text-xs-center" @click="submittalDetails" :id="props.item.id"> View Details</td>
        </template>
      </v-data-table>

    </div>
</template>

<script>
    export default {
        name: "RegisterTable",
        data: function(){
          return {
            headers: [
              { text: 'Transmittal Number', value: 'transmittalNumber', align:'center' },
              { text: 'Spec Section', value: 'specSection', align:'center'  },
              { text: 'Description', value: 'description', align:'center'  },
              { text: 'Paragraph', value: 'paragraph', align:'center'  },
              { text: 'Classification', value: 'classification', align:'center'  },
              { text: 'Status', value: 'status', align:'center'  },
              { text: 'Details', value:'details', align:'center'  }
            ],
            submittals:[
              {
               id:"0001",
               transmittalNumber:"1",
               specSection: "01 33 00",
               description: "SD-01 Preconstruction Submittals",
               paragraph:"3.4",
               classification:"FIO",
               status:"Created by fholz",
               details:true
              },
              {
               id:"0002",
               transmittalNumber:"2",
               specSection: "01 35 26",
               description: "SD-05 Design Data",
               paragraph:"3.4",
               classification:"FIO",
               status:"approved by miverson",
               details:true
              }
            ]
          }
        },
      methods: {
        submittalDetails: function (e) {
          console.log("You clicked on submittal id: ",e.target.id);
          let target=e.target.id;
          window.location.href = "#/Submittal?submittal_id="+target;
        }
      },
      props:{

      }
    }
</script>

<style scoped>

</style>
