
import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">What Our Clients Say</h2>
          <p className="text-body max-w-3xl mx-auto">
            Don't just take our word for it. Hear from people who've experienced the difference firsthand.
          </p>
          <a
            href="https://www.google.com/search?sca_esv=da1b8a09527d5d5c&biw=1920&bih=945&sxsrf=AHTn8zpfBNqzbee3Vcwk-k21AKPJd-TfIQ:1745826013087&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZeepBK2fnXU7PqUEiA-JD4wGsAGcv5hJwavBU3II-Ir0QYdpzvcTGCvKy-wxwBWsHHjuOWjdQkYWredKE_nF72AxpZ_N8qfMBgFtOb8md_U6BV4lUbhuX0gnbiqdpZAJeqgbjo%3D&q=Cornelis+Oosthuizen+Massage+Therapy+Reviews&sa=X&ved=2ahUKEwjt7uXanPqMAxXyREEAHV6PFQ8Q0bkNegQIIRAD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-massage-primary hover:underline inline-block mt-4"
          >
            View all Google reviews →
          </a>
        </div>

        <div className="elfsight-app-1b1390e1-8f4a-45ba-967d-107f466ed799" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Testimonials;
