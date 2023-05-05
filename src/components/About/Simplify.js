import React from 'react';
import './simplify.css';
import challenge from '../../assets/images/about-img/challenge.svg';
import { Container, Image } from 'react-bootstrap';

const Simplify = () => {
    return (
        <section className='simplify'>
            <Container className='d-flex flex-lg-row flex-column-reverse justify-content-between align-items-start'>
                <Image
                    src={challenge}
                    className='d-block m-lg-0 mx-auto mt-5'
                />

                <div className='details'>
                    <div className='blue mb-3'></div>
                    <h2>
                        Simplify <span>challenges</span>
                    </h2>
                    <p>
                        We approach each problem from a unique perspective, as
                        we understand that two clients can be in the same
                        industry, having similar issues but different problems.
                        <br />
                        <br />
                        In this stead, we begin each solve by taking the time to
                        find out what the exact issues; only when we fully
                        understand this, do we approach the problem. Our vast
                        industry and start-up expertise including predictive
                        analytics software solutions and emerging technology,
                        allows us to address problems in unique ways that no one
                        else can.
                        <br />
                        <br />
                        We provide advisory, strategy and learning services of
                        the highest quality to help build stronger teams, equip
                        executives with the necessary skills to handle problems,
                        and guide companies to reach their set goals. Our
                        clients are fully involved in the processes since we
                        provide personalised solutions to the problems.
                        <br />
                        <br />
                        We have an enhanced capacity to implement change, build
                        capacity, and help organisations transform themselves.
                        Combining the full scope of our offer today with the
                        strengths of our clients will spark and drive effective
                        and long lasting change.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default Simplify;
