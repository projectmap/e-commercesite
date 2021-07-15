import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import AlertSuccess from '../alert/alert.success';

const StripeCheckoutButton = ({ price }) => {
    const message="Your payment is successful."
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';
const [status,setStatus]=React.useState(false);
  const onToken = token => {
      setStatus(true)
    console.log(token);
    alert('Payment Succesful!');
    setTimeout(setStatus(false),6000)
  };

  return (<div>
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
    <AlertSuccess openAlertBar={status} message={message}/>
    </div>
  );
};

export default StripeCheckoutButton;