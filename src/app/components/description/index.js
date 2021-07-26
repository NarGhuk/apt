const Description = ({serviceDataById}) => (
  <div className="right-content">
    <div className="info-wrapper">
      <div className="price"> Starting <span> 90 <sup>$</sup></span> </div>
      <h2 className="title"> {serviceDataById.title}</h2>
      <p className="info-text"> {serviceDataById.description}</p>
    </div>
  </div>
);
export default Description;
