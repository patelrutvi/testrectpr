
import * as Actiontype from '../Actiontype'

export const getdata = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/course")
            .then((response) => response.json())
            .then((data) => dispatch({ type: Actiontype.GET_DATA, payload: data }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

export const adddata = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/course",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => dispatch({ type: Actiontype.ADD_DATA, payload: data }))
            .catch((error) => console.log(error))

    } catch (error) {
        console.log(error)
    }
}

export const deleteData = (id) => (dispatch) => {
    try {
        fetch("http://localhost:3004/course/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: Actiontype.DELETE_DATA, payload: id }))
            .catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const editdata = (data) => (dispatch) => {
    try {
        fetch("http://localhost:3004/course" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(dispatch({type: Actiontype.Edit_DATA , payload:data}))
        .catch((error) => console.log(error))
    } catch (error){
        console.log(error);
    }
}