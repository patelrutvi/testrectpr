
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useEffect } from 'react';

export default function CourseForm({ onsubmitdata, onupdate }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (onupdate) {
            handleClickOpen()
            formik.setValues(onupdate)
        }
    }, [onupdate])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let courseScema = Yup.object({
        cname: Yup.string()
            .required("please enter couse name"),
        fees: Yup.number()
            .required(),
    })

    const formik = useFormik({
        initialValues: {
            cname: '',
            fees: ''
        },
        validationSchema: courseScema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            handleClose()
            // console.log(values);
            onsubmitdata(values)


        }
    })

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = formik

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            name='cname'
                            id="cname"
                            label="Course Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cname}
                        />
                        <span style={{ color: "red" }} className='error'> {errors.cname && touched.cname ? errors.cname : ''}</span>
                        <TextField

                            margin="dense"
                            name='fees'
                            id="fees"
                            label="Fees"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fees}

                        />

                        <span style={{ color: "red" }} className='error'> {errors.fees && touched.fees ? errors.fees : ''}</span>
                        <DialogActions>
                            <button onClick={handleClose}>Cancel</button>
                            <button type='submit'>Submit</button>

                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
}