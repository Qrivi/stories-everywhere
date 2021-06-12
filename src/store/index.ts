import { State, StoryData } from 'vue'
import { createStore } from 'vuex'

export default createStore({
  state: {
    stories: [
      {
        app: 'demo',
        user: {
          name: 'Qriwi',
          pic: 'https://picsum.photos/100/100/',
        },
        type: 'image',
        url: 'https://picsum.photos/350/200/',
        seen: false,
      }, {
        app: 'demo',
        user: {
          name: 'Qrivi',
          pic: 'https://picsum.photos/100/100/',
        },
        type: 'image',
        url: 'https://picsum.photos/350/200/?x=y',
        seen: false,
      }, {
        app: 'demo',
        user: {
          name: 'Qrivi',
          pic: 'https://picsum.photos/100/100/',
        },
        type: 'image',
        url: 'https://picsum.photos/350/202/?a=b',
        seen: false,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getByApp: (state: State) => (app: string) : Array<StoryData> => {
      return state.stories.filter((story: StoryData) => story.app === app)
    },
  },
})
