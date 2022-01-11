import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLibrary from './../../styles/IconLibrary'
IconLibrary.init()

import {
  Container,
  TitleContent,
  Title,
  CloseButton,
  CloseIcon,
  SettingsButton,
  SettingsIcon,
} from './styles'

export function Head() {
  function onClickClose() {
    window.Main.close()
  }

  return (
    <Container>
      <Link to="/settings">
        <SettingsButton>
          <SettingsIcon>
            <FontAwesomeIcon icon="info-circle" />
          </SettingsIcon>
        </SettingsButton>
      </Link>
      <TitleContent>
        <Title>MH Rise Monster Data</Title>
      </TitleContent>
      <CloseButton onClick={onClickClose}>
        <CloseIcon>
          <FontAwesomeIcon icon="times" />
        </CloseIcon>
      </CloseButton>
    </Container>
  )
}
