import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../components/Contact/contact.css';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
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
                        className='mt-5'
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Row className='mb-4'>
                            <Col md='6'>
                                <FloatingLabel className='' label='Name'>
                                    <Form.Control
                                        required
                                        type='text'
                                        placeholder='name'
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
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
                                        required
                                        type='email'
                                        placeholder='email'
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
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
                                            required
                                            type='tel'
                                            placeholder='phone'
                                        />

                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid phone number.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </div>

                                <div>
                                    <FloatingLabel className='' label='Subject'>
                                        <Form.Control
                                            required
                                            type='text'
                                            placeholder='subject'
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>
                                            Please provide a valid subject.
                                        </Form.Control.Feedback>
                                    </FloatingLabel>
                                </div>
                            </Col>

                            <Col md='6' className='m-md-0 mt-4'>
                                <FloatingLabel className='' label='Message'>
                                    <Form.Control
                                        required
                                        as='textarea'
                                        placeholder='message'
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
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
                    </Form>
                </Container>
            </main>
        </HelmetProvider>
    );
};

export default Contact;
