import React from "react";
import profilpicture from '../../assets/profile.png'
function AddPost () {
    return (
        <div className="post">
            <div className="user-id-email">
                <img src={profilpicture} aria-hidden alt="profil" width='80px' height='70px' />
                <div className="user-post">
                <span>email User Id</span>
                </div>
            </div>
            <div className="form-post">
                <form method="post" action="traitement.php">
                    <label htmlFor="title">Titre du post</label>
                    <input type="text" id="title-post" name="post" 
                        required 
                        minLength="4" 
                        maxLength="8" 
                        size="40">
                    </input>
                </form>
                <br />
                <form method="post" action="traitement.php">
                    <label htmlFor="texte">Quoi de neuf ?</label>
                    <div className="flex-from">
                        <input type="text" id="text-post" name="post" 
                            required 
                            minLength="100" 
                            maxLength="80" 
                            size="200">
                        </input>
                        <br />
                        <div className="addBtton">
                            <button id="addToPost">Publication</button>
                        </div>
                    </div>    
                </form>
            </div>
                
        </div>
    )
}

export default AddPost;