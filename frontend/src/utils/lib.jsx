export const getUserToken = () => {
	let userToken = {};
	let userTokenLocalStorage = localStorage.getItem('dataUser');
	if(userTokenLocalStorage != null) {
		userToken = JSON.parse(userTokenLocalStorage);
	}
	return userToken;
}
// import { getUserToken } from "../utils/lib";