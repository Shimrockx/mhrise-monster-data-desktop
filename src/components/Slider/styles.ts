import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  input[type=range]-ms-tooltip {
    display: none;
  }
`

export const Input = styled.input`
  -webkit-app-region: no-drag;
  -webkit-appearance: none;
  appearance: none;
  margin: 25px 0px 30px 0px;
  width: 100%;
  cursor: pointer;
  opacity: 0;
`

export const Track = styled.div`
  margin-left: 7px;
  width: 100%;
  height: 5px !important;
  background: #201f20;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px !important;
  pointer-events: none;
`

export const TrackInner = styled.div`
  width: ${props => props.theme.width};
  height: 100%;
  background: #fff;
  border-radius: 5px !important;
`

TrackInner.defaultProps = {
  theme: {
    width: '50%',
  },
}

export const Thumb = styled.div`
  margin-left: 7px;
  border: 1px solid #b0b0b0;
  background: #fff;
  font-weight: bold;
  border-radius: 8px;
  width: 15px !important;
  height: 15px !important;
  position: absolute;
  top: 50%;
  left: ${props => props.theme.left};
  transform: ${props => props.theme.transform};
  pointer-events: none;
`

Thumb.defaultProps = {
  theme: {
    left: '50%',
    transform: 'translate(0%, -50%)',
  },
}
