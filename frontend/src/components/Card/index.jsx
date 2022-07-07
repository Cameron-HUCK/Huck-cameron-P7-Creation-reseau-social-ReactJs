import React from "react";
import profilpicture from '../../assets/profile.png'

//const CardPost = () => {
//    const postList = [
//        {
//            userId: { type: String, required: true },
//            message: { type: String, required: true, maxlength : 500},
//            imageUrl: { type: String, required: true },
//            likes: { type: Number, default: 0 },
//            dislikes: { type: Number, default: 0 },
//            usersLiked: { type: ['String<userID>'], required: true },
//            usersDisliked: { type:['String<userID>'], required: true },
//        }
//    ]
//    return (
//        <div className="post">
//            <div className="user-id-email">
//                <img src={profilpicture} aria-hidden alt="profil" width='80px' height='70px' />
//                <div className="user-post">
//                <span>email user</span>
//                </div>
//            </div>
//        </div>
//    );
    function Card({ label, title, picture }) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
                <span>{label}</span>
                <img src={picture} alt="freelance" height={80} width={80} />
                <span>{title}</span>
            </div>
        )
    }
     
    export default Card
//}

//export default CardPost;