import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeName } from '../store/profile/actions';

export const Profile = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeName(value));

        setValue('');
    };

    return (
        <>
            <div className="container">
                <div>This is the profile page</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleChange} />
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}