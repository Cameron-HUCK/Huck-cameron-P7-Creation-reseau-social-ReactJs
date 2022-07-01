import React  from "react";
import profilpicture from '../../assets/profile.png'

const CardPost = () => {
    return (
        <div className="post">
            <div className="user-id-email">
                <img src={profilpicture} aria-hidden alt="profil" width='80px' height='70px' />
                <div className="user-post">
                <span>email User Id</span>
                </div>
            </div>
        </div>
    );
}

export default CardPost;