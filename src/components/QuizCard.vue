<template>
  <v-layout mt-3 ml-3 mr-3>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat @click="navigate({url: '/quizzes/multiplechoice'})">
        <v-img
          :src="cardImage"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title class="primary" primary-title style="padding-top: 6px; padding-bottom: 6px;">
          <div>
            <h3 class="headline mb-0" style="width:270px;">{{cardTitle}}</h3>
            <v-layout row style="padding-bottom: 5px;">
              <v-flex xs6>{{cardText1}}</v-flex>
              <v-flex xs6>{{cardText2}}</v-flex>
            </v-layout>
            <div><span><v-img height="100%" width="7%" style="float:left;" :src="require('@/assets/ic_thumb_up_24px.png')"></v-img></span><span style="float:left; margin-left:10px;">{{likes}} Likes</span></div>
            <div><span><v-img height="100%" width="7%" style="float:left; margin-left:80px;" :src="require('@/assets/ic_speaker_notes_24px.png')"></v-img></span><span style="float:left; margin-left:10px;">{{comments}} Comments</span></div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    props: ['cardTitle','cardText1','cardText2','cardImage','likes','comments', 'navigateUrl'],
    methods: {
        ...mapActions('navigation', ['navigate'])
    }
  }
</script>