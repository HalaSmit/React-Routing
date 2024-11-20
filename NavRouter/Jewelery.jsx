import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Jewelery() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((data) => setState(data));
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Jewelery Collection</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {state.map((el, i) => (
                    <li
                        key={i.id}
                        style={{
                            marginBottom: '10px',
                            border: '1px solid #ddd',
                            padding: '10px',
                            textAlign: 'center',
                        }}
                    >
                        <Link to={`/ProductDetail/${el.id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>
                            {el.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
