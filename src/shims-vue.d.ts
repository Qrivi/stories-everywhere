import { ComponentCustomProperties } from 'vue' // eslint-disable-line
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface UserData {
    name: string,
    pic: string,
  }
  interface StoryData {
    app: string,
    user: UserData,
    type: string,
    url: string,
    seen: boolean,
  }

  interface State {
    stories: Array<StoryData>
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any> // eslint-disable-line
  export default component
}
