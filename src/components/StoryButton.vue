<template>
  <div class="border">
    <img :src="user.pic" :alt="user.name">
  </div>
</template>

<script lang="ts">
import { UserData } from '@vue/runtime-core'
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    user: {
      name: 'Unknown',
      pic: './assets/logo.png',
    } as UserData,
  },
})
export default class StoryButton extends Vue {
  user!: UserData
}
</script>

<style scoped lang="scss">
.border{

}
</style>
