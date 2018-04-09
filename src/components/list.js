import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { detail: '' };
  }


  render(){
  

    var lists = this.props.lists.map((list) => {
			let link = "https://en.wikipedia.org/wiki/" + list.title.replace(/ /g, "_");
			return <li key={list.timestamp} className="list-group-item">
				<h4>
					<a href={link} target="_blank">
						{list.title}
					</a>
				</h4>
				<span dangerouslySetInnerHTML={{__html: list.snippet }}></span>
			</li>
		})

    return(
      <div>
        <ul className="list-group">
        {lists}
        </ul>

        <div id="details">
          <div className="body">
              <iframe id="detailsiFrame" src={this.state.detail} frameborder="0"></iframe>
          </div>
        </div>
        </div>

    );

};

};


export default List;
