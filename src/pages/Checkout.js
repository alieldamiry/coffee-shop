import React from 'react';
import Hero from '../components/Sections/Hero/Hero';
import Inner from '../components/Sections/Hero/Inner';

const Checkout = () => {
  return (
    <>
      <Hero>
        <Inner currentPage="Checkout" />
      </Hero>
      <section>
        Checkout page
      </section>
    </>
  );
};

export default Checkout;
