import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import HomeComponent from '../components/layoutComponents/HomeComponent'
import AddNewElementForm from '../components/layoutComponents/AddNewElementForm'
import { getData } from '../redux/actionCreators/index'
import DeleteData from './layoutComponents/DeleteData'


function MainComponent() {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getData())
    }, [])
    
    const dataLoading = useSelector((state) => state.datasetReducer.dataLoading)
    const dataUpdating = useSelector((state) => state.datasetReducer.dataUpdating)
    const stateVars = useSelector(state => state)
    const dataset = useSelector((state) => state.datasetReducer.data)
    console.log(stateVars.datasetReducer.data)
    console.log(dataset)
    if(!(dataLoading) || !(dataUpdating))
    {
        return (
            <div className="main relative">
                <div>
                    <div className="custom-shape-divider-top-1645201088">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="lg:w-1/2 lg:m-auto ">
                        <div className="content m-10 p-1.5  text-center items-center md:mt-0 mt-56 md:flex h-screen">
                            <div className="md:w-1/2  md:p-5 md:text-8xl text-red-600 lg:text-7xl">
                                <h1 className="text-5xl sm:text-3xl md:text-7xl">Finsire Excersise</h1>
                            </div>
                            
                            <div className="md:w-1/2 mt-5">
                                <AddNewElementForm />
                                <HomeComponent data={dataset}/>
                                <DeleteData />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <div>Loading...</div>
        )
    }
}

export default MainComponent