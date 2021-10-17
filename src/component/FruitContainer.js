import React from 'react'
import { connect } from 'react-redux'
import {Button} from 'reactstrap'
import { buyFruit } from '../Redux/Fruit/fruitAction'

function FruitContainer(props) {
    console.log(props)
    return (
        <div>
           <h1>Buy Fruits - {props.Number_Of_Fruits}</h1> 
           <Button color="primary" outline onClick={props.buyFruit}>Fruits</Button>
        </div>
    )
}

//In below function now whatever props fruitContainer is receiving it will receive an extra property which is numberoffruits
const mapStateToProps = (states)=>{
    console.log(states);
    return{
        Number_Of_Fruits: states.Number_Of_Fruits
    }
}
    //task 1 : defining statetoprops

// In below function now whatever props fruitContainer is receiving it will recieve an extre prop which dipatches the action in this cae it is buyfruit
const mapDispatchToProps = (dispatch)=>{
    return{
        buyFruit: ()=> dispatch(buyFruit())
    }
}// task 2: dispatching state to props

export default connect(mapStateToProps,mapDispatchToProps)(FruitContainer)
