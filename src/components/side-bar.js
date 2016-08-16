import React from 'react';
import ReactList from 'react-list'; 
import { connect } from 'react-redux';

class projectList extends React.Component {
  constructor() {
    super();
  }

  renderItem = (index, key) => {
    return(
        <div
        key = {key}>
          {this.props.projects[index].name}
        </div>
      )
  }

  render(){
    return(
        <div className="block side-bar">
          <ReactList
            itemRenderer = {this.renderItem.bind(this)}
            length = {this.props.projects.length}
            type = 'simple' 
          />
        </div>
      );
  }
}

function mapStateToProps (state){
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch){
  return 
}

export default connect(mapStateToProps)(projectList);