import React, { useEffect }  from "react";
import profilpicture from '../../assets/profile.png'
import data from '../../utils/hooks/index'

const CardPost = () => {
    console.log(data);
    useEffect(() => {
        fetch(`http://localhost:3000/api/auth/${data}}`)
             .then((response) => response.json()
             .then(({ surveyData }) => console.log(surveyData))
             .catch((error) => console.log(error))
         )
     }, [])
    return (
        <div className="post">
            <div className="user-id-email">
                <img src={profilpicture} aria-hidden alt="profil" width='80px' height='70px' />
                <div className="user-post">
                <span>{data}</span>
                </div>
            </div>
        </div>
    );
}

export default CardPost;