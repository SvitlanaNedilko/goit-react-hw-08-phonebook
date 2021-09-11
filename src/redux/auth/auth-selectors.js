const getIsLoggenIn = (state) => state.auth.isLoggenIn

const getUsername = (state) => state.auth.user.name

const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser

const authSelectors = {
  getIsLoggenIn,
  getUsername,
  getIsFetchingCurrent,
}

export default authSelectors
