// Initial State
const state = {
  selected: false,
  numOfVotes: 0
}

// Getters
const getters = {
  // Get selected state
  getUpvoteSelectedState(state) {
    return state.selected
  },
  // Get number of votes
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
  // Dispatches the action add new vote
  addVote({commit}) {
    commit('addVoteMutation')
  },
  // Dispatches the action to remote vote
  removeVote({commit}) {
    commit('removeVoteMutation')
  }
}

// Mutations
const mutations = {
  // Commits toggle selection mutation
  upvoteToggleSelectionMutation(state) {
    state.selected = !state.selected
  },
  // Commits add vote mutation
  addVoteMutation(state) {
    state.numOfVotes = state.numOfVotes + 1
  },
  // Commits remove vote mutation
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