'use client';

import styled from 'styled-components';
import HelloWorld from '../hello-world';

const SiderContent = styled.div`
  width: 30%;
  border-right: 1px solid #cdd5de;
`;

export const Sider = () => {
  return (
    <SiderContent>
      <HelloWorld />
    </SiderContent>
  );
};

export default Sider;
