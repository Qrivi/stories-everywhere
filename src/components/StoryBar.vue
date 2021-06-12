<template>
oi
  <ul>
    <li v-for="user in getUsers()" :key="user.name">
      <story-button :user="user"/>
    </li>
  </ul>
  oi
</template>

<script lang="ts">
import { StoryData, UserData } from '@vue/runtime-core'
import { Options, Vue } from 'vue-class-component'
import StoryButton from './StoryButton.vue'

@Options({
  components: {
    StoryButton,
  },
  props: {
    appName: {
      type: String,
      required: true,
    },
  },
})
export default class StoryBar extends Vue {
  private appName!: string;
  private stories!: Array<StoryData>

  created (): void {
    console.log('Created the app with name: ' + this.appName)
    this.stories = this.$store.getters.getByApp(this.appName)
  }

  getUsers (): Array<UserData> {
    if (!this.stories) {
      return []
    }
    return this.stories
      .map(story => story.user)
      .reduce((users: Array<UserData>, user: UserData) => {
        if (!users.find(u => u.name === user.name)) {
          users.push(user)
        }
        return users
      }, [])
  }

  getStoriesByUserName (name: string): Array<StoryData> {
    if (!this.stories) {
      return []
    }
    return this.stories
      .filter(story => story.user.name === name)
  }
}
</script>
