import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
//style
import styles from '../res/style/dist/main.module.css';

// module
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// assets
  //images
import merkleLogoWhite from '../res/assets/images/merkleLogo-white.webp';
import heroPicture from '../res/assets/images/hero-picture.jpg';
import globalIndustry from '../res/assets/images/img1.webp';
import grab from '../res/assets/images/grab.webp';
import moka from '../res/assets/images/moka.webp';
import ismaya from '../res/assets/images/ismaya.webp';
import djarum from '../res/assets/images/djarum.webp';
import buma from '../res/assets/images/buma.webp';
import miens from '../res/assets/images/miens.webp';
import lkpp from '../res/assets/images/lkpp.webp';
import hino from '../res/assets/images/hino.webp';
import designThinking from '../res/assets/images/designThinking.webp';
import appsDevelopment from '../res/assets/images/appsDevelopment.webp';
import systemIntegrator from '../res/assets/images/systemIntegrator.webp';
import unaLopez from '../res/assets/images/unaLopez.webp';
import mikeDoe from '../res/assets/images/mikeDoe.webp';
import grabGroup from '../res/assets/images/grabGroup.png';
import mokaGroup from '../res/assets/images/mokaGroup.jpg';
import ismayaGroup from '../res/assets/images/ismayaGroup.png';
import djarumGroup from '../res/assets/images/djarumGroup.jpg'

