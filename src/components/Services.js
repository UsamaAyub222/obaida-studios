// import react from "react";
import FoldingCard from "./FoldingCard";
// import illustration from "../images/SVG/illustration.svg"
// import print from "../images/SVG/print.svg"
// import logo from "../images/SVG/logo.svg"
// import web from "../images/SVG/web.svg"
// import marketing from "../images/SVG/marketing.svg"
// import packaging from "../images/SVG/packaging.svg"

const services = [
    {
      frontContent: 'Logo & Branding',
      frontIcon: "/images/SVG/logo.svg",
      backContent: ['Custom logo creation', 'Brand identity design', 'Business card and stationary design'],
    },
    {
      frontContent: 'Packaging Design',
      frontIcon: "/images/SVG/packaging.svg",
      backContent: ['Product packaging and labeling', 'Custom box design', 'Retail packaging solutions'],
    },
    {
        frontContent: 'Illustration & Graphics',
        frontIcon: "/images/SVG/illustration.svg",
        backContent: ['Custom illustrations for digital and print', 'Icon design', 'Infographic design'],
      },
      {
        frontContent: 'Web & UI Design',
        frontIcon: "/images/SVG/web.svg",
        backContent: ['Website design with a focus on aesthetics', 'User interface (UI) design', 'User experience (UX) consultation'],
      },
      {
        frontContent: 'Print Design',
        frontIcon: "/images/SVG/print.svg",
        backContent: ['Brochures, flyers, and posters', 'Magazine and book layouts', 'Banners and signage'],
      },
      {
        frontContent: 'Digital Marketing Materials',
        frontIcon: "/images/SVG/marketing.svg",
        backContent: ['Social media graphics', 'Email campaign design', 'Display advertisements'],
      }
  ];



const Services = () => {

    return (
        <div className="services-container">
            <h2 className="subhead">Services</h2>
            <div className="servicecards-container">

        {services.map((service, index) => (
          <FoldingCard
          key={index}
          frontContent={service.frontContent}
          frontIcon={service.frontIcon}
          backContent={service.backContent}
        />
        ))}
            </div>
      </div>
    )
}

export default Services