import React, { Component } from 'react';

import List from './list';

class WikiForm extends Component{

  constructor(props){
    super(props);

    this.state = { result: [] };

  }

  onInputChange(event){
    let searchValue = event.target.value;

    $.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchValue + "&prop=info&inprop=url&utf8=&format=json",
			dataType: 'jsonp',
			success: function(response) {
				this.setState({ result: response.query.search })
			}.bind(this)
		});
  }


  render(){

    return(

      <div>

					<div className="input-group">
						<input ref="keyword" type="text" onChange={this.onInputChange.bind(this)} className="form-control input-lg search-input" placeholder="Search...."/>
						<span className="input-group-btn">
							<button type="button" className="btn btn-success btn-lg">
								Search
							</button>
						</span>
					</div>

				<br/>

        <List lists={this.state.result}/>

			</div>

    );

  };

};

export default WikiForm;
