'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 18px;
  width: 100%;
  background-color: #fff;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  background-color: transparent;

  &::placeholder {
    color: #999;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #444;

  &:hover {
    color: #000;
  }
`;

const SendButton = styled(IconButton)`
  color: white;
  border-radius: 50%;
  padding: 6px;
`;

const Input: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleOfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <InputWrapper>
      <StyledInput type="text" value={value} onChange={handleOfChange} placeholder="Напишите текст..." />
      <IconsWrapper>
        <IconButton>
          <Image src="paperclip.svg" width={25} height={25} alt="paperclip" />
        </IconButton>
        <IconButton>
          <Image src="audio.svg" width={25} height={25} alt="audio" />
        </IconButton>
        <SendButton>
          <Image src="submit.svg" width={30} height={30} alt="submit" />
        </SendButton>
      </IconsWrapper>
    </InputWrapper>
  );
};

export default Input;
