
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
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then()

        } catch (error) {
        console.log(error)
    }
}