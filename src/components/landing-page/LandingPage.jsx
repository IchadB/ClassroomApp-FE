import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import './LandingPage.css';

const LandingPage = () => {
	const location = useLocation();
	return location.pathname === '/login' ||
		location.pathname === '/layout' ? null : (
		<div>
			<header className='landing__page--header'>
				<Navbar expand='lg'>
					<Container fluid>
						<Navbar.Brand href='#'>KodeVamp's Classroom App</Navbar.Brand>
						<Navbar.Toggle aria-controls='navbarScroll' />
						<Navbar.Collapse id='navbarScroll'>
							<Nav
								className='me-auto my-2 my-lg-0'
								style={{ maxHeight: '100px' }}
								navbarScroll
							>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#about'>About</Nav.Link>
								<Nav.Link href='#users'>Users</Nav.Link>
							</Nav>
							<Form className='d-flex'>
								<Button variant='outline-warning'>
									<Link to='/login'>Login</Link>
								</Button>
								<Button variant='outline-warning'>
									<Link to='/register'>Register</Link>
								</Button>
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
			<main>
				<div className='carousel'>
					<Carousel id='home'>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src={require('../../assets/images/img1.jpg')}
								alt='First slide'
							/>
							<Carousel.Caption>
								<h3>Educational Tool</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src={require('../../assets/images/img2.jpg')}
								alt='Second slide'
							/>

							<Carousel.Caption>
								<h3>For Teachers and Student</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className='d-block w-100'
								src={require('../../assets/images/img3.jpg')}
								alt='Third slide'
							/>

							<Carousel.Caption>
								<h3>User Friendly</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl
									consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<Container>
					<section id='about'>
						<Row className='px-4 my-5'>
							<Col sm={7}>
								<Image
									src={require('../../assets/images/about.jpg')}
									fluid
									rounded
									className=''
								/>
								;
							</Col>
							<Col sm={5}>
								<h1 classes='font-weight-light'>About the App</h1>
								<p class='mt-4'>
									KodeVamp's Classroom App is a web-based learning management
									system, or LMS. It is used by learning institutions,
									educators, and students to access and manage online course
									learning materials and communicate about skill development and
									learning achievement.{' '}
								</p>

								<p>
									KodeVamp's Classroom App includes a variety of customizable
									course creation and management tools, course and user
									analytics and statistics, and internal communication tools.{' '}
								</p>

								<p>
									Institutions may provide users with a KodeVamp account, or
									individual users can try the free version by signing up for
									their own account.
								</p>
							</Col>
						</Row>
					</section>
					<section id='users'>
						<Row>
							<Card className='text-center bg-secondary text-white my-5 py-4'>
								<Card.Body>Users</Card.Body>
							</Card>
						</Row>
					</section>
					<Row>
						<CardGroup>
							<Card>
								<Card.Img
									variant='top'
									src={require('../../assets/images/school1.jpg')}
								/>
								<Card.Body>
									<Card.Title>Schools</Card.Title>
									<Card.Text>
										Used by teachers with a large amount of students in one
										class.
									</Card.Text>
									<Button variant='outline-warning'>
										<Link className='landing__page--btn' to='/register'>
											Register
										</Link>
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
							<Card>
								<Card.Img
									variant='top'
									src={require('../../assets/images/homeschool.jpg')}
								/>
								<Card.Body>
									<Card.Title>Home School</Card.Title>
									<Card.Text>
										Used by concentrated learning with 1 on 1 tutoring.
									</Card.Text>
									<Button variant='outline-warning'>
										<Link className='landing__page--btn' to='/register'>
											Register
										</Link>
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
							<Card>
								<Card.Img
									variant='top'
									src={require('../../assets/images/technicalcourse.jpg')}
								/>
								<Card.Body>
									<Card.Title>Techinical Courses</Card.Title>
									<Card.Text>
										Used for focused learning of particular profession.
									</Card.Text>
									<Button variant='outline-warning'>
										<Link className='landing__page--btn' to='/register'>
											Register
										</Link>
									</Button>
								</Card.Body>
								<Card.Footer>
									<small className='text-muted'>Last updated 3 mins ago</small>
								</Card.Footer>
							</Card>
						</CardGroup>
					</Row>
				</Container>
			</main>
			<footer class='py-5 my-5 bg-dark'>
				<Container className='px-4'>
					<p class='text-center text-white'>
						Copyright & copy: KodeVamp Classroom App 2023
					</p>
				</Container>
			</footer>
		</div>
	);
};

export default LandingPage;
