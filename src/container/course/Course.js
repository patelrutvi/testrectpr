import React, { useEffect } from 'react';
import CourseForm from './CourseForm';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deleteData, editdata, getdata } from '../../redux/action/course.action';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Course(props) {
    
    const [updatedata, setupdatedata] = React.useState(null)

    const corseval = useSelector(state => state.course)
    console.log(corseval, "corseval js");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getdata())

    }, [])

    const handledata = (data) => {
        if (updatedata) {
            dispatch(editdata(data))
        } else {
            dispatch(adddata(data))
        }
        console.log("submit");
        setupdatedata(null)
    }

    const handledelete = (id) => {
        dispatch(deleteData(id))
    }

    const handleEdit = (data) => {
        setupdatedata(data)
    }


    const columns = [
        // { field: 'id', headerName: 'id', width: 70 },
        { field: 'cname', headerName: 'Course name', width: 130 },
        { field: 'fees', headerName: 'Fees', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <DeleteIcon onClick={() => handledelete(params.row.id)}>

                    </DeleteIcon>
                    <EditIcon onClick={() => handleEdit(params.row)}>

                    </EditIcon>
                </>

            ),
        },
    ];

    return (
        <div>
            <CourseForm onsubmitdata={handledata} onupdate={updatedata} />
            <div style={{ height: 400, width: '100%' }}>
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
        </div>
    );
}

export default Course;