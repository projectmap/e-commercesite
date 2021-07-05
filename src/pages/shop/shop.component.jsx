import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import   "./testgrid.css";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}






        <div className="test-grid"> for grid test
        <div className="elem1">1</div>
        <div className="elem2">2</div>
        <div className="elem3">3</div>
        <div className="elem4">4</div>
        <div className="elem5">5</div>
        <div className="elem6">6</div>
        </div>






      </div>
    );
  }
}

export default ShopPage;