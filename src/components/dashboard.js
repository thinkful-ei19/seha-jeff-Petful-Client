import React from 'react';
import { connect } from 'react-redux';
import Pet from './pet';
import { fetchDog, fetchCat } from './../actions';


export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCat('cat'));
        this.props.dispatch(fetchDog('dog'));
    }
    
    render() {
        return (
            <div>
                <Pet breed={this.state.adoptPet} adoptPet={()=> this.adoptCat }/>
                {/* <Pet breed={this.state.adoptDog} adoptPet={() => this.dispatch.adoptPet} /> */}
            </div>
        );
    }
}





export default connect()(Dashboard);


