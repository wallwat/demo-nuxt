export const state = () => ({
  profile: {}
})

export const mutations = {
  updateProfile (state, profile) {
    state.profile = profile
  }
}
