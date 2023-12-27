import React from 'react'
import FriendListItem from './FriendListItem'
const friendsul = {listStyle:"none"}
const FriendList=({friends}) => {
    console.log(...friends);
    return (
    <ul style={friendsul} className='friends-ul'>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
    )
}
export default FriendList