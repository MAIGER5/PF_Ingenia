import { useEffect } from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getDetailCourse } from "../../Redux/Actions/getDetailCourse";
import { cleandDetail } from "../../Redux/Actions/cleanDetail";



function CourseCharacter() {

    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courseDetail)
    const {id} = useParams();

    //componentDidMount
    //componentDidUpdate
    //componentWillUnMount

    useEffect(()=> {
        dispatch(getDetailCourse(id));
        
        return ()=> {
            dispatch(cleandDetail())
        }
    }, [id]);

    return courses;
};


export default CourseCharacter;