import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      /* Control handels all app data */
      control: {
        currentTime: 0,
        activeComment: 0
      },
      project: {
        video: {
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          length: 596,
          /* in seconds */
        },
        comments: {
          0: {
            message: "This is a test comment made to show what a longer comment might look like. I think the video looks excellent! Great job! Now here's a long list of things that need to be changed.",
            author: "Kyle T",
            timestamp: "0",
            id: 0
            /* in seconds */
          },
          1: {
            message: "It's good, but will men like it?",
            author: "Kyle T",
            timestamp: "5",
            id: 1
            /* in seconds */
          },
          2: {
            message: "Could you try making this 'pop' more?",
            author: "Kyle T",
            timestamp: "6",
            id: 2
            /* in seconds */
          },
          3: {
            message: "Are toddlers going to respond to this?",
            author: "Kyle T",
            timestamp: "7",
            id: 3
            /* in seconds */
          },
          4: {
            message: "Will this appeal to ages 4-45?",
            author: "Kyle T",
            timestamp: "20",
            /* in seconds */
            id: 4
          },
          5: {
            message: "Can you make it appeal to women more?",
            author: "Kyle T",
            timestamp: "50",
            /* in seconds */
            id: 5
          },
          6: {
            message: "Grobbel on knees for views",
            author: "Kyle T",
            timestamp: "55",
            /* in seconds */
            id: 6
          },
          7: {
            message: "Beg for subscribers",
            author: "Kyle T",
            timestamp: "60",
            /* in seconds */
            id: 7
          },
          8: {
            message: "Needs more sponsors",
            author: "Kyle T",
            timestamp: "62",
            /* in seconds */
            id: 8
          },
          9: {
            message: "end of video",
            author: "Kyle T",
            timestamp: "596",
            /* in seconds */
            id: 9
          },
        }

      }
    },
    mutations: {
      increment(state) {
        state.counter++
      },
      currentTime(state, time) {
        state.currentTime = time;
      }
    }
  })
}

export default createStore
