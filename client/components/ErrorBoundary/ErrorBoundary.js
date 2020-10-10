import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidMount(error,data){
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops.. there is Error in your input</h1>
        }
        return this.props.children

    }
}

export default ErrorBoundary;
