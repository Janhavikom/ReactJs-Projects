import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component {
    // state is global object that contains the most imp info related to the specific component 
    state = {advice:''};

    componentDidMount(){
this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then( (response) =>{
// console.log(response.data.slip.advice)
const {advice} = response.data.slip;
this.setState({advice});
        })
        .catch( (error) =>{

        });
    }

render(){
    const { advice } = this.state;
    return(
       
        <div className='app'>
            
            <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice}>
                <span>
                    GIVE ADVICE
                </span>
            </button>
            </div>
        </div>
    );
}
}

export default App;