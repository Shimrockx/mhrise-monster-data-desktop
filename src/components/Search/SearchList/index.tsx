import React, { ReactElement } from 'react'

import { Container, List, ListElement, Image } from './styles'
import { LargeMonster } from '../../../models/large-monster.model'

type SearchResult = {
  results: LargeMonster[]
  onClickResult: (largeMonster: LargeMonster) => void
}

export function SearchList(SearchResult: SearchResult) {
  function getResults(): ReactElement[] {
    return SearchResult.results.map(result => (
      <ListElement
        key={result.id}
        onClick={() => SearchResult.onClickResult(result)}
      >
        <Image loading="lazy" src={result.icon}></Image>
        {result.name}
      </ListElement>
    ))
  }

  return (
    <Container>
      <List>{getResults()}</List>
    </Container>
  )
}
