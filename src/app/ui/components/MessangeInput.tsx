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
  box-shadow: 0px 2px 3px #c1c1c1;
`;

const StyledInput = styled.textarea`
  flex: 1;
  border: none;
  padding: 8px;
  outline: none;
  font-size: 15px;
  background-color: transparent;
  resize: none;
  overflow: hidden;

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
  padding: 5px;
  cursor: pointer;
  color: #444;

  &:hover {
    color: #000;
  }
`;

const SendButton = styled(IconButton)`
  color: white;
  border-radius: 50%;
  padding: 5px;
`;

const MessangeInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleOfChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledInput value={value} onChange={handleOfChange} placeholder="Напишите текст..." rows={1} />
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
    </form>
  );
};

export default MessangeInput;
