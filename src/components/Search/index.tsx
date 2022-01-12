import React, { useState, useEffect } from 'react'

import { Container, Form } from './styles'
import { Input } from '../Input'
import { SearchList } from './SearchList'

import { LargeMonster } from '../../models/large-monster.model'
import mhDatabaseService from '../../services/mh-database.service'
import { Monster } from '../Monster'

export function Search() {
  const [results, setResults] = React.useState<LargeMonster[]>([])

  function onChange(event: any) {
    let monsterName: string = event.target.value
    if (monsterName != '') {
      let monsters = mhDatabaseService.getLargeMonstersByName(monsterName)
      setResults(monsters)
    } else {
      reset()
    }
  }

  const [selectedLargeMonster, setSelectedLargeMonster] =
    React.useState<LargeMonster | undefined>()

  function onClickResult(largeMonster: LargeMonster) {
    if (largeMonster != undefined) {
      setResults([])
      setSelectedLargeMonster(largeMonster)
    }
  }

  function reset() {
    setResults([])
    setSelectedLargeMonster(undefined)
  }

  return (
    <Container>
      <Form>
        <Input type="text" onChange={onChange} />
      </Form>
      <SearchList results={results} onClickResult={onClickResult}></SearchList>
      <Monster largeMonster={selectedLargeMonster}></Monster>
    </Container>
  )
}
