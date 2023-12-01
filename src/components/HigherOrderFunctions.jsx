import React from "react";
import { Component } from "react";
import "../App.css";

class HigherOrderFunctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const map2 = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>ID: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return map2;
  };

  filteredItems = () =>{
    const data1 = this.state.userData;
    const filteredData1 = data1.filter((item)=>item.user_type === 'Designer')
    const mappedItems1 = filteredData1.map(item => (
        <React.Fragment key={item.id}>
          <li className="list-elements">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </li>
        </React.Fragment>
      ));
  
      return mappedItems1;
  }

  nameStarts = () =>{
    const data2 = this.state.userData;
    const nameFilter = data2.filter((item)=>item.name.startsWith('J'))
    const mappedItems2 = nameFilter.map(item =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
    return mappedItems2
  }

  ageFilter = ()=>{
    const data3 = this.state.userData
    const ageFilt = data3.filter((item)=> item.age >=28  && item.age<=50)
    const mapAge = ageFilt.map(item =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ))
    return mapAge
  }

  expYears = ()=>{
    const data4 = this.state.userData
    const expyearFilt = data4.filter((item)=> item.user_type === 'Designer')
    const mapExp = expyearFilt.reduce((item, exp)=> item + exp.years,0)
    return mapExp
  }



  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>
        <h1>Display based on user type</h1>
        <div className="display-box1">
        <ul>{this.filteredItems()}</ul>
        </div>
        <h1>Filter all data starts with j </h1>
        <div className="display-box2">
        <ul>{this.nameStarts()}</ul>
        </div>
        <h1>Filter all data based on age greater than 28 and less than or equal to 50 </h1>
        <div className="display-box3">
        <ul>{this.ageFilter()}</ul>
        </div>
        <h1> FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
        <div className="display-box4">
        <ul>{this.expYears()}</ul>
        </div>
      </React.Fragment>
    );
  }

}

export default HigherOrderFunctions;
