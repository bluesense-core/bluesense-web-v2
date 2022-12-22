import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../components/Contact/contact.css';
import { CiLocationArrow1 } from 'react-icons/ci';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
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

            <section id='contact'>
                <Container>
                    <h2>
                        Get in <span>Touch</span>
                    </h2>
                    <p>
                        Want to connect with <span>BlueSense</span>: to discuss
                        possible consulting engagements, please get in touch
                        with us via the info/form below.
                    </p>

                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Row className='mb-3'>
                            <Form.Group
                                as={Col}
                                md='6'
                                className='mb-md-0 mb-3'>
                                <Form.Label className='ms-3'>Name *</Form.Label>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Name'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>

                                <Form.Control.Feedback type='invalid'>
                                    Please provide a valid name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md='6'>
                                <Form.Label className='ms-3'>
                                    E-mail *
                                </Form.Label>
                                <Form.Control
                                    required
                                    type='email'
                                    placeholder='E-mail'
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type='invalid'>
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className='mb-3'>
                            <Form.Label className='ms-3'>Phone *</Form.Label>
                            <Form.Control
                                required
                                type='tel'
                                placeholder='Phone'
                            />

                            <Form.Text className='ms-3' muted>
                                Include your country code
                            </Form.Text>
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>

                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='mb-5'>
                            <Form.Label className='ms-3'>Message *</Form.Label>
                            <Form.Control
                                required
                                as='textarea'
                                rows={5}
                                placeholder='Message'
                            />

                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>

                            <Form.Control.Feedback type='invalid'>
                                Please provide a valid message.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className='d-grid gap-2'>
                            <Button type='submit' className='py-4'>
                                Send message
                                <CiLocationArrow1 className='arrow ms-2' />
                            </Button>
                        </div>
                    </Form>
                </Container>
            </section>
        </>
    );
};

export default Contact;
