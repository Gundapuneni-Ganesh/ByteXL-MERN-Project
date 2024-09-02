import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import "./App.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from "react";
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import Pagination from 'react-bootstrap/Pagination';







function NavScrollExample() {


	
  return (
  	<>
	    <Navbar expand="lg" className="bg-body-tertiary" >
	      <Container fluid style={{backgroundColor:"#5BC2D1",color:"#E3EAF5"}}>
	        <Navbar.Brand href="#"><img src="https://www.joonsquare.com/usermanage/image/business/chalapathi-institute-of-engineering-and-technology-guntur-15468/chalapathi-institute-of-engineering-and-technology-guntur-logo.jpg" style={{height:'50px',width:'100%'}}/></Navbar.Brand>
	        <Navbar.Toggle aria-controls="navbarScroll" />
	        <Navbar.Collapse id="navbarScroll">
	          <Nav
	            className="me-auto my-2 my-lg-0"
	            style={{ maxHeight: '100px' }}
	            navbarScroll
	          >
	            <Nav.Link href="#action1">Student login</Nav.Link>
	            <Nav.Link href="#action2">Faculity login</Nav.Link>
	            <NavDropdown title="admins login" id="navbarScrollingDropdown">
	              <NavDropdown.Item href="#action3">Principle</NavDropdown.Item>
	              <NavDropdown.Item href="#action4">
	                 Dean
	              </NavDropdown.Item>
	              <NavDropdown.Divider />
	              <NavDropdown.Item href="#action5">
	               Chairman
	              </NavDropdown.Item>
	            </NavDropdown>S
	            <Nav.Link href="#" disabled>
	              Chairman
	            </Nav.Link>
	          </Nav>
	          <Form className="d-flex">
	            <Form.Control
	              type="search"
	              placeholder="Search"
	              className="me-2"
	              aria-label="Search"
	            />
	            <Button variant="outline-success">Search</Button>
	          </Form>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>


	    <div className="secondnavbar">
		    <div className="indiblock" ><a href="#" style={{color:"white",borderRadius:"10%",border:"1",textAlign:'center'}}><b> Home</b></a></div>
		    <div className="indiblock" >
		    	<DropdownButton  title="About" >
			      <Dropdown.ItemText className="listblocks"><a href="#">About US</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Vision & Mission</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Governing body</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Affiliations, Approvals and Awards</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">President</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Secretary and Correspondent</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Principal</a></Dropdown.ItemText>
			    </DropdownButton>
		    </div>
		    <div className="indiblock">
		    	<DropdownButton id="dropdown-item-button" title="Admissions">
			      <Dropdown.ItemText className="listblocks"><a href="#">Intake Details</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Admission Procedure</a></Dropdown.ItemText>
			      
			    </DropdownButton>
		    </div>
		    <div className="indiblock">
		    	<DropdownButton  title="Departments">
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Engineering</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Electronics and Communications Engineering</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Engineering (Artificial Intelligence)</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Affiliations, Approvals and Awards</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Engineering (Data Science)</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Engineering (Cyber Security)</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Engineering (Artificial Intelligence & Machine Learning)</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Computer Science and Information Technology</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Civil Engineering</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Electrical and Electronics Engineering</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Basic Science and Humanities Department</a></Dropdown.ItemText>
			    </DropdownButton>
		    	
		    </div>
		    <div className="indiblock">
		    	<DropdownButton  title="Campus Life">
			      <Dropdown.ItemText className="listblocks"><a href="#">NSS</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Library</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">HOSTEL</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Transport</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Canteen</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Sports</a></Dropdown.ItemText>
			      
			    </DropdownButton>
		    </div>
		    <div className="indiblock"><a href="#" style={{color:"white"}}><b>almuni</b></a></div>
		    <div className="indiblock">
		    	<DropdownButton title="Placements">
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Placements Cell</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Recruitments</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Interview Tips</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Placement Team</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Career guidance, Training & Placement cell Activities</a></Dropdown.ItemText>
			      
			      
			    </DropdownButton>
		    	
		    </div>
		    <div className="indiblock">
		    	<DropdownButton title="Examination Portal">
			      <Dropdown.ItemText className="listblocks"><a href="#">About Exams</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Notifications</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Exam Results</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Contact</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Academic Calendar</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Time Tables</a></Dropdown.ItemText>
			      
			    </DropdownButton>
		    	
		    </div>
	    	<div className="indiblock">
		    	<DropdownButton title="Mandatory Information">
			      <Dropdown.ItemText className="listblocks"><a href="#">APHER MC</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Grievance Redressal Mechanism</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">AICTE Approvals & Accreditation</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">AICTE Feedback</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Webmail</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">NIRF 2023</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">AICTE Mandatory</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">IQAC</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Service rules</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Research Promotion policy</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">List of committees</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">NISP</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">IIC</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Strategic Developmental Plan</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">Anti Ragging</a></Dropdown.ItemText>
			      <Dropdown.ItemText style={{width:"400px"}}><a href="#">Woman Empowerment</a></Dropdown.ItemText>
			      <Dropdown.ItemText className="listblocks"><a href="#">AISHE</a></Dropdown.ItemText>

			      
			    </DropdownButton>
		    	
		    </div>

	    </div>

	    <marquee width="100%" direction="left" height="30px" className="scroller">
		ANNOUNCEMENTS. Post Graduate Diploma in Global Business & Finance - Brochure (2024) Admission open for Post Graduate Diploma in Global Business & Finance. open to graduates (both men and women) 2024 - Click here to …
		</marquee>


	    <div style={{width:"100%",backgroundColor:"violet"}}>
	    	<Carousel data-bs-theme="dark">
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://chalapathiengg.ac.in/wp-content/uploads/2022/01/enlarge_beta.jpg"
		          alt="First slide"
		        />
		        
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://chalapathiengg.ac.in/wp-content/uploads/2021/09/Admissions.jpg"
		          alt="Second slide"
		        />
		        
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://chalapathiengg.ac.in/wp-content/uploads/2021/09/counselling.png"
		          alt="Third slide"
		        />
		       
		      </Carousel.Item>
		       <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://chalapathiengg.ac.in/wp-content/uploads/2021/09/alpha.jpg"
		          alt="Third slide"
		        />
		       
		      </Carousel.Item>
		      
		    </Carousel>

	    </div>


	    <div className="firstblock">
	    	<Container >
		      <Row>
		        <Col className="maincont">
		        	<p><h1>CHALAPATHI MAIN BRANCH</h1></p>
		        	<br/>
		        	<p>CHALAPATHI INSTITUTE OF ENGINEERING AND TECHNOLOGY always plays pivot role about the welfare and the indispensible requirements of Engineering aspirants with a cuttingedge vision. 
		        	. 
		        	<strong>Sri Y.V.Anjaneyulu</strong>, </p>
		        	<p>Chairman of Chalapathi Educational Society established Chalapathi Institute of Engineering & Technology, 
		        	Lam in Guntur.</p>
		        	<br/>
		        	<button style={{backgroundColor:'blue',borderRadius:"40%"}}> Click Here</button>
		        </Col>
		        <Col className="mainimg1"><img src="https://tse2.mm.bing.net/th?id=OIP.Uq_lg6850Rtem9Yy8P0PhgAAAA&pid=Api&P=0&h=180" style={{height:'320px',width:'500px',borderRadius:"20%",alignItem:'center'}}/></Col>
		      </Row>
		    </Container>
	    	
	    </div>


	    <div className="secondblock">
	    	<Carousel data-bs-theme="dark">
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://i1.wp.com/images.jdmagicbox.com/comp/guntur/45/9999pmulhydstd80645/catalogue/chalapathi-institute-of-engineering-and-technology-lam-ars-guntur-engineering-colleges-qgdilyw0g1.jpg?strip=all"
		          alt="First slide"
		          style={{height:'400px',width:'50%'}}
		        />
		        <Carousel.Caption>
		          <h5 style={{color:'blue'}}><strong>All Basic Labs</strong></h5>
		          <p style={{color:'yellow'}}>Here They Can Grasb the all basic Expriments and programs</p>
		        </Carousel.Caption>
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://images.collegedunia.com/public/reviewPhotos/636221/aaa.jpg?mode=cover"
		          alt="Second slide"
		          style={{height:'400px',width:'50%'}}
		        />
		        <Carousel.Caption>
		          <h5 style={{color:'blue'}}><strong>ECE & IT block</strong></h5>
		          <p style={{color:'yellow'}}>These are the main branches,mostly all shine will this place</p>
		        </Carousel.Caption>
		      </Carousel.Item>
		      <Carousel.Item>
		        <img
		          className="d-block w-100"
		          src="https://chalapathiengg.ac.in/wp-content/uploads/2021/09/bg-img1.png"
		          alt="Third slide"
		          style={{height:'400px',width:'60%'}}
		        />
		        <Carousel.Caption>
		          <h5 style={{color:'blue'}}><strong>CSE Block</strong></h5>
		          <p style={{color:'yellow'}}>
		            This is the main branch .mostly all students will join this branch
		          </p>
		        </Carousel.Caption>
		      </Carousel.Item>
		    </Carousel>

	    	
	    	
	    </div>



	    <div className="thirdblock">
	    	 <Container style={{width:"100%"}}>
		      <Row style={{display:"flex"}}>
		        <Col >
		        	<Card style={{ width: '17rem' }}>
				      <Card.Img variant="top" src="https://getmyuni.azureedge.net/college-images-test/chalapathi-institute-of-engineering-and-technology-ciet-guntur/300c29fdb2c64018a6d96f1fd380c1c1.jpeg" />
				      <Card.Body>
				        <Card.Title>Labs</Card.Title>
				        <Card.Text>
				          Here are the some programming languages 
				          we thought for better analysing the problem solving skills
				        </Card.Text>
				        <Button variant="primary">know More</Button>
				      </Card.Body>
				    </Card>
		        	
		        </Col>
		        <Col >
		        	<Card style={{ width: '17rem' }}>
				      <Card.Img variant="top" src="https://images.static-collegedunia.com/public/college_data/images/campusimage/15917820497.jpeg" />
				      <Card.Body>
				        <Card.Title>Sports</Card.Title>
				        <Card.Text>
				          There are many sports competations were conducted.
				          and also more extra circular actives and also NCC training....
				        </Card.Text>
				        <Button variant="primary">to know more..</Button>
				      </Card.Body>
				    </Card>
		        	
		        </Col>
		        <Col >
		        	<Card style={{ width: '17rem' }}>
				      <Card.Img variant="top" src="https://5bestincity.com/listimg/India/guntur-ap/Chalapathi-Institute-of-Engineering-and-Technology-Education-Engineering-colleges-Guntur-Andhra-Pradesh-1.jpg" />
				      <Card.Body>
				        <Card.Title>Skill Development</Card.Title>
				        <Card.Text>
				         students skills development by keeping interative 
				        sessions with students interations 
				        </Card.Text>
				        <Button variant="primary">to know more..</Button>
				      </Card.Body>
				    </Card>
		        	
		        </Col>
		        
		       
		      </Row>
		    </Container>
	    	
	    </div>

	    <div className="thirteenth-block">
		  <div style={{ display: 'flex', justifyContent: 'space-between' ,gap:'10px'}}>
		    <div style={{ width: '50%',margin:"5px" }}>
		    	<h1 style={{ fontSize:"40px" }}>Institutional Development Plan</h1>
		    	<br/>
		    	<p style={{ fontFamily:"sarif" }}>The five-year plan for the period between 2013-2024 is developed for effective functioning of the University in the following 
		    	areas: Enhance Excellence in programs and services wherein it is proposed to take the action points on the existing courses and new courses coupled with interdisciplinary flavor. 
		    	The second proposed point is Student success which is an essential aspect in any educational institution as the whole planning 
		    	and monitoring is to make students to achieve success in their pursu</p>
		    	<br/>
		    	<Button variant="primary" type="submit"><i class="fa fa-download" aria-hidden="true">  Download</i>
				       
				</Button>

		      
		    </div>
		    <div style={{ width: '50%' ,margin:"10px",border:"1px solid black"}}>
		      <img
		        src="https://i.ytimg.com/vi/i4F44Cl6ZyQ/maxresdefault.jpg"
		        
		        style={{ width: '100%', height: '300px' }}
		      />
		    </div>
		  </div>
		</div>



	    <div className="fourthblock">
	    	<h2 style={{textAlign:"center", color:"orange"}}> Our Collage Cultural videos</h2>
	    	<hr/>
	    	<h2 style={{textAlign:"center", color:"blue"}}> Here are the some collage event  videos</h2>
	    	<div className="allvideos">
	    		<video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
                <video src="https://media.istockphoto.com/id/1368541301/video/fast-flying-bright-blue-light-rays.mp4?b=1&s=mp4-640x640-is&k=20&c=VAWHemT_LfOt2T2Wkelb_vOf2yrFM366qEu6RhctOSI=" controls ></video>
	    	</div>

		        
		</div>



		 <div className="fifthblock">
		 	<Container>
		 	  <Row style={{textAlign:"center", color:"orange"}}> <h1>Principle  and H O D Data </h1></Row>
		 	  <hr/>
		 	  <br/>
		      <Row>
		        <Col><img src="https://images.collegedunia.com/public/college_data/images/og_images/news/1675495077-Philosophy-(3).jpeg" style={{height:"350px",width:"600px"}}/>
		        <br/>
		        <h1 style={{textAlign:"center",fontFamily:"Sans-serif"}}> .Sri Y.V.Anjaneyulu</h1>
		        </Col>

		        <Col>
		        	<div className="content">
		        		<h1 style={{textAlign:"center",fontFamily:"Sans-serif"}}> Chairman of chalapathi</h1>
		        		<br/>
		        		<h3 style={{color:"blue"}}>Cultivating Academic Excellence.</h3>
		        		<br/>
			        	<p>We believe learning should be an enjoyable experience & emphasis on learning skills over exam scores. We have curated our programs in a unique style of teaching, which help students to recall the content that they studied in an efficient way.</p>
			        	<br/>
			        	<h3>Our Team</h3>
		            </div>
		        	
		        </Col>
		      </Row>
		      <br/>
		      <br/>
		      <Row>
		        <Col xs={6} md={4} className="idblocks" style={{alignItem:"center",alignItem:"center"}}>
		        <div >
		          <Image src="https://tse1.mm.bing.net/th?id=OIP.R28knDRud1qIcHa0wgSD-wHaE6&pid=Api&P=0&h=180" rounded />
		          <h5 style={{textAlign:"center"}}> principal</h5>
		        </div>
		        <div className="content">
		        	<p>Dr.M.Chandra Sekhar ,
		        	 an eminent Professor and competent administrator has been the Principal of Chalapathi Institute of Engineering and Technology (Autonomous), Guntur.
		        	 He has 30 years of rich experience in teaching, training</p>
		        	
		        </div>

		        </Col>

		        <Col xs={6} md={4} className="idblocks"style={{alignItem:"center",alignItem:"center"}}>
		        <div>
		          <Image src="https://chalapathiengg.ac.in/wp-content/uploads/2021/12/chairman.jpg" roundedCircle style={{height:"200px"}} />
		          <h5 style={{textAlign:"center"}}> Dean</h5>
		        </div>
		        <div className="content"> 
		        	<p>Dr.M.Chandra Sekhar ,
		        	 an eminent Professor and competent administrator has been the Principal of Chalapathi Institute of Engineering and Technology (Autonomous), Guntur.
		        	 He has 30 years of rich experience in teaching, trainin</p>

		        	
		        </div>
		        </Col>

		        <Col xs={6} md={4} className="idblocks" style={{alignItem:"center",alignItem:"center"}}>
		        <div>
		          <Image src="https://i.ytimg.com/vi/GeJTl1isf4Y/hqdefault.jpg" thumbnail style={{height:"200px"}} />
		          <h5 style={{textAlign:"center"}}>  Vice principal</h5>
		        </div>
		        <div className="content">
		        	<p>Dr.M.Chandra Sekhar ,
		        	 an eminent Professor and competent administrator has been the Principal of Chalapathi Institute of Engineering and Technology (Autonomous), Guntur.
		        	 He has 30 years of rich experience in teaching, trainin</p>
		        	
		        </div>
		        </Col>

		      </Row>
		    </Container>
		        
		</div>



		 <div className="sixthblock">
		 	<Container fluid>
		 	<h1 style={{textAlign:"center", color:"blue"}}>Our Partners</h1>
		 	<hr/>
		 	<h3 style={{textAlign:"center", color:"lightgreen"}}>Collaborations and Partnerships</h3>
		 	<br/>
		      <Row>
		        <Col><img src="https://tse1.mm.bing.net/th?id=OIP.njGSWmga7DmIlTqts1p-FQHaCl&pid=Api&P=0&h=180"  style={{height:"100px",width:"100px"}}   / ></Col>
		        <Col><img src="https://tse3.mm.bing.net/th?id=OIP.GVfGdKtgPDi9tfm7OPXo_gHaCd&pid=Api&P=0&h=180"style={{height:"100px",width:"100px"}}/></Col>
		        <Col><img src="https://brandongaille.com/wp-content/uploads/2014/04/Cisco-Company-Logo.jpg"style={{height:"100px",width:"100px"}}/></Col>
		        <Col><img src="https://business2business.co.in/uploads/2020/04/PG.jpg"style={{height:"100px",width:"100px"}}/></Col>
		        <Col><img src="https://brandongaille.com/wp-content/uploads/2014/04/HP-Company-Logo.jpg"style={{height:"100px",width:"100px"}}/></Col>
		        <Col><img src="https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-8.png"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		      </Row>
		      <br/>
		      <br/>
		      <Row>
		        <Col><img src="https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-11.png"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		        <Col><img src="https://logodix.com/logo/1293967.png"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		        <Col><img src="https://tse4.mm.bing.net/th?id=OIP.vp_pRxuYk2qwp7OMA-Oy1QAAAA&pid=Api&P=0&h=180"style={{height:"100px",width:"100px"}}/></Col>
		        <Col><img src="https://business2business.co.in/uploads/2020/04/JQhv0G7n_400x400.jpg"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		        <Col><img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_52023985-e1492476881884.jpg?auto=format&q=60&fit=max&w=930"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		        <Col><img src="https://tse4.mm.bing.net/th?id=OIP.ZpPyf9Ntvy7OfuLkewwgyQHaD3&pid=Api&P=0&w=300&h=300"style={{height:"100px",width:"100px",borderRadius:"50%"}}/></Col>
		      </Row>
		    </Container>			    			        
		</div>



		<div className="seventhblock">
		 	<Container fluid>
	      <Row>
	        <Col>
	        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122469.16910498457!2d80.33861031610763!3d16.41662048558189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b23d0f761c1%3A0x38b09fed35a46ce5!2sChalapathi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1723774779322!5m2!1sen!2sin" style={{width:"600px", height:"450px"}}></iframe>
	        </Col>
	        <Col>
	        	<Form>
				      <Row className="mb-3">
				        <Form.Group as={Col}>
				          <Form.Label style={{color:"yellow"}}>Name</Form.Label>
				          <Form.Control type="Text" placeholder="Enter name" />
				        </Form.Group>

				        <Form.Group as={Col} controlId="formGridPassword">
				          <Form.Label style={{color:"yellow"}}>Pincode</Form.Label>
				          <Form.Control type="Number" placeholder="Pincode" />
				        </Form.Group>
				      </Row>

				      <Form.Group className="mb-3" controlId="formGridAddress1">
				        <Form.Label style={{color:"yellow"}}>Address</Form.Label>
				        <Form.Control placeholder="1234 Main St" />
				      </Form.Group>

				      <Form.Group className="mb-3" controlId="formGridAddress2">
				        <Form.Label style={{color:"yellow"}}>Near location point</Form.Label>
				        <Form.Control placeholder="Apartment area,ner by location" />
				      </Form.Group>

				      <Row className="mb-3">
				        <Form.Group as={Col} controlId="formGridCity">
				          <Form.Label style={{color:"yellow"}}>City</Form.Label>
				          <Form.Control />
				        </Form.Group>

				        <Form.Group as={Col} controlId="formGridState">
				          <Form.Label style={{color:"yellow"}}>State</Form.Label>
				          <Form.Select defaultValue="Choose...">
				            <option>Choose...</option>
				            <option>AP</option>
				            <option>TS</option>
				            <option>KA</option>
				            <option>TN</option>
				            <option>Kerala</option>
				          </Form.Select>
				        </Form.Group>

				        
				      </Row>

				      <Form.Group className="mb-3" id="formGridCheckbox">
				        <Form.Check type="checkbox" label="Check me out" />
				      </Form.Group>

				      <Button variant="primary" type="submit">
				        check Distance
				      </Button>
				    </Form>
	        </Col>
	      </Row>
	    </Container>
		        
		</div>


		<div className="eigthblock">
			<h1 style={{textAlign:'center',color:'blue'}}>Frequently Asked Questions </h1>
			<br/>
			<hr/>
			<p  style={{textAlign:'center',color:'white'}}>Mostly asked questions by students and parents to know about the collage and environment in collage and surroundings</p>
			<br/>
			 <Container>
	      <Row>
	      	<Accordion defaultActiveKey="0">
			      <Accordion.Item eventKey="0">
			        <Accordion.Header style={{textAlign:'center',color:'white'}}>Is that placement are conform?</Accordion.Header>
			        <Accordion.Body>
			          our collage will give a grantee of placement and train them with qualified and profecinol student also better
			          employee or enterprenuer
			        </Accordion.Body>
			      </Accordion.Item>
			      <br/>
			      <Accordion.Item eventKey="1">
			        <Accordion.Header style={{textAlign:'center',color:'white'}}>What are the timings and collage Environment ?</Accordion.Header>
			        <Accordion.Body>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			          
			        </Accordion.Body>
			      </Accordion.Item>
			      <br/>
			      <Accordion.Item eventKey="2">
			        <Accordion.Header style={{textAlign:'center',color:'white'}}>What are the different technology were integrated in circulam?</Accordion.Header>
			        <Accordion.Body>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			          aliquip ex ea commodo consequat. Duis aute irure dolor in
			         
			        </Accordion.Body>
			      </Accordion.Item>
			      <br/>
			      <Accordion.Item eventKey="3">
			        <Accordion.Header style={{textAlign:'center',color:'white'}}>what are the branches are avaliable?</Accordion.Header>
			        <Accordion.Body>
			          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			          aliquip ex ea commodo consequat. Duis aute irure dolor in
			          
			        </Accordion.Body>
			      </Accordion.Item>
			    </Accordion>
	        
	      </Row>
	     
	    </Container>
	    	
	  </div>


	  <div className="ninethblock">
	  	<h1 style={{textAlign:'center',color:'blue'}}><strong> collage Achivements </strong></h1>
	  	<br/>
	  	<hr/>
	  		
	  <div className="portfolio">
	   <Container fluid="md">
	      <Row>
	        <Col className="cols">
	        	<img src="https://assets.thehansindia.com/h-upload/2021/01/08/1023697-chalapathi.webp"  style={{width:"100%",borderColor:"blue",borderRadius:"10%"}}/>
	        </Col>
	        <Col className="cols"><img src="https://images.collegedunia.com/public/college_data/images/campusimage/1479883978evcsa.JPG?mode=stretch"  style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://media.getmyuni.com/azure/college-images-test/chalapathi-institute-of-engineering-and-technology-ciet-guntur/96206cdf57db42b69bf2cc466554d48b.jpeg"  style={{width:"110%",borderRadius:"10%"}}/></Col>
	      </Row>
	      <br/>

	      <Row>
	        <Col className="cols"><img src="https://www.careerindia.com/college-photos/520x380/4447/second-prize_1605878381.JPG" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="http://metey.in/wp-content/uploads/2019/03/IMG-20190226-WA0069.jpg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://metey.in/wp-content/uploads/2019/03/IMG-20190226-WA0077.jpg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1487657144esdfdv.JPG" style={{width:"100%",borderRadius:"10%"}}/></Col>
	      </Row>
	      <br/>
	      <Row>
	        <Col className="cols"><img src="https://www.targetadmission.com/img/colleges/newc/40326-42748.jpg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1487657144eswfdv.JPG" style={{width:"100%",borderRadius:"10%"}}/></Col>
	      </Row>
	      <br/>
	      <Row>
	        <Col className="cols"><img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/15917820496.jpeg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://media.getmyuni.com/azure/college-images-test/chalapathi-institute-of-engineering-and-technology-ciet-guntur/78896d560a6c4582900f9113d235b9a7.jpeg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	        <Col className="cols"><img src="https://city.ac.in/Content/images/udghosh_06.jpg" style={{width:"100%",borderRadius:"10%"}}/></Col>
	      </Row>
	    </Container>
      
    </div>
		        
		</div>


		


		<div className="tenthblock" >
		<h1 style={{textAlign:"center",color:"#3a584a"}}><b> CIET @ EVENTS</b></h1>
			<CardGroup>
		      <Card className="cards">
		       
		        <Card.Body>
		          <Card.Title>Card title</Card.Title>
		          <Card.Text>
		            This is a wider card with supporting text below as a natural lead-in
		            to additional content. This content is a little bit longer.
		          </Card.Text>
		        </Card.Body>
		        <Card.Footer className="text-muted">
		          <small >Last updated 3 mins ago</small>
		        </Card.Footer>
		      </Card>


		     <Card className="cards">
		       
		        <Card.Body>
		          <Card.Title>Card title</Card.Title>
		          <Card.Text>
		            This is a wider card with supporting text below as a natural lead-in
		            to additional content. This content is a little bit longer.
		          </Card.Text>
		        </Card.Body>
		        <Card.Footer className="text-muted">
		          <small >Last updated 3 mins ago</small>
		        </Card.Footer>
		      </Card>

		      <Card className="cards">
		       
		        <Card.Body>
		          <Card.Title>Card title</Card.Title>
		          <Card.Text>
		            This is a wider card with supporting text below as a natural lead-in
		            to additional content. This content is a little bit longer.
		          </Card.Text>
		        </Card.Body>
		        <Card.Footer className="text-muted">
		          <small>Last updated 3 mins ago</small>
		        </Card.Footer>
		      </Card>

		      <Card className="cards">
		       
		        <Card.Body>
		          <Card.Title>Card title</Card.Title>
		          <Card.Text>
		            This is a wider card with supporting text below as a natural lead-in
		            to additional content. This content is a little bit longer.
		          </Card.Text>
		        </Card.Body>
		        <Card.Footer className="text-muted">
		          <small >Last updated 3 mins ago</small>
		        </Card.Footer>
		      </Card>


		      

		    </CardGroup>
		        
		</div>


		<div className="counts">


			<div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#6582BE",width:"95%",padding:"70px",margin:"20px",height:"300px"}}>

		      <div className="textblock" style={{margin:"20px"}}>
		      <strong><i class="fa fa-graduation-cap" aria-hidden="true" style={{fontSize:"50px"}}></i></strong>
		      <h1 style={{fontSize:"40px"}}><strong> 2800 + </strong></h1>
		      <p style={{fontSize:"20px"}}>Engineers</p>
		      </div>

		      <div className="textblock" style={{margin:"20px"}}>
		        <strong><i class="fa fa-user-plus" aria-hidden="true"  style={{fontSize:"50px"}}></i></strong>
		        <h1 style={{fontSize:"40px"}}><strong> 20 +</strong></h1>
		        <p style={{fontSize:"20px"}}>Faculty With PHD</p>
		      
		      </div>

		      <div className="textblock" style={{margin:"20px"}}>
		       <strong><i class="fa fa-handshake-o" aria-hidden="true"  style={{fontSize:"50px"}}></i></strong>
		        <h1 style={{fontSize:"40px"}}><strong> 38 +</strong></h1>
		        <p style={{fontSize:"20px"}}>Recruiters</p>
		      
		      </div>

		      <div className="textblock" style={{margin:"20px"}}>
		       <strong><i class="fa fa-address-card" aria-hidden="true" style={{fontSize:"50px"}}></i></strong>
		        <h1 style={{fontSize:"40px"}}><strong>440 +</strong></h1>
		        <p style={{fontSize:"20px"}}>Placements</p>
		      
		      </div>
	      
	        </div>

		</div>

		

		<div className="connectedblock"style={{display:"flex",justifyContent:"space-between",gap:"20px",backgroundColor:"#E1E9F6",height:"100px",margin:"5px 15px 5px 15px"}} >
			<div style={{display:"flex",justifyContent:"flex-start",width:"50%"}}>
				<h1 style={{color:"blue",padding:"30px",textAlign:"center"}}>Stay Connected</h1>
			</div>
			<div  style={{display:"flex",gap:"5px",width:"50%",padding:"30px 10px 10px 250px"}}>
				<a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-github" aria-hidden="true" style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-facebook-square" aria-hidden="true" style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-google" aria-hidden="true" style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-youtube-play" aria-hidden="true" style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-twitter-square" aria-hidden="true"style={{color:"blue",fontSize:"40px"}}></i></a>
				<a href="#"><i class="fa fa-whatsapp" aria-hidden="true" style={{color:"blue",fontSize:"40px"}}></i></a>
			</div>
			
		</div>

		<marquee width="100%"  height="110px" className="certifies" scrollamount="10" behavior="alternate" >
			<img src="https://th.bing.com/th/id/OIP.3m2GaUIbriQKjvSZtVgB6wAAAA?rs=1&pid=ImgDetMain"  hspace="30%"style={{ height:"90px",width:"150px",margin:"30px"}}/>
			<img src="https://th.bing.com/th/id/OIP.hUuU2Gy9ozXpmNtlcO91-wAAAA?w=474&h=474&rs=1&pid=ImgDetMain"    style={{ height:"85px",width:"100px",margin:"30px"}}/>
			<img src="https://e7.pngegg.com/pngimages/636/658/png-clipart-logo-ap-state-skill-development-corporation-brand-skill-development-institute-andhra-pradesh-logo-text-logo.png" vspace="30%"  style={{ height:"85px",width:"150px",margin:"30px"}}/>
			<img src="https://e7.pngegg.com/pngimages/720/580/png-clipart-iso-9000-iso-9001-2015-international-organization-for-standardization-quality-management-system-business-blue-text.png" vspace="30%"  style={{ height:"85px",width:"150px",margin:"30px"}}/>
			<img src="https://th.bing.com/th/id/OIP.yw_6Z3ZA7djupHqCLZToVgAAAA?w=150&h=150&rs=1&pid=ImgDetMain"   style={{ height:"85px",width:"150px" ,margin:"30px"}}/>
			<img src="https://th.bing.com/th/id/OIP.zmn6kQHmyfd7juPJGTRLLAAAAA?w=350&h=250&rs=1&pid=ImgDetMain"  vspace="30%"style={{ height:"90px",width:"150px",margin:"30px"}}/>
			<img src="https://www.arishti.in/assets/img/Awards/spacious/8.png"  vspace="30%" style={{ height:"85px",width:"150px",margin:"30px"}}/>
			<img src="https://th.bing.com/th/id/OIP.3WK7Ev_sLmTJm95X51UObAHaHa?rs=1&pid=ImgDetMain" vspace="30%"  style={{ height:"85px",width:"150px",margin:"30px"}}/>
			<img src="https://vit.ac.in/system/files/styles/campus_main_image/private/CSI.png?itok=UOagh8Vb" vspace="30%"  style={{ height:"85px",width:"150px",margin:"30px"}}/>
			<img src="https://th.bing.com/th/id/OIP.eNossVMXo9zAZoA74VUJ9AAAAA?w=338&h=338&rs=1&pid=ImgDetMain"  vspace="30%" style={{ height:"85px",width:"150px" ,margin:"30px"}}/>


		</marquee>






		<div className="eleventhblock">
			<Container>
	      <Row className="rows">
	        <Col>
	        	<div className="abouts" style={{width:"80%"}}>
	        		<h2> About CIET </h2>
	        		<hr style={{width:"200px" ,color:"blue"}}/>
	        		<br/>
	        		<p>
	        		 Chalapathi Institute of Engineering & Technology 
	        		 is an autonomous college situated in Guntur,
	        		 Andhra Pradesh. The institute is approved by 
	        		 AICTE and accredited by NAAC “A” Grade. Also known as CIET,
	        		 the institute is also NBA accredited and is ISO 9001:2015 certified.
	        		 CIET has been also recognized under 2 (f) of the UGC Act 1956.
	        		</p>
	        	</div>
	        </Col>
	        <Col>
	        	<div className="about">
	        		<h2> Import Links </h2>
	        		<hr style={{ color:"blue",width:"200px"}}/>
	        		<ul>
	        			<li className="list"><a href="#"> Infrastructer</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Education Verfication</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Departments</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Web Mail</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Online Grievance</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> RTI Decleration</a></li>
	        		</ul>
	        		
	        	</div>
	        </Col>
	        <Col>
	        	<div className="about">
	        		<h2>Downloads </h2>
	        		<hr style={{ color:"blue",width:"200px"}}/>
	        		<ul>
	        			<li className="list"><a href="#"> UCC Undertaking</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Audited Statements</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Statutes</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> AQAR</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> Strategic Plan & Deployment</a></li>
	        			<br/>
	        			<li className="list"><a href="#"> AICTE Feedback</a></li>
	        		</ul>
	        		
	        	</div>
	        </Col>
	        <Col>
	        	<div className="abouts" style={{width:"100%"}}>
	        		<h3> Contact Us</h3>
	        		<hr style={{ color:"blue",width:"200px"}}/>
	        		<br/>
	        		<h5>Chalapathi Institue of Engineering 
	        		and Technology</h5>
	        		<p>(Autonomous)</p>
	        		<br/>
	        		<p>
	        			CIET Lam,Amaravathi Road,
	        			Guntur,A.P,India-522032;
	        			Telephone:+91 (3333) 33434789
	        			Mobile:+91 9898989823
	        			Email:principle@gmail.in
	        		</p> 
	        		<br/>
	        		
	        		<img src="https://www.joonsquare.com/usermanage/image/business/chalapathi-institute-of-engineering-and-technology-guntur-15468/chalapathi-institute-of-engineering-and-technology-guntur-logo.jpg" style={{height:'80px',width:'100%'}}/>		
	        	</div>
	        </Col>    
	      </Row>
	    </Container>
			         
		</div>



		<div className="twlethblock"  style={{padding:"20px",backgroundColor:"lightblue"}}>
			 <div className="footer">
			 		<h3 style={{color:"orange",textAlign:"center"}}><bolt> Ganesh Chowdary</bolt></h3>
			 		<p style={{textAlign:"center"}}>© 2024/All Rights Reserved/Chalapathi Institue Of Engineering and Technology,Lam</p>
			 </div>

		        
		</div>	

  </>
			
			
  );
}

export default NavScrollExample;