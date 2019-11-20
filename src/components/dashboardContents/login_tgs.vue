<template>
  <v-container>
      <v-card>
          <v-container>
              TGS11_9495
          </v-container>
      </v-card>
      <v-btn @click="move()">Next</v-btn>
  </v-container>
</template>
<script>
export default {
    methods:{
        move(){
            this.$router.push('/userController')
        }
    },
}
</script>