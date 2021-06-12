<template>
  <story-bar app-name="demo"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import StoryBar from '@/components/StoryBar.vue'

@Options({
  components: {
    StoryBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
StoryBar {
  display: block;
  width: 100vw;
  height: 200px;
}
</style>
