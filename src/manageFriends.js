export function manageFriends(state, action) {
  // your code here
  switch(action.type) {
    case 'friends/add':
      {
        const newFriends = state["friends"]
        newFriends.push({"hometown":action.payload.hometown, "id": action.payload.id, "name": action.payload.name })
        return { friends: newFriends}
      }
    case 'friends/remove':
      {
        const newFriends = state["friends"].filter(friend => friend.id !== action.payload)
        return { friends: newFriends}
      }
    default:
      return state

  }
}
