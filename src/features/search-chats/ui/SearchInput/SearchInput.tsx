import Image from 'next/image';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 12px;
`;

const InputWrapper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.border.primary}`};
  border-radius: 8px;
  height: 32px;
  width: 100%;
  padding: 4px 2px 4px 8px;

  img {
    position: relative;
    top: 2px;
  }
`;

const StyledInput = styled.input`
  border: none;
  margin-left: 6px;
  width: 90%;
  &:focus-visible {
    outline: none;
  }

  &::before {
    background-image: url('/search.svg');
  }
`;

const SearchInput = () => {
  return (
    <InputContainer>
      <InputWrapper>
        <Image src="search.svg" height={16} width={15} alt="search" />
        <StyledInput placeholder="Поиск" />
      </InputWrapper>
    </InputContainer>
  );
};

export default SearchInput;
