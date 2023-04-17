import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="pt-exebar">
          <div className="container">
            <div className="d-flex align-items-stretch">
              <div className="pt-logo mr-auto">
                <a href="index.html">
                  <img src="assets/images/logo-white.png" alt="" />
                </a>
              </div>
              <div className="pt-social-link">
                <ul className="list-inline m-a0">
                  <li>
                    <Link className="btn-link">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-link">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-link">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-link">
                      <i className="fa fa-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 footer-col-4">
              <div className="widget">
                <h5 className="footer-title">Sign Up For A Newsletter</h5>
                <p className="text-capitalize m-b20">
                  Weekly Breaking news analysis and cutting edge advices on job
                  searching.
                </p>
                <div className="subscribe-form m-b20">
                  {/* <form className="subscription-form" action="http://educhamp.themetrades.com/demo/assets/script/mailchamp.php" method="post">
									<div className="ajax-message"></div>
									<div className="input-group">
										<input name="email" required="required"  className="form-control" placeholder="Your Email Address" type="email" />
										<span className="input-group-btn">
											<button name="submit" value="Submit" type="submit" className="btn"><i className="fa fa-arrow-right"></i></button>
										</span> 
									</div>
								</form> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-7 col-sm-12">
              <div className="row">
                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="widget footer_widget">
                    <h5 className="footer-title">Quick Links</h5>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="widget footer_widget">
                    <h5 className="footer-title">Get In Touch</h5>
                    <ul>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      {/* <li><a href="blog-classic-grid.html">Blog</a></li> */}

                      {/* <li><a href="event.html">Event</a></li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                  <div className="widget footer_widget">
                    <h5 className="footer-title">Courses</h5>
                    <ul>
                      <li>
                        <Link to="/courses">Courses</Link>
                      </li>
                      {/* <li><a href="courses-details.html">Details</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-5 col-sm-12 footer-col-4">
              <div className="widget widget_gallery gallery-grid-4">
                <h5 className="footer-title">Our Gallery</h5>
                <ul className="magnific-image">
                  <li>
                    <a
                      href="assets/images/gallery/pic1.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic2.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic3.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic3.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic4.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic4.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic5.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic5.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic6.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic6.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic7.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic7.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/images/gallery/pic8.jpg"
                      className="magnific-anchor"
                    >
                      <img src="assets/images/gallery/pic8.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center"> <a target="_blank" href="https://www.templateshub.net">Templates Hub</a></div>
                </div>
            </div>
        </div> */}
    </footer>
  );
};

export default Footer;
