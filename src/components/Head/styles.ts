import styled, { keyframes } from 'styled-components'

export const Container = styled.header`
  -webkit-app-region: drag;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background: #f5f5f5;
  height: 64px;
  border-bottom: solid 1px #ccc;
`

export const SettingsButton = styled.div`
  -webkit-app-region: no-drag;
  position: absolute;
  bottom: 2px;
  left: 0;
  width: 4em;
  height: 48px;
  cursor: pointer;
`

export const SettingsIcon = styled.div`
  -webkit-app-region: no-drag;
  color: #666;
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -0.5em;
  font-size: 20px;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  color: #000000;
  font-size: 28px;
  margin-top: 11px;
`

export const CloseButton = styled.div`
  -webkit-app-region: no-drag;
  position: absolute;
  bottom: 2px;
  right: 0;
  width: 4em;
  height: 48px;
  cursor: pointer;
`

export const CloseIcon = styled.div`
  color: #666;
  position: absolute;
  top: 50%;
  right: 25px;
  margin-top: -0.5em;
  font-size: 20px;
`
