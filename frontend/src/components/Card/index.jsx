import React, { useState }  from "react";


const AddCardPost = () => {
    const [inputValue, setInputValue] = useState("Posez votre question ici");

    function handleSubmit(e) {
        e.preventDefault()
        alert('Post publiée')
    }

    console.log(handleSubmit);
    return (
    <li className='add-post-item'>
        <div className="user-id-email">email User Id </div>
        <div className="form-post">
            <form onSubmit={handleSubmit} method="post" action="">
                <label htmlFor="title">Titre du post</label>
                <input type="text" id="title-add-post" name="post" 
                    required 
                    minLength="4" 
                    maxLength="8" 
                    size="40">
                </input>
                <br />
                <label htmlFor="texte">Quoi de neuf ?</label>
                <div className="flex-from">
                    <input type="text" id="text-post" name="post" 
                        required 
                        minLength="0" 
                        maxLength="250" 
                        size="200">
                    </input>
                    <label htmlFor="file-img" className="label-file">Choisir une image</label>
                    <input id="file-img" className="input-file" type="file"/>    
                    <img src="imagePreview" alt="imagePreview"/>
                    <br />
                    <div className="addBtton">
                        <button type='submit' id="addToPost">Publication</button>
                    </div>
                </div>    
            </form>
        </div>
    </li>
    );
}

export default AddCardPost;