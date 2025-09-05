import styled from 'styled-components';

export const Overlay = styled.div<{ $isopen: boolean }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $isopen }) => ($isopen ? 1 : 0)};
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
`;

export const DrawerContainer = styled.div<{ $isopen: boolean; $side: 'left' | 'right' }>`
  position: fixed;
  top: 57px;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  height: 100%;
  width: 280px;
  border-top-left-radius: 16px;
  background-color: white;
  box-shadow: ${({ $side }) => ($side === 'left' ? '2px 0 10px rgba(0, 0, 0, 0.2)' : '-2px 0 10px rgba(0, 0, 0, 0.2)')};
  z-index: 999;
  padding: 16px 24px;
  transform: ${({ $isopen, $side }) =>
    $isopen ? 'translateX(0)' : $side === 'left' ? 'translateX(-100%)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Section = styled.div`
  margin: 1rem 0;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #555;
  margin-top: 1rem;
`;

export const Value = styled.div`
  font-size: 14px;
  margin-top: 1rem;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Action = styled.div`
  color: #1da1f2;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.hr`
  margin: 16px 0;
  border-color: #fff;
`;

export const Switch = styled.label<{ $checked: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: 46px;
  height: 24px;
  background: ${({ $checked }) => ($checked ? '#007aff' : '#e5e5ea')};
  border-radius: 999px;
  padding: 2px;
  transition: background 0.2s ease;
  flex-shrink: 0;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  border: 0;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
`;

export const Thumb = styled.span<{ $checked: boolean }>`
  display: block;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  transform: ${({ $checked }) => ($checked ? 'translateX(22px)' : 'translateX(0)')};
`;
