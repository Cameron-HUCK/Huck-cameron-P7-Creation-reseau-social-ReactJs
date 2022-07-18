function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}
export default handleSubmit;