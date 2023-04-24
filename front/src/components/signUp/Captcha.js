import React, { useCallback } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';

// const CaptchaBox = styled.div`
//   width: 268px;
//   height: 156px;
//   color: #232629;
//   background-color: #f1f2f3;
//   margin: 6px 0px;
//   padding: 8px 0px 2px;
// `;
const StyledReCAPTCHA = styled(ReCAPTCHA)`
  transform: scale(0.8);
  margin-right: 250px;
`;

function Captcha() {
  const onChange = useCallback(value => {
    // console.log('Captcha value:', value);
  }, []);

  return (
    <StyledReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={onChange}
      size="normal"
    />
  );
}

export default Captcha;
