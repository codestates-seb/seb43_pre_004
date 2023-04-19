import React, { useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';

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
