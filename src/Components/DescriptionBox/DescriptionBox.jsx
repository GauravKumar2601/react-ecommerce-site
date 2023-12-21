import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (135)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce platform is a digital framework that enables online
          buying and selling of goods and services. It serves as the foundation
          for businesses to create, manage, and operate their online
          storefronts. These platforms encompass various tools and
          functionalities, including website development, product catalog
          management, secure payment gateways, order processing, inventory
          management, and customer relationship management (CRM). These
          platforms provide businesses with the tools needed to establish an
          online presence, showcase their products or services, and facilitate
          transactions securely over the internet. They often offer customizable
          templates and design options to create visually appealing and
          user-friendly online stores.
        </p>
        <p>
          One of the significant advantages of an ecommerce platform is its
          scalability, allowing businesses to expand their operations, add new
          products, and cater to a broader customer base. Additionally, they
          often come equipped with analytics and reporting features, providing
          insights into customer behavior, sales performance, and marketing
          effectiveness, which can inform business strategies and
          decision-making.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
