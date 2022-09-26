function deletePost (e) {
	
    e.preventDefault();
	let response = window.confirm("Do you confirm that you want to delete your message ?");
	if(response === true) {
		// Delete the product from Local Storage
        delete [];
		// We overwrite the LocalStorage basket with our cart modify
		localStorage.setItem("post", JSON.stringify());
		// We refresh the page (to refresh the list of products and the total)
		window.location.reload();
	}
}
export default deletePost;