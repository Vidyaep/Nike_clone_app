import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jumpman from './images/jumpman.jpg';
import logo from './images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'; // Import Carousel component
import { useState, useEffect } from 'react';
import shoe from './images/shoe.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import s1 from './images/s1.png';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import b4 from './images/b4.png';
import b5 from './images/b5.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import sh from './images/shoe1.jpeg';
import img from './images/img.png';
import m1 from './images/m1.jpg';
import m2 from './images/m2.jpg';
import m3 from './images/m3.jpg';
import m4 from './images/m4.jpg';
import m5 from './images/m5.jpg';
import m6 from './images/m6.jpg';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function App() {
  const [texts, setTexts] = useState([
    "Move, Shop, Customise & Celebrate With Us. No matter what you feel like doing today, It’s better as a Member. Join Us",
    "Save Up to 40%. Shop All Our New Markdowns"
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" style={{ height: '35px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={jumpman} alt='Logo' width='30px' height='30px'></img></Navbar.Brand>
          <Nav className="ms-auto" style={{ fontSize: '12px', fontFamily: 'Helvetica', color: 'black' }}>
            <Nav.Link href="#" style={{ color: 'black' }}>Find a store&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Help&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Join Us&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>Sign In </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      <Navbar bg="bright" data-bs-theme="bright" style={{ height: '60px' }}>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt='Logo1' width='60px' height='30px'></img></Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: '15px', fontFamily: 'Helvetica' }}>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '150px' }}>&nbsp;&nbsp;<b>New & Featured</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Men</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Women</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Kids</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Sales</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>Customise</b></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black' }}>&nbsp;&nbsp;<b>SNKRS</b></Nav.Link>
            <Form bg='light' style={{ marginLeft: '4px' }}>
              <input class="search" type="search" placeholder="Search" style={{ borderRadius: '200px' }}></input>
            </Form>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '10px' }}><i class="fa-regular fa-heart"></i></Nav.Link>
            <Nav.Link href="#" style={{ color: 'black', marginLeft: '10px' }}><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <div className='carousel bg-light' style={{fontSize:'15px'}}>
      <Carousel controls={false} indicators={false} interval={3000} pause={false} >
        {texts.map((text, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-item-text text-center">
              {text.split('.').map((sentence, idx) => (
                <p key={idx}>{sentence.trim()}</p>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>


      <div>
        <img src={shoe} width='1320px' height='600px'></img>
      </div>
      <div className='txt text-center'>
        <p>Feel the Unreal</p>
        <p style={{lineHeight:'40%',fontWeight:'bolder',fontSize:'56px',fontFamily:'sans-serif',letterSpacing:'-5px'}}>AIR MAX DN</p>
        <p style={{lineHeight:'250%'}}>The next generation of Air Technoology is here.</p>
        <Button  variant='dark' style={{borderRadius:'20px',width:'110px',height:'40px'}}>Shop Now</Button>
      </div>


      <Container>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px'}}>New Arrivals Just Landed.</p>
      </Col>
      <Col xl={2}><p>Shop&nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button></p>
      </Col>
      </Row>
      </Container>


      <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s2} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹8,860</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s3} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹14,948</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={s1} />
      <Card.Body>
        <Card.Title>Nike Dunk Low</Card.Title>
        <Card.Text>
          <p style={{color:'grey'}}>Men's Shoes</p>
          <b>MRP: ₹11,895</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>


  <div className='trend'><h4 style={{marginLeft:'100px'}}>Trend Alert</h4>
  <Container style={{marginTop:'20px'}}>
    <Row>
      <Col>
    <Card className="bg-dark text-white">
      <Card.Img src={sh} alt="Card image" />
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <Card.Title>Retro Styles</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid black',borderCollapse:'collapse',width:'80px',backgroundColor:'black',color:'white'}}>Shop</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col>
    <Card className="bg-dark text-white">
      <Card.Img src={sh} alt="Card image" />
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <Card.Title>Nike Dunk</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid black',borderCollapse:'collapse',width:'80px',backgroundColor:'black',color:'white'}}>Shop</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col>
    <Card className="bg-dark text-white">
      <Card.Img src={sh} alt="Card image" />
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <Card.Title>Air Jordan 1</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid black',borderCollapse:'collapse',width:'80px',backgroundColor:'black',color:'white'}}>Shop</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>


  <div className='featured'><h4 style={{marginLeft:'100px'}}>Featured</h4>
  <Container style={{marginTop:'20px'}}>
    <Row>
    <Col xl={6}>
    <Card className="bg-dark text-white">
      <Card.Img src={sh} alt="Card image" />
      <Card.ImgOverlay  style={{marginTop:'600px'}}>
        <Card.Title style={{color:'black'}}>Dropping this week: New Basketball Drip</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid black',borderCollapse:'collapse',width:'230px',height:'40px',backgroundColor:'black',color:'white'}}>Download the Nike App</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xl={6}>
    <Card className="bg-dark text-white">
      <Card.Img src={sh} alt="Card image" />
      <Card.ImgOverlay  style={{marginTop:'600px'}}>
        <Card.Title>Nike EasyOn</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'80px',backgroundColor:'white',color:'black'}}>Shop</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
     
    <div className='miss' style={{marginLeft:'100px',marginTop:'50px'}}> 
    <h4>Don't Miss</h4>
    <img src={img} width='1120px'></img> 
    </div>

    <div className='txt text-center mt-5'>
        <p style={{lineHeight:'50%',fontWeight:'bolder',fontSize:'56px',fontFamily:'sans-serif',letterSpacing:'-5px'}}>DIAMOND SHORTS &</p>
        <p style={{lineHeight:'70%',fontWeight:'bolder',fontSize:'56px',fontFamily:'sans-serif',letterSpacing:'-5px'}}>STADIUM 90S</p>
        <p style={{lineHeight:'250%'}}>A modern take on Jumpman clssics.The iconic Diamond Shorts are getting an update in bold, eye catching graphics.</p>
        <p style={{lineHeight:'20%'}}>Style them with Jordan Stadium 90s for everyday wear that offers legendary comfort.</p>
        <Button  variant='dark' style={{borderRadius:'20px',width:'110px',height:'40px'}}>Shop</Button>
      </div>

      <Container style={{marginTop:'20px'}}>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px'}}>Classics Spotlight</p>
      </Col>
      <Col xl={2}><Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button>
      </Col>
      </Row>
      </Container>

      <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={s2} />
      <Card.Body>
        <Card.Title>AIR JORDAN 1</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={s1} />
      <Card.Body>
        <Card.Title>DUNK</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={s3} />
      <Card.Body>
        <Card.Title>BLAZER</Card.Title>
      </Card.Body>
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={s2} />
      <Card.Body>
        <Card.Title>AIR FORCE 1</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <Container style={{marginTop:'20px'}}>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px'}}>Shop by Sport</p>
      </Col>
      <Col xl={2}><Button variant='light'style={{borderRadius:'50px'}}><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button>
      </Col>
      </Row>
      </Container>   

      <Container>
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={b1} />
      <Card.Body>
        <Card.Title>Nike Basketball</Card.Title>
        <Card.Text>
          <p>Style made for your game.</p>234432
          <a href='#' style={{color:'black'}}>Shop</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={b4} />
      <Card.Body>
      <Card.Title>Nike Golf</Card.Title>
        <Card.Text>
          <p>Conquer any course in style.</p>
          <a href='#' style={{color:'black'}}>Shop</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={b2} />
      <Card.Body>
      <Card.Title>Nike Trail</Card.Title>
        <Card.Text>
          <p>Gear that leads to wild places.</p>
          <a href='#' style={{color:'black'}}>Shop</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={b3} />
      <Card.Body>
      <Card.Title>Nike Tennis</Card.Title>
        <Card.Text>
          <p>Serve up in style.</p>
          <a href='#' style={{color:'black'}}>Shop</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={b5} />
      <Card.Body>
      <Card.Title>Nike Football</Card.Title>
        <Card.Text>
          <p>Bring mad style to the ppitch with the latest gear.</p>
          <a href='#' style={{color:'black'}}>Shop</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

    <Container style={{marginTop:'20px'}}>
      <Row>
      <Col xl={10}><p style={{fontSize:'20px'}}>Shop by Sport</p>
      </Col>
      <Col xl={2}><Button variant='light'style={{borderRadius:'50px'}}><i class="fa-solid fa-less-than"></i></Button>
      &nbsp;&nbsp;&nbsp;<Button variant='secondary'style={{borderRadius:'50px'}} ><i class="fa-solid fa-greater-than"></i></Button>
      </Col>
      </Row>
    </Container>   

    <Container style={{marginTop:'20px'}}>
    <Row className='scroll-row'>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m1} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>Member Product</h6>
        <Card.Title>Your Exclusive Access</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'80px',backgroundColor:'white',color:'black'}}>Shop</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m2} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>Nike By You</h6>
        <Card.Title>Your Customisation Service</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'100px',backgroundColor:'white',color:'black'}}>Customise</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m3} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>Member Rewards</h6>
        <Card.Title>How We Say Thank You</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'100px',backgroundColor:'white',color:'black'}}>Celebrate</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m4} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>Member Product</h6>
        <Card.Title>A Celebration of You</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'100px',backgroundColor:'white',color:'black'}}>Learn More</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m5} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>Sport & Wellness Apps</h6>
        <Card.Title>Movement Where You Are</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'80px',backgroundColor:'white',color:'black'}}>Move</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card className='text-white' style={{width:'23rem'}}>
      <Card.Img src={m6} alt="Card image" height='500px'/>
      <Card.ImgOverlay  style={{marginTop:'350px'}}>
        <h6>SNKRS</h6>
        <Card.Title>Your Ultimate Sneaker Community</Card.Title>
        <Card.Text>
         <button type='button' style={{borderRadius:'20px',border:'1px solid white',borderCollapse:'collapse',width:'80px',backgroundColor:'white',color:'black'}}>Explore</button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Col>
    </Row>
    </Container>

  <container>
  <div style={{marginTop:'50px', display: 'flex',marginLeft:'100px',lineHeight:'40px'}}>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Icons</b>
        <li style={{color:'grey'}}>Air Force 1</li>
        <li style={{color:'grey'}}>Huarache</li>
        <li style={{color:'grey'}}>Air Max 90</li>
        <li style={{color:'grey'}}>Air Max 95</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Shoes</b>
        <li style={{color:'grey'}}>All Shoes</li>
        <li style={{color:'grey'}}>Custom Shoes</li>
        <li style={{color:'grey'}}>Jordan Shoes</li>
        <li style={{color:'grey'}}>Running Shoes</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Clothing</b>
        <li style={{color:'grey'}}>All Clothing</li>
        <li style={{color:'grey'}}>Modest Wear</li>
        <li style={{color:'grey'}}>Hoodies & Pullovers</li>
        <li style={{color:'grey'}}>Shirts & Tops</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Kids'</b>
        <li style={{color:'grey'}}>Infant & Toddler Shoes</li>
        <li style={{color:'grey'}}>Kids' Shoes</li>
        <li style={{color:'grey'}}>Kids' Jordan Shoes</li>
        <li style={{color:'grey'}}>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>
