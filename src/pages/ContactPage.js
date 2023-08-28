import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {

    return (
        <>
            <Container>
                <SubHeader current='Contact Us' />
                <Row className='row-content align-items-center'>
                    <Col sm='4'>
                        <h5>Our Address</h5>
                        <address>
                            1 Bootcamp Way
                            <br />
                            Deep River, CT 06417
                            <br />
                            U.S.A.
                        </address>
                    </Col>
                    <Col>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:!18605551234'
                        >
                            <i className='fa fa-phone' /> 1-860-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:fakeemail@fakeemail.co'
                        >
                            <i className='fa fa-envelope-o' /> info@BootCamping.com
                        </a>

                    </Col>
                </Row>
            </Container>
            <ContactForm />
        </>
    )
};

export default ContactPage;