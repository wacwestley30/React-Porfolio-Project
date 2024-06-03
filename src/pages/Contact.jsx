import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let errorMsg = '';
        if (!value) {
            errorMsg = `${name} is required.`;
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errorMsg = 'Please enter a valid email address.';
        }
        setErrors({
            ...errors,
            [name]: errorMsg
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `${key} is required.`;
            } else if (key === 'email' && !/\S+@\S+\.\S+/.test(formData[key])) {
                newErrors[key] = 'Please enter a valid email address.';
            }
        });
        if (Object.keys(newErrors).length === 0) {
            // Form is valid, handle submission here
            alert('Form submitted successfully');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <h1 className="my-4 d-flex justify-content-center justify-content-lg-start">Contact</h1>
            <div className="d-flex flex-column align-items-center align-items-lg-start">
                <p>
                    <a className="text-body-darkGreen" href="https://github.com/wacwestley30">
                        Github.com/wacwestley30
                    </a>
                </p>
                <p>
                    <a className="text-body-darkGreen" href="https://github.com/wacwestley30">
                        WestleyCervantes@Gmail.com
                    </a>
                </p>
                <p>
                    <a className="text-body-darkGreen" href="https://github.com/wacwestley30">
                        LinkedIn.com/WestleyCervantes
                    </a>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="nameInput" class="form-label d-flex justify-content-center justify-content-lg-start">Name</label>
                    <input
                        id="nameInput"
                        type="text"
                        name="name"
                        class="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="my-4">
                    <label for="emailInput" class="form-label d-flex justify-content-center justify-content-lg-start">Email</label>
                    <input
                        id="emailInput"
                        type="email"
                        name="email"
                        class="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="my-4">
                    <label for="messageInput" class="form-label d-flex justify-content-center justify-content-lg-start">Message</label>
                    <textarea
                        id="messageInput"
                        name="message"
                        class="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    ></textarea>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <div className="d-grid">
                    <button className="btn btn-green" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}