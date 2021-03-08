import React from 'react';

//expects props productInfo(object)
var ProductDescription = (props) => {
  var featureList = props.productInfo.features.map((feature) => {
    return <li>{feature.value} {feature.feature}</li>;
  })
  return (
    <div>
      <div><b>{props.productInfo.slogan}</b></div>
      <div>{props.productInfo.description}</div>
      <ul className="FeatureList">
        {featureList}
      </ul>
    </div>
  )
};

export default ProductDescription;