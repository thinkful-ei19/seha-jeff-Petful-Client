import React from 'react';
import { connect } from 'react-redux';
import Pet from './pet';
import { fetchDog, adoptDog } from '../actions/dog';
import {adoptCat,fetchCat} from '../actions/cat'


export class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            cats:{
                imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
                imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
                name: 'Fluffy',
                sex: 'Female',
                age: 2,
                breed: 'Bengal',
                story: 'Thrown on the street'
              },
             dogs: {
                imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
                imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
                name: 'Zeus',
                sex: 'Male',
                age: 3,
                breed: 'Golden Retriever',
                story: 'Owner Passed away'
              }
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }
    
    render() {
        
        return (
            <div>
            <div className="cats">
                <Pet  {...this.props.cat} adoptPet={()=> this.props.dispatch(adoptCat())}/>
                </div>
                <div className="dogs">
                <Pet {...this.props.dog} adoptPet={() => this.props.dispatch(adoptDog())} />
            </div>
            </div>
        );
    }
}



const mapsStateToProps= (state) => ({
    cat: state.cat.data,
    dog: state.dog.data
})

export default connect(mapsStateToProps)(Dashboard);


