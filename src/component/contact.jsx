import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, subject, message });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#111', color: '#FFF', fontSize: '80px' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
                <p>Feel free to contact me anytime</p>
                <h1>Get in Touch</h1>
                <span></span>
            </div>

            <div style={{ display: 'flex', padding: '300px 0 0 600px' }}>
                <form onSubmit={handleSubmit} style={{ margin: '200px' }}>
                    <h3 style={{ fontSize: '90px', color: 'white' }}>Message me</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            fontSize: '70px',
                            backgroundColor: '#222121',
                            margin: '30px',
                            border: 'none',
                            padding: '30px 320px 30px 30px',
                            color: 'white',
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            fontSize: '70px',
                            backgroundColor: '#222121',
                            margin: '30px',
                            border: 'none',
                            padding: '30px 320px 30px 30px',
                            color: 'white',
                        }}
                    />
                    <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ fontSize: '70px', backgroundColor: '#222121', margin: '30px', border: 'none', padding: '30px', color: 'white' }}
                    />
                    <textarea
                        cols="60"
                        rows="5"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ fontSize: '70px', backgroundColor: '#222121', margin: '30px', border: 'none', padding: '30px', color: 'white' }}
                    ></textarea>
                    <input
                        type="submit"
                        value="Send Message"
                        style={{
                            fontSize: '70px',
                            margin: '30px',
                            border: 'none',
                            padding: '40px 80px',
                            color: 'white',
                            borderRadius: '90px',
                            backgroundColor: '#009e66',
                            cursor: 'pointer',
                        }}
                    />
                </form>

                <div className="contact-info" style={{ color: '#9f9f9f', marginTop: '12rem' }}>
                    <div className="info" style={{ fontSize: '60px', width: '50%' }}>
                        Always available for freelance work if the right project comes along. Feel free to contact me!
                    </div>
                    <div className="contact-icon" style={{ color: '#009e66' }}>
                        <div className="icon" style={{ paddingTop: '100px' }}>
                            <i className="fa-sharp fa-solid fa-phone" style={{ marginBottom: '150px', fontSize: '120px' }}></i>
                            <span id="line"></span>
                            <div className="contact" style={{ color: '#9f9f9f', paddingLeft: '500px', position: 'absolute', top: '1500px' }}>
                                <div className="title" style={{ color: 'white', fontSize: '70px', marginTop: '100px' }}>Name</div>
                                <span className="descr" style={{ fontSize: '60px' }}>Florence</span>
                                <div className="title" style={{ color: 'white', fontSize: '70px', marginTop: '100px' }}>Location</div>
                                <span className="descr" style={{ fontSize: '60px' }}>4155 Kigali, Rwanda</span>
                                <div className="title" style={{ color: 'white', fontSize: '70px', marginTop: '100px' }}>Call me</div>
                                <span className="descr" style={{ fontSize: '60px' }}>0787300479</span>
                                <div className="title" style={{ color: 'white', fontSize: '70px', marginTop: '100px' }}>Email Me</div>
                                <span className="descr" style={{ fontSize: '60px' }}>florenceniyomukesha@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
