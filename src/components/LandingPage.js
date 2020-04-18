import React from 'react'
import Dale from '../images/Dale.JPG'
import Kara from '../images/RubyKara500.jpg'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
			<section>
				<div>
					<h1 className='text-title'> Welcome to The Crafty Eagle</h1>
					<h3>Artisan & Custom Crafts</h3>
				</div>

				<div className='crafty-eagle'>
					<Link to='/products'><button className='shop-now-btn'>Shop Now</button></Link>
				</div>
				<br />
				<div>
					<h2 className='text-title'>What We Do?</h2>
					<p>
          We make artisan and custom crafts:
						<ul className='landing-list'>
							<li>Wood Working <span role='img' aria-label='wood tools'>🔨🧰</span></li>
							<li>Crochet <span role='img' aria-label='crochet tools'>🧶✂️</span></li>
							<li>Cross Stitch <span role='img' aria-label='cross stitch tools'>🧵✂️</span></li>
							<li>Knitting <span role='img' aria-label='knitting tools' >🧶✂️</span></li>
							<li>Needle Felting <span role='img' aria-label='felting animals'>🦙🐑</span></li>
							<li>Dream Catchers <span role='img' aria-label='dream-catcher tools'>🧮🦚</span></li>
							<li>Web Sites such as this and Others <span role='img' aria-label='computers'>🖥️💻</span></li>
							<li>and More with More to Come as We Learn New Skills <span role='img' aria-label='other tools'>🧷🎨🖌️🧩</span></li>
						</ul>
					</p>
				</div>
				<br />

				<h3 className='text-title'>Who Are We?</h3>
				<p>A couple of kooks in love who love creating and sharing. You can call us The Peoples.</p>
				<div className='landing-info-div'>
					<p>
						<h3>Him</h3>
						<div className>
							<img src={Dale} alt='Dale' className='dale' />
						</div>
						Call Me Dale, I am the Eagle of Woodworking and Outdoor Items
						<br />I can also build custom pieces such as cabinets and tables with chairs
					</p>

					<p>
						<h3>Her</h3>{' '}
						<div>
							<img src={Kara} alt='Kara' className='kara' />
						</div>
						Call Me Kara, I am Crafty and I do needlework and indoor crafts. <br />I ,also, build Full Stack Web
						Applications for more information on my career please visit:{' '}
						<a href='https://www.karapeoples.com'>karapeoples.com</a>
					</p>
				</div>
			</section>
		)
}

export default LandingPage
