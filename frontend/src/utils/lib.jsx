// Get user data from localStorage. Returns {userId: ..., token: ..., isAdmin: ...} or false
export const getUserData = () => {
	let userData = JSON.parse(localStorage.getItem("userData")) || {};
	if(!userData.hasOwnProperty('userId') || userData.userId === '' || userData.userId === null) return false;
	if(!userData.hasOwnProperty('token') || userData.token === '' || userData.token === null) return false;
	if(!userData.hasOwnProperty('isAdmin') || userData.isAdmin === '' || userData.isAdmin === null) return false;
	if([true, false].includes(userData.isAdmin) === false) userData.isAdmin = false;
	return userData;
}

// Set user data into localStorage
export const setUserData = (data) => {
	localStorage.setItem("userData", JSON.stringify(data));
}