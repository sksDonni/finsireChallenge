import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addElement, createNewDataset} from '../../redux/actionCreators'

function AddNewElementForm() {
  const dispatch = useDispatch()

  const [element, setelement] = useState(0)
  const [errorAbsenceBool, seterrorBool] = useState(true)

  const validateData = (el) => {
    console.log(Number(el))
    if(isNaN(el) || el.length == 0)
    {
      console.log("S")
      return 0
    }
    else
    {
      console.log("f")
      seterrorBool(true)
      return 1
    } 
  }

  const handleSubmit = (e) => {
		e.preventDefault()
    if(validateData(element)==1)
    {
      const newElement = Number(element)
      const state = {element: newElement}
      console.log(state);
      dispatch(addElement(state))
    }
    else
    {
      seterrorBool(false)
    }
	}

  const errors = errorAbsenceBool?<div></div>:<div className="text-xl text-red-600">Enter an integer</div>
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="">
                {errors}
                <input
                  className="mt-2 p-1 w-3/4 border-2 border-black font-medium text-lg"
                  type="text"
                  id="data_addition"
                  placeholder="Enter data points"
                  onChange={(e) => setelement(e.target.value)}
                />
                <button type="submit" className="text-2xl w-1/4 text-blue-600 border-2">Add</button>
            </div>
      </form>
    </div>
  )
}

export default AddNewElementForm