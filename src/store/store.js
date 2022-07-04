import { createLogger, createStore } from "vuex";
import upvote from './modules/upvote'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    upvote
  },
  plugins: debug ? [createLogger()] : []
})