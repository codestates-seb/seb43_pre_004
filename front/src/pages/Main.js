import React from 'react';
import main from '../image/main.png';
import Footer from '../components/Footer';

function Main() {
  return (
    <div>
      <img src={main} alt="mainPage" />
      <Footer />
    </div>
  );
}

export default Main;
