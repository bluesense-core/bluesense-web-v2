import React, { useState, useRef } from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import '../components/Contact/contact.css';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [text, setText] = useState('');
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            emailjs
                .sendForm(
                    'service_ndabn9g',
                    'template_envdqpg',
                    formRef.current,
                    'gFB4e8ztMi_R91bw4'
                )

                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
            setText(
                'Thank you for reaching out, your inquiry has been sent! We will get back to you soon.'
            );

            setTimeout(() => {
                setText('');
            }, 4000);

            setTimeout(() => {
                window.location.reload();
            }, 4500);
        }

        setValidated(true);
    };
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Contact | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/contact/'
                />
                <meta name='description' content='Contact BlueSense' />
                <meta
                    name='keywords'
                    content='Business, bluesense, BlueSense, Consulting, Startups, Intelligence, Strategy, Consult, Contact'
                />
            </Helmet>

            <main id='contact'>
                <Container>
                    <h2>Contact</h2>
                    <p>
                        Want to connect with <span>BlueSense</span>: to discuss
                        possible consulting engagements,{' '}
                        <br className='d-lg-block d-none' />
                        please get in touch with us via the info/form below.
                    </p>

                    <Form
                        ref={formRef}
                        className='mt-5'
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Row className='mb-4'>
                            <Col md='6'>
                                <FloatingLabel className='' label='Name'>
                                    <Form.Control
                                        className='txt'
                                        required
                                        type='text'
                                        placeholder='name'
                                        name='user_name'
                                    />

                                    <Form.Control.Feedback type='invalid'>
                                        Please provide a valid name.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>

                            <Col md='6' className='m-md-0 mt-4'>
                                <FloatingLabel
                                    className=''
                                    label={
                                        <span>
                                            Email{' '}
                                            <span className='d-sm-none d-inline'>
                                                address
                                            </span>
                                        </span>
                                    }>
                                    <Form.Control
                                        className='txt'
                                        required
                                        type='email'
                                        placeholder='email'
                                        name='user_email'
                                    />

                                    <Form.Control.Feedback type='invalid'>
                                        Please provide a valid email.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className='mb-4'>
                            <Col md='6'>
                                <div className='mb-4'>
                                    <FloatingLabel
                                        className=''
                                        label={
                                            <span>
                                                Phone{' '}
                                                <span className='d-sm-none d-inline'>
                                                    number
                                                </span>
                                            </span>
                                        }>
                                        <Form.Control
                                            className='txt'
                                            required
                                            type='tel'
                                            placeholder='phone'
                                            name='user_phone'
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid phone number.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </div>

                                <div>
                                    <FloatingLabel className='' label='Subject'>
                                        <Form.Control
                                            className='txt'
                                            required
                                            type='text'
                                            placeholder='subject'
                                            name='subject'
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid subject.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </div>
                            </Col>

                            <Col md='6' className='m-md-0 mt-4'>
                                <FloatingLabel className='' label='Message'>
                                    <Form.Control
                                        className='txt'
                                        required
                                        as='textarea'
                                        placeholder='message'
                                        name='message'
                                    />

                                    <Form.Control.Feedback type='invalid'>
                                        Please provide a valid message.
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Button
                            type='submit'
                            className='d-block rounded-pill py-sm-2 py-3 ms-sm-auto'>
                            Send
                        </Button>

                        <p className='mt-md-3 mt-4 contact-text text-md-end'>
                            {text}
                        </p>
                    </Form>
                </Container>
            </main>
        </HelmetProvider>
    );
};

export default Contact;
