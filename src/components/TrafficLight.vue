<template>
    <h2>{{fullName}}</h2>
  <div class="traffic-light">
    <ul class="traffic-light__colors-list">
      <li
        :class="{ active: this.$route.name === 'light-red', blink: this.counter < 3 }"
        class="traffic-light__colors-item traffic-light__color traffic-light__color--red"
      >{{counter}}</li>
      <li
        :class="{ active: this.$route.name === 'light-yellow', blink: this.counter < 3 }"
        class="traffic-light__colors-item traffic-light__color traffic-light__color--yellow"
      >{{counter}}</li>
      <li
        :class="{ active: this.$route.name === 'light-green', blink: this.counter < 3 }"
        class="traffic-light__colors-item traffic-light__color traffic-light__color--green"
      >{{counter}}</li>
    </ul>
  </div>
  <div>{{ currentRoute }}</div>
</template>
<script>
export default {
  name: 'traffic-light',
  data() {
    return {
      isBlinking: false,
      isActive: false,
      counter: 0,
      fullName: 'qwerty'
    }
  },
  updated() {
    // console.log(this.$route.name)
    //  if (this.$route.name == 'traffic-light') {
    //   console.log(this.$route.name)
    //   this.$router.push({ name: 'light-red' });
    // }
    // if (this.$route.name == 'light-red') {
    //   this.counter = 10
    //   console.log(this.$route.name)
    //   setTimeout(() => this.$router.push({ name: 'light-yellow' }), 10000);
    // }
    // if (this.$route.name == 'light-yellow') {
    //   this.counter = 3
    //   console.log(this.$route.name)
    //   setTimeout(() => this.$router.push({ name: 'light-green' }), 3000);

    // }
    // if (this.$route.name == 'light-green') {
    //   this.counter = 15
    //   console.log(this.$route.name)
    //   setTimeout(() => this.$router.push({ name: 'light-red' }), 15000);
    // }
  },
   methods: {
    countDown() {
        return setTimeout(() => {
          --this.counter
          this.countDown()
        }, 1000)
    },
    changeLight() {
    if (this.$route.name == 'traffic-light') {
      console.log(this.$route.name)
      this.$router.push({ name: 'light-red' });
    }
    if (this.$route.name == 'light-red') {
      this.counter === 10
      console.log(this.$route.name)
      setTimeout(() => this.$router.push({ name: 'light-yellow' }), 10000);
    }
    if (this.$route.name == 'light-yellow') {
      this.counter === 3
      console.log(this.$route.name)
      setTimeout(() => this.$router.push({ name: 'light-green' }), 3000);
    }
    if (this.$route.name == 'light-green') {
      this.counter === 15
      console.log(this.$route.name)
      setTimeout(() => this.$router.push({ name: 'light-red' }), 15000);
    }
    }
  },
  watch() {
    if (this.$route.name == 'light-red') {
      this.counter = 10
    }
    if (this.$route.name == 'light-yellow') {
      this.counter === 3
    }
    if (this.$route.name == 'light-green') {
      this.counter === 15
    }
  },
  computed: {
    changeName() {
      console.log('light')
     return this.fullName === 'Light';
    },
    changeMyLight() {
      console.log('computed ' + this.$route.name)
      return this.counter;
    },
    currentRoute() {
      console.log('currentRoute ' + this.$route.name)
      return this.$route.name
    },
  },
   mounted() {
    console.log('mounted ' + this.$route.name)
    this.changeLight();
    this.countDown();
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 2px 2px 2px black;
  }

.traffic-light__color {
  visibility: hidden;
}

.traffic-light__color--red {
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

.blink {
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1.0,2.0,0,1.0);
  animation-duration: 1s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1.0,2.0,0,1.0);
  -webkit-animation-duration: 1s;
}
 
@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
 
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}
</style>