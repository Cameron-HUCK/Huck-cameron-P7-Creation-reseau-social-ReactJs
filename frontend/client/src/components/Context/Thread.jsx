//import  React, { useEffect, useState }  from "react";
//import { getPosts } from '../../Actions/post-action'
//import { useDispatch } from 'react-redux'
//
//const Thread = () => {
//    const [loadPost, setLoadPost] = useState(true);
//    const dispatch = useDispatch();
//
//    useEffect(() => {
//        if (loadPost) {
//            dispatch(getPosts());
//            setLoadPost(false)
//        }
//    }, [loadPost, dispatch])
//
//    return (
//        <div>
//            
//        </div>
//    )
//};
//
//export default Thread;