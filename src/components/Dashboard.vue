<template>
  <div>
    <h1>Dashboard</h1>
    <div class="my-submittals">
      <div style="position: relative; overflow: hidden;">
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>My Submittals</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div>
          <v-container style="height: 300px;">

            <v-data-table
              :headers="headers"
              :items="items"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.transmittalNumber }}</td>
                 <td >{{ props.item.project }}</td>
                <td >{{ props.item.specSection }}</td>
                <td >{{ props.item.description }}</td>
                <td >{{ props.item.paragraph }}</td>
                <td ><v-btn color="info">Review/Approve</v-btn></td>
              </template>
            </v-data-table>

          </v-container>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Dashboard",
        data(){
          return{
            headers:[
              { text: 'Transmittal Number', value: 'transmittalNumber', align:'center' },
              { text: 'Contract', value: 'project', align:'center'  },
              { text: 'Spec Section', value: 'specSection', align:'center'  },
              { text: 'Description', value: 'description', align:'center'  },
              { text: 'Paragraph', value: 'paragraph', align:'center'  },
              { text: 'Review/Approve', value: 'review', align:'center'  }
            ],
            items: [
            {
              transmittalNumber:'0001-123',
              project:'Tatalina',
              specSection:'13 a',
              description:'SD-02 Shop Drawings',
              paragraph:'12',
              author:'miverson'
            }
          ],
          }
        }
    }
</script>

<style scoped>

</style>
