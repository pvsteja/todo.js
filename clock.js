class Clock extends React.Component {
	constructor(props) {
		super(props);
		console.log("clockcon sctuctor")
		this.state = {date: new Date()};
	}
	componentDidMount() {
		console.log("mount");
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		con.log("unmount");
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div> 
			<h1> Hello, World! </h1>
			<h2> {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );