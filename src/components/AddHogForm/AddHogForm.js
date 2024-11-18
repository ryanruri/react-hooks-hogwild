import React, { useState } from 'react';

const AddHogForm = ({ addHog }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState('');
    const [greased, setGreased] = useState(false);
    const [medal, setMedal] = useState('');
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name,
            specialty,
            weight: parseFloat(weight), // Convert weight to a number
            greased,
            'highest medal achieved': medal,
            image
        };
        addHog(newHog); // Call the addHog function passed as a prop
        // Reset form fields
        setName('');
        setSpecialty('');
        setWeight('');
        setGreased(false);
        setMedal('');
        setImage('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            </label>
            <label>
                Specialty:
            <input
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="Specialty"
                required
            />
            </label>
            <label>
                Weight:
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Weight"
                required
            />
            </label>
          
            <label>
                <input
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />
                Greased
            </label>
            <label>
                Medal:
            <input
                value={medal}
                onChange={(e) => setMedal(e.target.value)}
                placeholder="Highest Medal Achieved"
            />
            </label>
            <label>
                Image URL:
            <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="image"
            required 
            />
            </label>
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default AddHogForm;