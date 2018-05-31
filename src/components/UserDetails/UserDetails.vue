<template>
  <div>
    <div class="upper-container">
      <div style="position: relative; overflow: hidden;">
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>User Details</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div>
          <v-container style="height: 300px;">
            <div class="profile-picture"></div>
            <div class="profile-info">
              <div class="profile-label"><span>Name: </span> <span>John Doe</span></div>
              <div class="profile-label"><span>Company: </span> <span>Contractor 1</span></div>
              <div class="profile-label"><span>Email: </span> <span>jdoe@email.com</span></div>
              <div class="profile-label"><span>Phone: </span> <span>(555)555-5555</span></div>
            </div>
          </v-container>
        </div>
      </div>
    </div> <!--end of upper container-->

    <div class="lower-container">
      <div style="position: relative; overflow: hidden;">
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>User Submittals Details</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div>
          <v-container style="height: 300px;">

            <v-layout row justify-center>
              <v-dialog v-model="dialog" persistent max-width="290">
                <v-btn slot="activator" color="indigo" dark>Reassign Submittals</v-btn>
                <v-card>
                  <v-card-title class="headline">Submittal Reassign</v-card-title>
                  <v-card-text>
                    Select the person you want to reassign 's submittals to:
                    <div>
                      <select>
                        <option>New Approver</option>
                        <option>John Smith</option>
                        <option>John Doe</option>
                        <option>Jane Jackson</option>
                      </select>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="darken-1" flat @click.native="dialog = false">Submit</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>

            <div class="spacer"></div>

            <v-data-table
                :headers="headers"
                :items="submittals"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.calories }}</td>
                  <td class="text-xs-right">{{ props.item.fat }}</td>
                  <td class="text-xs-right">{{ props.item.carbs }}</td>
                  <td class="text-xs-right">{{ props.item.protein }}</td>
                  <td class="text-xs-right">{{ props.item.iron }}</td>
                </template>
              </v-data-table>

          </v-container>
        </div>
      </div>
    </div> <!--end of lower container-->
  </div>

</template>

<script>
    export default {
        name: "UserDetails",
          data () {
            return {
              dialog: false,
              headers: [
              { text: 'Transmittal Number', value: 'transmittalNumber', align:'center' },
              { text: 'Spec Section', value: 'specSection', align:'center'  },
              { text: 'Description', value: 'description', align:'center'  },
              { text: 'Paragraph', value: 'paragraph', align:'center'  },
              { text: 'Classification', value: 'classification', align:'center'  },
              { text: 'Status', value: 'status', align:'center'  },
              { text: 'Details', value:'details', align:'center'  }
            ],
            items: [
            {
              title: 'John Doe'
            },
            {
              title: 'Eric Jones'
            },
            {
              title: 'John Jackson'
            }
          ],
            }
          }

    }
</script>

<style scoped>
  select{
    border: 1px solid black;
    font-size: 14pt;
    padding-left: 10px;
    padding-right: 10px;
  }
  .upper-container, .lower-container{
    width:95%;
    height:90%;
    margin:30px auto;
    box-shadow: -3px 3px 12px lightgray;
  }

  .profile-picture{
    width:200px;
    height:260px;
    border:1px solid black;
    float:left;
    margin-left:20px;
  }
  .profile-info{
    width:600px;
    height:260px;

    margin-left:40px;
    float:left;
  }
  .profile-label{
    width:95%;
    text-align: left;
    margin-top:15px;
    margin-left: 20px;
    font-size: 22pt;
    color:gray;
  }

  .spacer{
    height:30px;
  }
</style>
