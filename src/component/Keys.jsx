import React from 'react'
import ReactDOM from "react-dom";

   
// var name = prompt("name");
//      var age =prompt("gender");
//     // console.log(age);
//      var element =<h1>hello,{name}.Welcome {(age=='female')? 'girls':'boys'} to <b>home</b>.</h1>;

//      var numbers=[1,2,3,4,5];
//      const updateNums=numbers.map((numbers)=>{
        
//          return <li>{numbers}</li>;
//      })

    //  console.log(updateNums);
// 
class App extends React.Component {

    state = { inputValue: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState({ inputValue: 'Hello World!' });
    }

    render() {

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label> Enter text </label>
                    <input type="text"
                        value={this.state.inputValue}
                        onChange={(e) => this.setState(
                            { inputValue: e.target.value })} />
                </form>
                <br />
                <div>
                    Entered Value: {this.state.inputValue}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.querySelector('#root'));
export default Keys