import React,{useState} from 'react'

import Neuron from './neuron'
import useNeuron from './useNeuron'

function XOR() {
	const [input, setInput] = useState([0,0])
	const [output,setOutput] = useState(0)
	const [trainingData] = useState([[0,0], [0,1], [1,0], [1,1]])
	const [target] = useState([[0], [1], [1], [0]])

	const [predict] = useNeuron(trainingData, target)

	const setPoint = I=>{
		return event=>{
			input[I] = event.target.value
			setInput(input)
		}
	}

	const makePrediction = event=>{
		console.log('input',input)
		const result = predict(input)
		setOutput(result)
	}

	const getOutput = ()=>{
		console.log(output)

		if (output && output._data && output._data.length) return output._data[0]
		else return 'nil'
	}

	return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <input
								onChange={setPoint(0)}
							/>
            </td>
            <td rowSpan={2}>{getOutput()}</td>
          </tr>
          <tr>
            <td>
              <input
								onChange={setPoint(1)}
							/>
            </td>
          </tr>
        </tbody>
      </table>
			<button onClick={makePrediction}>Predict</button>
    </div>
	)
}

export default XOR