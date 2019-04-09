import React from 'react'
import './dashboard.css'

class Dashboard extends React.Component {
	state = { 
		toggleClass: ""
	 }

	 toggleClassName = e => {
		 e.preventDefault();
		 this.setState({ toggleClass: 'active' })
	 }

	 closeDrawer = e => {
		 this.setState({ toggleClass: ''})
	 }
	render() { 
		return ( 
			<React.Fragment>
				<div className="grid-container">
					<header className="header">
						<div className={`menu-icon`} onClick={this.toggleClassName}>
							<i className="fas fa-bars"></i>
						</div>
						<div className="header__search"> Search...</div>
						<div className="header__avatar">
							<i class="fas fa-user"></i>
						</div>
					</header>
					<aside className={`sidenav ${this.state.toggleClass}`}>
						<div className="sidenav__close-icon" onClick={this.closeDrawer}>
							<i className="fas fa-times" aria-hidden="true"></i>
						</div>
						<ul className="sidenav__list">
							<li className="sidenav__list-item">Item One</li>
							<li className="sidenav__list-item">Item Two</li>
							<li className="sidenav__list-item">Item Three</li>
							<li className="sidenav__list-item">Item Four</li>
							<li className="sidenav__list-item">Item Five</li>
						</ul>
					</aside>
					<main className="main">
						<div className="main-header">
							<div className="main-header__heading">Hello User</div>
							<div className="main-header__updates">Recent Items</div>
						</div>

						<div className="main-overview">
							<div className="overviewcard">
								<div className="overviewcard__icon">Overview</div>
								<div className="overviewcard__info">Card</div>
							</div>
							<div className="overviewcard">
								<div className="overviewcard__icon">Overview</div>
								<div className="overviewcard__info">Card</div>
							</div>
							<div className="overviewcard">
								<div className="overviewcard__icon">Overview</div>
								<div className="overviewcard__info">Card</div>
							</div>
							<div className="overviewcard">
								<div className="overviewcard__icon">Overview</div>
								<div className="overviewcard__info">Card</div>
							</div>
						</div>

						<div className="main-cards">
							<div className="card">Card</div>
							<div className="card">Card</div>
							<div className="card">Card</div>
						</div>
					</main>
					<footer className="footer">
						<div className="footer__copyright">&copy; 2019 Facto</div>
						<div className="footer__signature">Made with love by Dave</div>
					</footer>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default Dashboard;