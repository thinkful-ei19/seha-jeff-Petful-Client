import React from 'react';

import {adoptCat} from './../actions/cat';
import { adoptDog } from './../actions/dog'


export default function Pet(props) {
   
    return (
        <div>
            <section className="pet">
            <h2>
                {props.name}
            </h2>
            <img src={props.imageURL} alt={props.imageDescription} />
            <main>
                <dl>
                    <dt>Sex</dt>
                    <dd>{props.sex}</dd>
                    <dt>Age</dt>
                    <dd>{props.age}</dd>
                    <dt>Breed</dt>
                    <dd>{props.breed}</dd>
                    <dt>Story</dt>
                    <dd>{props.story}</dd>
                </dl>
                    <button className="adoptPet" onClick={() => props.adoptPet()}>
                        Adopt {props.name}
                    </button>
            </main>
            </section>
        </div>
    )
}
