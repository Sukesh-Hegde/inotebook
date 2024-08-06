export default function About() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">Learn more about our team and mission</p>
        </div>
      </header>

      <main className="container my-5">
        <section className="mb-5">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best service to our customers by
            leveraging our expertise and innovative solutions. We strive to
            exceed expectations and foster long-term relationships built on
            trust and satisfaction.
          </p>
        </section>

        <section className="mb-5">
          <h2>Meet Our Team</h2>
          <div className="row">
            <div className="col-md-4 team-member text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>John Doe</h3>
              <p className="text-muted">CEO & Founder</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>Jane Smith</h3>
              <p className="text-muted">Chief Marketing Officer</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h3>Michael Brown</h3>
              <p className="text-muted">Head of Development</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out to us. We'd love
            to hear from you!
          </p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
          <p>Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