</container>


<MDBFooter bgColor='dark' className='text-center text-lg-start text-white' >
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section> */}

      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3' >
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' >
                
                FIND A STORE
                <div style={{marginTop:'7px'}}>BECOME A MEMBER</div>
                <div style={{marginTop:'7px'}}>Send us Feedback</div>
                
                
              
              </h6>
             
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HELP</h6>
              <div style={{fontSize:'15px'}}>
              <p>
             
                  Get Help
               
              </p>
              <p>
               
                  order Status
               
              </p>
              <p>
                
                 Delivery
              
              </p>
              <p>
                
                 Returns
                
              </p>
              <p>
                
                 Payment Options
                
              </p>
              <p>
                
                 Contact Us On Nike.
                
              </p>
              <p>
                
                 Contact Us
                
              </p>
              </div>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              
              <h6 className='text-uppercase fw-bold mb-4' style={{marginLeft:'15px'}}>COMPANY</h6>
              <div style={{fontSize:'15px'}}>
              <p style={{marginLeft:'35px'}}>
                
                  About Nike
                
              </p>
              <p style={{marginLeft:'35px'}}>
                
                  News
               
              </p>
              <p style={{marginLeft:'35px'}}>
                
                 Careers
                
              </p>
              <p style={{marginLeft:'35px'}}>
                
                 Investors
               
              </p>
              <p style={{marginLeft:'35px'}}>
                
                Sustainability
              
             </p>
             </div>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              
              <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='youtube' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
         
         
        </div>
             
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </section>


<div className='text p-2' style={{display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.05)',marginLeft:'130px' }}>
      <i class="fa-solid fa-location-dot" style={{marginLeft:'-120px',marginTop:'-8px'}}></i><p style={{paddingLeft:'10px',marginRight: 'auto'}}>India</p>
        <div style={{ display: 'flex', gap: '10px' }}>
        <p style={{marginLeft:'-230px',marginRight:'400px'}}>&nbsp;&copy;2024 Nike,Inc.All rights reserved</p>
        <p>Guide</p>&nbsp;
        <p>Terms of Sale</p>&nbsp;
        <p>Terms of Use</p>&nbsp;
        <p>Nike Privacy Policy</p>&nbsp;
        </div>
      </div>
    </MDBFooter>


    </div>
  );
}

export default App;
