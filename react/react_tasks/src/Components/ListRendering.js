import React from 'react';

function ListRendering() {

    const names = ['Alice', 'Bob', 'Charlie', 'David'];

    return(
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        <p>List of names</p>
                        {names.map((name, index) => (
                            <li key={index} className="list-group-item">{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListRendering;