import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
`

export const List = styled.ul`
  -webkit-app-region: no-drag;
  margin-bottom: 20px;
  list-style: none;
  padding-inline-start: 0px;
`

export const ListElement = styled.li`
  -webkit-app-region: no-drag;
  vertical-align: middle;
  padding: 14px 0 14px 52px;
  border-bottom: solid 1px #efefef;
  font-size: 14px;
  line-height: 1.3;
  position: relative;
  cursor: pointer;
`

export const Image = styled.img`
  -webkit-app-region: no-drag;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -16px;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  border-radius: 16px;
`
