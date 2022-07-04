// Initial State
const state = {
  selected: false,
  numOfVotes: 0
}

// Getters
const getters = {
  // Get selected
  getUpvoteSelectedState(state) {
    return state.selected
  },
  getNumOfVotes(state) {
    return state.numOfVotes
  }
}

// Actions
const actions = {
  // Dispatches the action to mutate upvote state
  upvoteToggleSelection({ commit }) {
    commit('upvoteToggleSelectionMutation')
  },
  addVote({commit}) {
    commit('addVoteMutation')
  },
  removeVote({commit}) {
    commit('removeVoteMutation')
  }
}

// Mutations
const mutations = {
  // Commits toggle selection action
  upvoteToggleSelectionMutation(state) {
    state.selected = !state.selected
  },
  addVoteMutation(state) {
    state.numOfVotes = state.numOfVotes + 1
  },
  removeVoteMutation(state) {
    state.numOfVotes = state.numOfVotes - 1
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}