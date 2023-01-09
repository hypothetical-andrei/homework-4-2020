import { useEffect, useState } from 'react'
import RobotStore from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList () {
	const [robots, setRobots] = useState([])
	const store = new RobotStore()

	useEffect(() => {
		setRobots(store.getRobots())
		store.emitter.addListener('UPDATE', () => {
			setRobots(store.getRobots())
		})
	}, [])
	
	return (
		<div>				 
			{
				robots.map((e, i) => 
					<Robot item={e} key={i} />
				)
			}
		</div>
	)
}

export default RobotList
