import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class EvidenceBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {isFound: false};
    }

     handleClick = () => {
         this.setState((state, props) => {
             let found=!state.isFound;
             props.onEvidenceChange?.call(this, found);
             return {isFound: found}
         });
    }

    render() {
        return (
            <>
              <Button variant={this.state.isFound ? 'danger' : 'outline-info'} onClick={this.handleClick}>{this.props.children}{this.state.comment}</Button>
           
          </>   
        )
    }
}
