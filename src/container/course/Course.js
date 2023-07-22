import React, { useEffect } from 'react';
import CourseForm from './CourseForm';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../../redux/action/course.action';
import { DataGrid } from '@mui/x-data-grid';

function Course(props) {

    const corseval = useSelector(state => state.course)
    console.log(corseval,"corseval js");
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getdata())

    }, [])

    const  handledata = () => {
        console.log("submit");
        dispatch()
    }


    const columns = [
        
        { field: 'cname', headerName: 'course name', width: 130 },
        { field: 'fees', headerName: 'fees', width: 130 },
    ];

    return (
        <div>
            <CourseForm onsubmitdata={handledata} />
            <DataGrid
                rows={corseval.cdata}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default Course;