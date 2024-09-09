import React from 'react';

function Person({person,key }) {
    if (!person) {
        return null; // Atau bisa menampilkan pesan error jika perlu
    }

    return (
        <div>
            <h2>
                I am {person.name}, {person.age} years old and I know {person.skill}.
            </h2>
        </div>
    );
}

export default Person;
