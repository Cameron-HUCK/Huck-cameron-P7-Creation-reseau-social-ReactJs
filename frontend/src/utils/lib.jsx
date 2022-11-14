export const getUserToken = () => {
	let userToken = false;
	let userTokenLocalStorage = localStorage.getItem('dataUser');
	if(userTokenLocalStorage != null) {
		userToken = JSON.parse(userTokenLocalStorage);
	}
	return userToken;
}
