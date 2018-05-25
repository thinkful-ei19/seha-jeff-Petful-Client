import React from 'react';
import{connect} from 'react-redux';
import {adoptCat} from './../actions/cat';
import { adoptDog } from './../actions/dog'


function Pet(props) {
   
    return (
        <div>
            <section className="pet">
            <h2>
                {props.pet.name}
            </h2>
            <img src={props.pet.imageURL} alt={props.pet.imageDescription} />
            <main>
                <dl>
                    <dt>Sex</dt>
                    <dd>{props.pet.sex}</dd>
                    <dt>Age</dt>
                    <dd>{props.pet.age}</dd>
                    <dt>Breed</dt>
                    <dd>{props.pet.breed}</dd>
                    <dt>Story</dt>
                    <dd>{props.pet.story}</dd>
                </dl>
                    <button className="adoptPet" onClick={() => props.adoptPet}>
                        Adopt {props.pet.name}
                    </button>
            </main>
            </section>
        </div>
    )
}
const mapsStateToProps= (state) => ({
    cat: state.cat,
    dog: state.dog
})

export default connect (mapsStateToProps) (Pet) 