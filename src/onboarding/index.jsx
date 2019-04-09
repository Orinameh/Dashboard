import React from 'react';
import './onboard.css'

class Index extends React.Component {

	state = {
		activeRightPanel: "",
		activeLeftPanel: "",
	}

	addPanelActive = e => {

		e.preventDefault();
		this.setState({...this.state, activeRightPanel: "right-panel-active"})
	}

	removePanelActive = e => {
		e.preventDefault();
		this.setState({...this.state, activeRightPanel: ""})

	}

	navigate = e => {
		e.preventDefault();
		this.props.history.push("/dashboard")
	}

	render() {
		console.log(this.state)
		const { activeRightPanel} = this.state;
		return (
		<React.Fragment>
			<div className={`container ${this.state.activeRightPanel}`}>
				<div className="container__signup container--form">
					<div className="formBg">
						<h1>Create Account</h1>
						<div className="container__social">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your email for registration</span>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button onClick={e => this.navigate(e)}>Sign Up</button>
					</div>
				</div>
				<div className="container__signin container--form">
					<div className="formBg">
							<h1>Sign In</h1>
							<div className="container__social">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
								<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
							</div>
							<span>or use your account</span>
							<input type="email" placeholder="Email" />
							<input type="password" placeholder="Password" />
							<a href="#">Forgot your password?</a>
							<button onClick={e => this.navigate(e)}>Sign In</button>
					</div>
				</div>
				<div className="container__overlay">
					<div className="overlay">
					{
						activeRightPanel === 'right-panel-active'
						&&
						<div className="overlay__panel overlay__panel--left" style={{transform: "translateX(100%)"}}>
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button className={`overlay__button`} onClick={e => this.removePanelActive(e)}>Sign In</button>
					</div>
					}

						{
							activeRightPanel !== 'right-panel-active'
							&&
							<div className="overlay__panel overlay__panel--right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start your journey with us</p>
							<button className={`overlay__button`} onClick={this.addPanelActive}>Sign Up</button>
						</div>
						}
					</div>
				</div>
			</div>
		</React.Fragment>
		);
	}
}

export default Index;