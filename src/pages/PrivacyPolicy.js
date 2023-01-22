import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Privacy Policy | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/privacy-policy/'
                />
                <meta
                    name='description'
                    content='View BlueSense Privacy Policy'
                />
                <meta
                    name='keywords'
                    content='BlueSense blog, bluesense, Business, Consulting, Startups, Intelligence, Privacy Policy'
                />
            </Helmet>
            <Container className='misc'>
                <h1>Privacy Policy</h1>
                <p>
                    BlueSense takes client privacy seriously. In this stead we
                    have provided a guideline for our policies in relation to
                    how we handle your information as you use our website.
                    BlueSense keeps everything simple; thus we have also used
                    simple terms and avoided legal jargons to make it easy to
                    understand.
                </p>
                <h2>What information do we collect?</h2>
                <p>
                    BlueSense collects information from you when you register on
                    our site or fill out a form. When registering on the
                    BlueSense site you may be asked to enter your name or email
                    address. You may however visit BlueSense site anonymously.
                </p>
                <h2>What do we use your information for?</h2>
                <p>
                    Any of the information we collect from you may be used in
                    one of the following ways:
                    <ul>
                        <li>To improve BlueSense website</li>
                        <li>To improve BlueSense customer service</li>
                        <li>To send periodic emails to BlueSense clientele</li>
                        <li>
                            To administer a contest, promotion, survey or other
                            site feature on the BlueSense website
                        </li>
                    </ul>
                    Note: If at any time you would like to unsubscribe from
                    receiving future emails, we include detailed unsubscribe
                    instructions at the bottom of each email.
                </p>
                <h2>Do we disclose any information to outside parties?</h2>
                <p>
                    BlueSense does not sell, trade, or otherwise transfer to
                    outside parties your personally identifiable information.
                    This does not include trusted third parties who assist us in
                    operating our website, conducting our business, or servicing
                    you, so long as those parties agree to keep this information
                    confidential. BlueSense may also release your information
                    when we believe release is appropriate to comply with the
                    law, enforce our site policies, or protect ours or others
                    rights, property, or safety.
                </p>
                <h2>Third-party links</h2>
                <p>
                    Occasionally, at our discretion, we may include or offer
                    third-party products or services on our website. These
                    third-party sites have separate and independent privacy
                    policies. We therefore have no responsibility or liability
                    for the content and activities of these linked sites.
                    Nonetheless, BlueSense seeks to protect the integrity of our
                    site and welcome any feedback about these sites.
                </p>

                <h2>Your Consent</h2>
                <p>
                    By using the BlueSense site you consent to our privacy
                    policy.
                </p>

                <h2>Changes to our Privacy Policy</h2>
                <p>
                    If BlueSense decides to change our privacy policy, we will
                    post those changes on this page. This policy was last
                    modified on 22. 01. 2023
                </p>
            </Container>
        </HelmetProvider>
    );
};

export default PrivacyPolicy;
