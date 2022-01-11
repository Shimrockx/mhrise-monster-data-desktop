import styled from 'styled-components'

export const Container = styled.div`
  -webkit-app-region: drag;
  color: #ccc;
  background: #333;
  right: 0;
  width: 100%;
  bottom: 0;
  padding: 0 0 0;
  z-index: 500;
`

export const Header = styled.header`
  -webkit-app-region: drag;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background: #444;
  height: 64px;
  border-bottom: solid 1px #444;
`

export const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 24px;
  width: 100%;
`

export const CloseButton = styled.div`
  -webkit-app-region: no-drag;
  top: 0;
  left: 0;
  width: 5em;
  height: 48px;
  position: absolute;
  text-align: center;
  cursor: pointer;
`

export const Close = styled.span`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 18px;
`

export const SettingSection = styled.dl`
  margin-top: 40px;
  margin-bottom: 10px;
`

export const SettingTitle = styled.dt`
  color: #999;
  font-size: 13px;
  padding: 0 20px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`

export const SettingContent = styled.dd`
  margin-inline-start: 0px;
`

export const SliderContent = styled.div`
  position: relative;
  margin-left: 20px;
  margin-right: 30px;
`

export const DataKeyImage = styled.img`
  -webkit-app-region: no-drag;
  width: 90%;
  height: auto;
  object-fit: scale-down;
  object-position: center center;
  vertical-align: middle;
  border-style: none;
  padding-left: 10px;
`

export const DataKeyDescriptionList = styled.dl`
  -webkit-app-region: no-drag;
`

export const DatakeyDescriptionTitle = styled.dt`
  text-align: justify;
  text-align: justify-all;
  font-weight: bold;
  position: relative;
  margin-left: 40px;
  margin-top: 30px;
`

export const DatakeyDescription = styled.dd`
  -webkit-app-region: no-drag;
  margin-top: 10px;
  margin-right: 30px;
`

export const Footer = styled.footer`
  font-size: 11px;
  line-height: 1.3;
  text-align: center;
  padding: 10px;
  color: #999;
  padding-top: 26px;
  padding-bottom: 26px;
`
