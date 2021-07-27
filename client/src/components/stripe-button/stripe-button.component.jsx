import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JDO0tAaNPIGJWD7FUx0pbNpCtA9f1UeXj1gGruZZXHqWS4g4i8zqoohimVNP50lGsMM9x4rHjnmHxLNM5NvNzJ900El3R5Evf';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        alert('Payment successful');
        console.log('success')
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      token={onToken}
      label='Pay Now'
      name='SNS Clothing'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      image='https://i.ibb.co/9cyB2PB/sns-logo.png'
      panelLabel='Pay Now'
    />
  );
};

export default StripeButton;