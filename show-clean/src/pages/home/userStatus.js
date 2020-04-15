
import { useState, useEffect } from 'react';

function UserStatus(userId){
	const [isOnline, setIsOnline] = useState(null);

	function handleStatusChange(status){
		setIsOnline(status.isOnline);
	}

	useEffect(()=>{
		ChatAPI.subscribeToFriendStatus(userId, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(userId, handleStatusChange);
    };
	})
	return isOnline
}

export default UserStatus