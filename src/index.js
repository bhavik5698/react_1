import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data={
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
}


class Mydata extends React.Component {
  constructor(props) {
  super(props);
  this.state = { username: '' ,
eng : 0, maths : 0 ,ss : 0 };
    }

    nameChange =(e)=>{
      this.setState({username: e.target.value});
    this.setState({ name : e.target.value })
}
    carName =(e)=> {
   this.setState({ car : e.target.value})
}

eng =(e)=> {
this.setState({ eng : e.target.value})
}
maths =(e)=> {
this.setState({ maths : e.target.value})
}
ss =(e)=> {
this.setState({ ss : e.target.value})
}

 total=(eng,maths,ss)=> {
      var total=eng + maths + ss

    return( console.log("total  "+total ))
            }

  change =(e)=>{
      document.body.style.backgroundColor = e.target.value

    }



  load = () =>(

    console.log ("name: " + this.state.name),
    console.log ("car " + this.state.car),
    console.log ("english " + this.state.eng),
    console.log ("maths " + this.state.maths),
    console.log ("social since " + this.state.ss),
    this.total(this.state.eng,this.state.maths,this.state.ss)
  )

    render() {

    return(
      <section>
        <div>
        <form>
          <h1>Hello {this.state.username}</h1>
            <p>Enter your name:</p>
            <input type="text" onChange={this.nameChange} />
            <p>Enter your favorite color</p>
            <input type="color" id="bgcolor"  onChange={this.change}/>
            <p>Enter your favorite car</p>
            <input type="text" onChange={this.carName}/>
            <p>Enter your english marks:</p>
            <input type="number" onChange={this.eng} />
            <p>Enter your maths marks:</p>
            <input type="number" onChange={this.maths} />
            <p>Enter your social since marks:</p>
            <input type="number" onChange={this.ss} />
          <p>  <button type="button" onClick={this.load}>Submit </button></p>
    </form>
        </div>

      </section>
    )

  }

}

class Car extends React.Component {
  render() {
    const{brand,model,color,year}=this.props
    return (
      <div>
        <h1>My {brand}</h1>
        <p>
          It is a {color} " " {model} from {year}.
        </p>
      </div>
    );

  }
}

ReactDOM.render(
  <Mydata />,document.getElementById('root')
)
ReactDOM.render(
  <Car
  brand={data.brand}
  color={data.color}
  model={data.model}
  year={data.year}
/>,
  document.getElementById('car')
)
serviceWorker.unregister();
