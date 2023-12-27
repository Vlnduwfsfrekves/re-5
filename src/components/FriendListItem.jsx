import React from 'react'
const online = {
  backgroundColor: 'green',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  display: 'inline-block'
};

const offline = {
  backgroundColor: 'red',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  display: 'inline-block'
};
const FriendListItem=({avatar,name,isOnline}) => {
    return (
    <li className='item'>
      <span style={isOnline ? online : offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className='name'>{name}</p>
    </li>
    )
}
export default FriendListItem