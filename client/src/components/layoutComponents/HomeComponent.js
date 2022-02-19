import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getData} from '../../redux/actionCreators'

function HomeComponent({data}) {

  if(data.length == 0)
  {
    return <div className="my-5 text-red-600 text-3xl">No elements</div>
  }
  else
  {
    // Stat calculations start here
    // Variable Initialization
    var summation = 0
    var variance = 0
    var sd = 0
    console.log(data)

    var dictionaryOfOccurences = {}
    var highestNumberOfOccurence = -100000
    var mode = -1
    
    // Calculate Mean and Mode
    for(let i=0; i<data.length; i++)
    {
      summation += data[i]
      if(dictionaryOfOccurences[data[i]] == undefined)
      {
        dictionaryOfOccurences[data[i]] = 1
      }
      else
      {
        dictionaryOfOccurences[data[i]] += 1
        if(highestNumberOfOccurence < dictionaryOfOccurences[data[i]])
        {
          highestNumberOfOccurence = dictionaryOfOccurences[data[i]]
          mode = data[i]
        }
      }

      console.log(i, dictionaryOfOccurences, mode, summation)
    }
    
    // If no mode, take first element in the array as the mode
    if(mode == -1)
    {
      mode = data[0]
    }

    // Mean 
    var mean = summation / data.length

    // Calculating Median
    // Sorting the array
    data.sort()
    var median = -1
    // If length of array is Even
    if(data.length % 2 == 0)
    {
      // if the data length is more than 2, take average
      if(data.length > 2)
      {
        var med = Math.trunc(data.length / 2)
        console.log(med)
        median = (data[med] + data[med+1])/2
      }
      // Else make the first element the median
      else
      {
        median = (data[0] + data[1])/2
      }
    }
    else
    {
      // Take the middle element
      var med = Math.trunc(data.length / 2)
      median = data[med]
    }
    console.log(median)
    // Calculating SD and variance
    summation = 0
    for(let i=0; i<data.length; i++)
    {
      summation += ((data[i] - mean) ** 2)
    }

    // variance = sum(elements)/number of elements
    // standard deviation = sqrt(variance)
    variance = summation / data.length
    sd = variance ** 0.5

    return (
      <div>
        <table className="my-10">
          <thead className="my-10 border-b-10">
            <tr>
                <th className="w-1/2 text-left text-2xl text-blue-500"> Statistic Quantity </th>
                <th className="w-1/2 text-right text-2xl text-blue-500"> Value </th>
            </tr>
          </thead>
        <tr>
          <td className="w-1/2 text-left text-2xl">Mean</td>
          <td className="w-1/2 text-right text-2xl">{Number(mean.toFixed(2))}</td>
        </tr>
        <tr>
          <td className="w-1/2 text-left text-2xl">Median</td>
          <td className="w-1/2 text-right text-2xl">{Number(median.toFixed(2))}</td>
        </tr>
        <tr>
          <td className="w-1/2 text-left text-2xl">Mode</td>
          <td className="w-1/2 text-right text-2xl ">{Number(mode.toFixed(2))}</td>
        </tr>
        <tr>
          <td className="w-1/2 text-left text-2xl ">Std. Deviation</td>
          <td className="w-1/2 text-right text-2xl ">{Number(sd.toFixed(2))}</td>
        </tr>
        <tr>
          <td className="w-1/2 text-left text-2xl ">Variance</td>
          <td className="w-1/2 text-right text-2xl">{Number(variance.toFixed(2))}</td>
        </tr>
        </table>
      </div>
    )
  }
}

export default HomeComponent