//import { useEffect, useState } from "react";
//import { useDispatch } from 'react-redux'
//import { getPosts } from '../../action/post-action';
//
//
//const Thread = () => {
//    const [loadPost, setLoadPost] = useState(true);
//    const dispatch = useDispatch();
//
//    useEffect (() => {
//        if (loadPost) {
//            dispatch(getPosts());
//            setLoadPost(false)
//        }
//    }, [loadPost, dispatch]);
//    return (
//        <div>
//
//        </div>
//    )
//}
//export default Thread;