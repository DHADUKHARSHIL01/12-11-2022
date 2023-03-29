function Footer () {
	return(
	<footer className="bg-dark py-5 text-muted">
  <div className="container">
    <div className="row">
      <div className="col-md-3 text-white">
        <h5>Company</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-white">About us</a></li>
          <li><a href="#" className="text-decoration-none text-white">Blog</a></li>
          <li><a href="#" className="text-decoration-none text-white">Careers</a></li>
          <li><a href="#" className="text-decoration-none text-white">Contact us</a></li>
        </ul>
      </div>
      <div className="col-md-3 text-white">
        <h5>Customer Service</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-white">Help center</a></li>
          <li><a href="#" className="text-decoration-none text-white">Shipping and delivery</a></li>
          <li><a href="#" className="text-decoration-none text-white">Returns and exchanges</a></li>
          <li><a href="#" className="text-decoration-none text-white">FAQs</a></li>
        </ul>
      </div>
      <div className="col-md-3 text-white">
        <h5>Follow us</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-decoration-none text-white">Facebook</a></li>
          <li><a href="#" className="text-decoration-none text-white">Twitter</a></li>
          <li><a href="#" className="text-decoration-none text-white">Instagram</a></li>
          <li><a href="#" className="text-decoration-none text-white">Pinterest</a></li>
        </ul>
      </div>
      <div className="col-md-3 text-white">
        <h5>Newsletter</h5>
        <p>Subscribe to our newsletter to receive updates and special offers.</p>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control " placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-6 text-white">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
      <div className="col-md-6 text-md-end">
        <ul className="text-decoration-none">
          <li className="text-decoration-none"><a href="#" className="text-decoration-none text-white">Terms of use</a></li>
          <li className="text-decoration-none"><a href="#" className="text-decoration-none text-white">Privacy policy</a></li>
          <li className="text-decoration-none"><a href="#" className="text-decoration-none text-white">Site map</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>


	)
}
export default Footer