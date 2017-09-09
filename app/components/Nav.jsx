var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass ({

		render: function () {
		 return (
   	<div className="top-bar">
   		<div className="top-bar-left">
   			<ul className="menu">
   			<li className="menu-text">Timer App</li>
   			<li>
   				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Timer</IndexLink>
   			</li>
   			<li>
   			 <Link to="/coutdown" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Coutdown</Link>
   			</li>
   			

   			</ul>
   		</div>

   		<div className="top-bar-right">
   		 <ul className="menu">
           <li className="menu-text">
           Created by<a href="https://github.com/talanovartem" target="_blank"> Artem Talanov
           </a>
           </li>
           </ul>

   		</div>
   	</div>
      
      );	
		}

  
});

module.exports = Nav;
