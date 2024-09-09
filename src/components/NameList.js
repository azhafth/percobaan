import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Azha','Ghea','Riska','fara']
    const persons = [
        {
            id: 1,
            name: 'Azha',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ghea',
            age: 25,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Riska',
            age: 28,
            skill: 'React'
        }
    ];

    // Pastikan persons tidak kosong dan di-map dengan benar
    const nameList = names.map((name, index )=><h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList;
