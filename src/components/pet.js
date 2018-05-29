import React from 'react';

import {adoptCat} from './../actions/cat';
import { adoptDog } from './../actions/dog'


export default function Pet(props) {
    console.log(props)
   if(props.breed === undefined){
    return (
        <div className="noPets">
        No More Pets Sorry :(
            </div>
    )
   }
   else { return (
        <div>
            <section className="pet">
            <h2 className="pet-banner-name">
                {props.name}
            </h2>
            <img className="petImage" src={props.imageURL} alt={props.imageDescription} />
            <main>
                <dl className="pets-display">
                    <dt>Sex</dt>
                    <dd>{props.sex}</dd>
                    <dt>Age</dt>
                    <dd>{props.age}</dd>
                    <dt>Breed</dt>
                    <dd>{props.breed}</dd>
                    <dt>Story</dt>
                    <dd>{props.story}</dd>
                </dl>
                <br/>
                    <button className="adoptPet" onClick={() => props.adoptPet()}>
                        Adopt {props.name}
                    </button>
            </main>
            </section>
        </div>
    )
}
}
