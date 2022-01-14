export const state = () => ({
  isAuthenticated: true // false/true
})

export const getters = {
  isAuthenticated: state => state.isAuthenticated
}
