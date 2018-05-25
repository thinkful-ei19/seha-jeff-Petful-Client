import React from 'react';
import { connect } from 'react-redux';
import Pet from './pet';
import { fetchDog, fetchCat } from './actions/index';

export class Dashboard extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }
    
    render() {
        return (
            <div>
                <Pet breed={props.catToAdopt} onAdoptPet={onAdoptPet} />
                <Pet breed={props.dogToAdopt} onAdoptPet={onAdoptPet} />
            </div>
        );
    }
}

export default Dashboard;

const mapStateToProps = state => {
    console.log('STATE', state);
    return {
        cat: state.cat,
        dog: state.dog
    };
};

export default connect(mapStateToProps)(App);


