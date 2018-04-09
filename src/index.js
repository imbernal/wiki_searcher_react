import React, { Component } from 'react';
import ReactDOM from 'react-dom';
window.$ = window.jQuery = require("jquery");

//components

import Header from './components/header';
import WikiForm from './components/wikiform';

export default class App extends Component{

  render(){
    return(

				<div className="col-md-6">
					<div className="">
            <Header />
						<br/>
						<WikiForm/>
					</div>
				</div>

    );

  }

}

ReactDOM.render(<App /> , document.querySelector('.container'));
