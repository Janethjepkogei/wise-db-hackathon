<template>
	<v-container id="quizCreationContainer">
		<div style="margin-left: 10px; margin-right: 10px;">
		<v-img style="margin-left: auto; margin-right: auto; margin-top:" height="100%" width="35%" :src="require('@/assets/exam.png')"></v-img>
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
  		<span style="font-size: 20px;">Questions</span>
  		<v-btn color="info">New</v-btn>
  		<v-btn color="info">Database</v-btn>
  		<v-layout wrap align-center>
	        <v-flex xs12 sm6 d-flex>
        		<v-select
          		:items="distribution"
          		label="Distribution"
        		></v-select>
      		</v-flex>
  		</v-layout>
  		<v-btn style="margin-left: 0px;" color="info">Upload Pictures</v-btn>
  		<v-img style="margin-left: 20px; float: right; margin-top: 100px;" height="15%" width="15%" :src="require('@/assets/checked.png')" @click="navigate({url: '/teacher/quizzes'})"></v-img>
  		<v-img style="margin-left: auto; float: right; margin-top: 100px;" height="15%" width="15%" :src="require('@/assets/cancel.png')" @click="navigate({url: '/teacher/quizzes'})"></v-img>
  	</div>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    components: {
    },
    created() {
        store.commit('navigation/setTopBarTitle', 'Create New Quiz')
    },
    methods: {
        ...mapActions('navigation', ['navigate'])
    },
    data: () => ({
      difficulty: ['Easy', 'Medium', 'Hard'],
      distribution: ['Mentee', 'Public']
    })
}
</script>

<style>
	#quizCreationContainer {
		padding-left: 15px;
		padding-right: 15px;
	}
	#quizCreationContainer label {
		font-size: 20px;
	}
</style>