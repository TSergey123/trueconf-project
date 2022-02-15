<template>
  <div class="traffic-light">
    <ul class="traffic-light__colors-list">
      <li 
      :class="{active: this.$route.name === 'light-red'}"
      class="traffic-light__colors-item traffic-light__color traffic-light__color--red"></li>
      <li 
      :class="{active: this.$route.name === 'light-yellow'}"
      class="traffic-light__colors-item traffic-light__color traffic-light__color--yellow"></li>
      <li 
      :class="{active: this.$route.name === 'light-green'}"
      class="traffic-light__colors-item traffic-light__color traffic-light__color--green"></li>
    </ul>
  </div>
  <div>{{currentRoute}}</div>
</template>
<script>
export default {
  name: 'traffic-light',
  data() {
    return {
      isLight: false,
      isActive: false,
    }
  },
  created(){
      if(this.$route.name === 'light-red'){
      setTimeout( () => this.$router.push({ name: 'light-yellow'}), 10000);
    }
      if(this.$route.name === 'light-yellow'){
      setTimeout( () => this.$router.push({ name: 'light-green'}), 3000);
    }
      if(this.$route.name === 'light-green'){
      setTimeout( () => this.$router.push({ name: 'light-red'}), 15000);
    }
  // setTimeout( () => this.$router.push({ path: '/yellow'}), 3000);
  // setTimeout( () => this.$router.push({ path: '/green'}), 15000);


  },
  computed: {
  currentRoute() {
    return this.$route.name
  },
   isYellow() {
     return this.$route.name === 'light-yellow'
  },
   isGreen() {
     return this.$route.name === 'light-green'
  },
},
methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
},
}
</script>
<style>
.traffic-light {
  background: url(../assets/traffic-light.png) center no-repeat;
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.traffic-light__colors-list {
  display: flex;
  height: 350px;
  width: 100px;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-between;
  margin-top: 45px;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 0;
}

.traffic-light__colors-item {
  width: 100%;
  border-radius: 50px;
  height: 100px;
}

.traffic-light__color {
  visibility: hidden;
}

.traffic-light__color--red{
  background-color: red;
  
}

.traffic-light__color--yellow {
  background-color: yellow;
}

.traffic-light__color--green {
  background-color: green;
}

.active {
  visibility: visible;
}
</style>