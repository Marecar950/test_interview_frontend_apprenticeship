import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div className="mt-3">
            <p>You clicked {count} times</p>
            <Button variant="primary" className="me-2" onClick={() => setCount(count + 1)}>Increment</Button>
            <Button variant="secondary" onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
    );
}

export default Counter;