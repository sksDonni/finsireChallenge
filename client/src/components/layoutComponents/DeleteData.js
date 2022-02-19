import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewDataset } from '../../redux/actionCreators'

function DeleteData() {
    const dispatch = useDispatch()
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(createNewDataset())
    }

    return (
        <div><button onClick={handleDelete} className="text-2xl w-1/2 mx-auto text-red-600 mb-5 border-2">Clear Data</button></div>
    )
}

export default DeleteData