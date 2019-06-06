<template>
  <v-layout mt-3 ml-3 mr-3>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="cardImage"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title class="primary" primary-title style="padding-top: 6px; padding-bottom: 6px;">
          <div>
            <h3 class="headline mb-0">{{cardTitle}}</h3>
            <div>{{cardText1}}</div>
            <div>{{cardText2}}</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['cardTitle','cardText1','cardText2','cardImage']
  }
</script>