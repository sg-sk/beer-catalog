// Check if session storage key exists and returns it
export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};
