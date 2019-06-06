<template>
  <v-layout mt-3 ml-3 mr-3>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="cardImage"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title style="padding-top: 6px; padding-bottom: 0px;">
          <div>
            <h3 class="headline mb-0">{{cardTitle}}</h3>
            <div>{{cardText}}</div>
          </div>
        </v-card-title>

        <v-card-actions style="padding-top: 0px;">
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['cardTitle','cardText','cardImage']
  }
</script>