import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../Components/collection-preview/collection-preview.component'


import { selectCollectionOverview } from "../../redux/shop/shop.selector";


import "./collection-overview.styles.scss";


const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionOverview,
});



export default connect(mapStateToProps)(CollectionOverview);
