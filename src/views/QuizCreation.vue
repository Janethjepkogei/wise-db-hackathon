<template>
	<v-container >
		<div style="margin-left: 10px; margin-right: 10px;">
		<v-img style="margin-left: auto; margin-top:" height="100%" width="15%" :src="require('@/assets/exam.png')"></v-img>
		<v-flex xs12>
          <v-text-field
            label="Quiz Name"
          ></v-text-field>
        </v-flex>
        <v-layout wrap align-center>
	        <v-flex xs12 sm6 d-flex>
        		<v-select
          		:items="difficulty"
          		label="Difficulty"
        		></v-select>
      		</v-flex>
  		</v-layout>
  		Questions
  		<v-btn color="info">New</v-btn>
  		<v-btn color="info">From Database</v-btn>
  		<v-layout wrap align-center>
	        <v-flex xs12 sm6 d-flex>
        		<v-select
          		:items="distribution"
          		label="Distribution"
        		></v-select>
      		</v-flex>
  		</v-layout>
  		<v-btn style="margin-left: 0px;" color="info">Upload Pictures</v-btn>
  		<v-img style="margin-left: 20px; float: right; margin-top: 100px;" height="15%" width="15%" :src="require('@/assets/checked.png')"></v-img>
  		<v-img style="margin-left: auto; float: right; margin-top: 100px;" height="15%" width="15%" :src="require('@/assets/cancel.png')"></v-img>
  	</div>
	</v-container>
</template>

<script>
  export default {
    data: () => ({
      difficulty: ['Easy', 'Medium', 'Hard'],
      distribution: ['Mentee', 'Public']
    })
  }
</script>