const Home: NextPage = () => {
  return (
    <>
      <header className={styles['header-background']+' '+'pt-3 ps-5'} style={{ paddingBottom: '200px' }}>
        <nav className="navbar bg-transparent" style={{ marginBottom: '150px' }}>
          <div className="container-fluid">
            <Link href='/'>
              <a>
                <Image className="ms-3" src={merkleLogoWhite} width="220px" height="75px" />
              </a>
            </Link>
            <div className="d-flex pe-5">
              <div>
                <Link href="#">
                  <a className="me-4 nav-link text-light">Contact</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="me-5 nav-link text-light">Home</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className='d-flex justify-content-evenly align-items-center text-light pe-5 gx-5'>
          <div className='ms-5 me-5'>
            <ul> 
              <li><p  style={{ fontFamily: 'Arial', fontSize: '14px' }}>ON-DEMAND</p></li>
            </ul>
            <h1 className='display-2 fw-bold me-5'>Creative & Innovative Ideas</h1>
            <br />
            <p className='me-5 mb-5'>
              2002, Columbus, Ohio; an early team of Merkle Innovation was formed by 
              some Indonesia diaspora aiming to transform enterprise technology.
            </p>
            <button className='btn btn btn-primary me-3'>Let's Roll</button>
            <a href="#" className='text-light text-decoration-none'>View All Journey<i className="bi bi-arrow-right ms-2"></i></a>
          </div>
          <div className='me-5'>
            <Image src={heroPicture} className='rounded' width="820px" height="600px"/>
          </div>
        </div>
      </header>
      <div className="vision d-flex align-items-center justify-content-evenly" style={{ marginBottom: '50px' }}>
        <div>
          <Image src={globalIndustry} className='rounded' width="520px" height="800px"/>
        </div>
        <div style={{ width: '35%' }}>
            <p className='fw-bold'>Brand Promise</p>
            <h1 className='mb-4'>Our Vision & Mission</h1>
            <p className='text-secondary'>
              Contributing to Global Industries by Providing TrustedSolution to
              Improve Value with Information Technology, Digital Technology, and 
              Media Technology.
            </p>
        </div>
      </div>
      <div className="values pb-5">
        <div className="d-flex justify-content-center mb-5">
          <h2 className='display-6 text-primary fw-bold'>Our Core Values</h2>
        </div>
        <div className="d-flex justify-content-center pt-4 gap-5">
          <div style={{ width: '20%' }}>
            <i className="bi bi-pencil-square text-primary" style={{ fontSize: '45px' }}></i>
            <h5 className="text-primary fw-bold mt-2 mb-4">Integrity</h5>
            <p>Always present, connecting with transparency, dignity and mutual respect.</p>
          </div>
          <div style={{ width: '20%' }}>
            <i className="bi bi-bounding-box-circles text-primary" style={{ fontSize: '45px' }}></i>
            <h5 className="text-primary fw-bold mt-2 mb-4">Reliable Innovative</h5>
            <p>Be Adventurous, Creative, and Open-Minded in in order to deliver solution that having value add to customer and consistently good in quality and performance.</p>
          </div>
          <div style={{ width: '20%' }}>
            <i className="bi bi-send text-primary" style={{ fontSize: '45px' }}></i>
            <h5 className="text-primary fw-bold mt-2 mb-4">Accountable</h5>
            <p>Delivering our very best in all we do, holding ourselves accountable for results.​ ​</p>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 gap-5 mb-5">
          <div style={{ width: '32%' }}>
            <i className="bi bi-lightbulb text-primary" style={{ fontSize: '45px' }}></i>
            <h5 className="text-primary fw-bold mt-2 mb-4">Integrity</h5>
            <p>Always present, connecting with transparency, dignity and mutual respect.</p>
          </div>
          <div style={{ width: '32%' }}>
            <i className="bi bi-credit-card-fill text-primary" style={{ fontSize: '45px' }}></i>
            <h5 className="text-primary fw-bold mt-2 mb-4">Reliable Innovative</h5>
            <p>Be Adventurous, Creative, and Open-Minded in in order 
              to deliver solution that having value add to customer and consistently good in quality and performance.
            </p>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center pb-5'>
        <h1 className='fw-bold text-primary display-6 mb-3'>Our Clients</h1>
        <p className='text-secondary mb-5'>Driving technology for leading brands</p>
      </div>
      <div className="clients pb-5">
        <div className="d-flex justify-content-evenly mb-5">
          <div>
            <Image src={grab} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={moka} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={ismaya} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={djarum} className='rounded' width="100px" height="80px"/>
          </div>
        </div>

        <div className="d-flex justify-content-evenly mb-5">
          <div>
            <Image src={buma} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={miens} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={lkpp} className='rounded' width="100px" height="80px"/>
          </div>
          <div>
            <Image src={hino} className='rounded' width="100px" height="80px"/>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center pt-5 pb-3'>
        <h1 className='display-6 fw-bold text-primary mt-4 mb-4'>Our Services & Capabilities</h1>
      </div>
      <div className={styles['services']+" pt-5"}>
        <div className="d-flex mt-5 justify-content-center gap-5 align-items-center">
          <div>
            <Image src={designThinking} className='rounded' width="520px" height="680px"/>
          </div>
          <div className='w-25'>
            <p className='fw-bold' style={{ color: 'rgb(255, 130, 105)' }}>Design</p>
            <h2 className='text-primary fw-bold mb-4'>Design Thinking</h2>
            <p className='text-secondary mb-4'>
              Design Thinking helps our client focus on your users and their needs to deliver more useful, usable, and desirable solutions.​
            </p>
            <ul>
              <li><span>Identify users pain points.</span>​</li>
              <li><span>Define user personas.</span></li>
              <li><span>Brainstorm on solutions.</span></li>
              <li><span>Identify hypotheses and experiments.</span></li>
              <li><span>Define Minimum Viable Product (MVP).​</span></li>
              <li><span>Explore technical solution architecture, 
                including hybrid cloud architecture and potential 
                integration points using Cloud as the platform for 
                the solution.​
                </span>
              </li>
              <li><span>Create conceptual design using wireframes until 
                playable mock-up, if applicable.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex mt-5 ps-5 justify-content-center gap-5 align-items-center">
          <div className='w-25'>
            <p className='fw-bold' style={{ color: 'rgb(255, 130, 105)' }}>Smart Notification</p>
            <h2 className='text-primary fw-bold mb-4'>Apps Development & Managed Service</h2>
            <p className='text-secondary mb-4'>
              Our engineer team can support our client to develop their MVP apps using modern technique on web, mobile, native/hybrid and blockchain technologies. We can adapt to various development approach using project based or agile scrum methodology.
            </p>
            <ul>
              <li>
                <span>
                  Our goal build and manage a production 
                  application that is fully tested, with users 
                  validated and deployed to production, and to 
                  empower your team so that you can evolve. build 
                  the next iteration of the MVP by yourself or engage 
                  us further to iterate and scale​
                </span>
              </li>
            </ul>
          </div>
          <div className='ms-5'>
            <Image src={appsDevelopment} className='rounded' width="520px" height="680px"/>
          </div>
        </div>

        <div className="d-flex mt-5 pe-5 justify-content-center gap-5 align-items-center">
          <div className='ms-5'>
            <Image src={systemIntegrator} className='rounded' width="520px" height="680px"/>
          </div>
          <div className='w-25'>
            <p className='fw-bold' style={{ color: 'rgb(255, 130, 105)' }}>System</p>
            <h2 className='text-primary fw-bold mb-4'>System Integrator</h2>
            <p className='text-secondary mb-4'>
              We also help customer to integrated to existing solution 
              available in the solution marketplace. With our official 
              partnership with several principal we also offer fully 
              integration with our solution business partners if needed 
              as one stop solution offering. 
            </p>
            <ul>
              <li>
                <span>
                  Leverage ready to use solution available in the 
                  market, we can speed up client go to market 
                  initiative. 
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center pt-5 pb-3 pb-5'>
        <h1 className='display-6 fw-bold text-primary text-center mt-4'>Our team’s long-running Apps Development</h1>
        <h1 className='display-6 fw-bold text-primary text-center mb-4'>Experiences on various Industries</h1>
      </div>
      <div className="team">
        <div className="d-flex justify-content-center align-items-center">
          <div className='me-4'>
            <Image src={unaLopez} width="320px" height="480px"/>
            <h4 className='text-primary fw-bold text-center mt-4'>Una Lopez</h4>
            <p className="text-secondary text-center mt-3">Chief of Staff</p>
          </div>
          <div className='me-5'>
            <Image src={mikeDoe} width="320px" height="480px"/>
            <h4 className='text-primary fw-bold text-center mt-4'>Una Mike Doe</h4>
            <p className="text-secondary text-center mt-3">Head of Product</p>
          </div>
          <div className='ms-5'>
            <h1 className='display-2 text-primary fw-bold text-center'>25+</h1>
            <h5 className='fw-bold text-center' style={{ color: 'rgb(255, 130, 105)' }}>Amazing team members</h5>
            <p className='text-center fw-bold' style={{ color: 'rgb(255, 130, 105)' }}>Doing amazing job everyday</p>
          </div>
        </div>
      </div>
      <div className="companies">
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div>
            <Image src={grabGroup} width="720px" height="300px"/>
          </div>
          <div className='ms-2'>
            <Image src={grab} width="180px" height="140px"/>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div className='ms-2'>
            <Image src={moka} width="180px" height="140px"/>
          </div>
          <div>
            <Image src={mokaGroup} width="720px" height="300px"/>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div>
            <Image src={ismayaGroup} width="720px" height="300px"/>
          </div>
          <div className='ms-2'>
            <Image src={ismaya} width="180px" height="140px"/>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div className='ms-2'>
            <Image src={djarum} width="180px" height="140px"/>
          </div>
          <div>
            <Image src={djarumGroup} width="720px" height="300px"/>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-1' style={{ height: '100px', backgroundColor: 'rgb(238, 238, 238)' }}>
          <p>Copyright © 2022 Merkle Innovation</p>
      </div>
    </>
  )
}

export default Home