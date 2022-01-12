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
  ExpandButton,
  ExpandIcon,
} from './styles'

export function Head() {
  const [reduced, setReduced] = React.useState<boolean>(false)

  function onClickClose() {
    window.Main.close()
  }

  function onClickExpand() {
    if (!reduced) {
      setReduced(true)
      window.Main.reduce()
    } else {
      setReduced(false)
      window.Main.expand()
    }
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
      {/*       <TitleContent>
        <Title>MH Rise Monster Data</Title>
      </TitleContent> */}
      <ExpandButton onClick={onClickExpand}>
        <ExpandIcon>
          <FontAwesomeIcon icon="expand" />
        </ExpandIcon>
      </ExpandButton>
      <CloseButton onClick={onClickClose}>
        <CloseIcon>
          <FontAwesomeIcon icon="times" />
        </CloseIcon>
      </CloseButton>
    </Container>
  )
}
