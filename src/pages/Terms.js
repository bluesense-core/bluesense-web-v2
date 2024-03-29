import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../components/misc.css';

const Terms = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Terms and Conditions | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/terms-and-conditions/'
                />
                <meta
                    name='description'
                    content="View BlueSense's Terms and Conditions"
                />
                <meta
                    name='keywords'
                    content='BlueSense blog, bluesense, Business, Consulting, Startups, Intelligence, Terms and Conditions '
                />
            </Helmet>
            <Container className='misc'>
                <h1 className='mb-3'>Terms and Conditions</h1>
                <p>
                    Please read these Terms and Conditions carefully before
                    using the{' '}
                    <a href='https://www.bluesense.co'>
                        https://www.bluesense.co
                    </a>{' '}
                    website operated by BlueSense. Your access to and use of the
                    Service is conditioned on your acceptance of and compliance
                    with these Terms. These Terms apply to all visitors, users
                    and others who access or use the Service. By accessing or
                    using the Service you agree to be bound by these Terms. If
                    you disagree with any part of the terms then you may not
                    access the Service.
                </p>
                <h2 className='mb-3'>Links To Other Websites</h2>
                <p>
                    Our Service may contain links to third-party web sites or
                    services that are not owned or controlled by BlueSense.
                    BlueSense has no control over, and assumes no responsibility
                    for, the content, privacy policies, or practices of any
                    third party web sites or services. You further acknowledge
                    and agree that BlueSense shall not be responsible or liable,
                    directly or indirectly, for any damage or loss caused or
                    alleged to be caused by or in connection with use of or
                    reliance on any such content, goods or services available on
                    or through any such web sites or services
                </p>
                <h2 className='mb-3'>Changes</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. If a revision is material
                    we will try to provide at least 30 days' notice prior to any
                    new terms taking effect. What constitutes a material change
                    will be determined at our sole discretion.
                </p>
                <h2 className='mb-3'>Contact</h2>
                <p>
                    If you have any questions about these terms, please contact
                    us.
                </p>
                <p>Last Updated: 22. 01. 23</p>
            </Container>
        </HelmetProvider>
    );
};

export default Terms;
