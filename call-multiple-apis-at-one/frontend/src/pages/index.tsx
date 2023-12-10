import axios from 'axios';

const Home = () => {
	const btnClicked = async () => {
		const promises = [
			axios.get('http://localhost:4000'),
			axios.get('http://localhost:4000/a'),
			axios.get('http://localhost:4000/b'),
			axios.get('http://localhost:4000/c'),
			axios.get('http://localhost:4000/d'),
		];

		const responses = await Promise.all(promises);
		for (let response of responses) {
			console.log(response.data);
		}
	};

	return (
		<div>
			<div>
				<button
					onClick={btnClicked}
					style={{ backgroundColor: 'orange', width: '70px' }}
				>
					Click me
				</button>
			</div>
		</div>
	);
};

export default Home;
