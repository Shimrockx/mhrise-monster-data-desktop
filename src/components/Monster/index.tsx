import { ReactElement } from 'react'
import { Container, Image } from './styles'

import { LargeMonster } from '../../models/large-monster.model'

export type MonsterView = {
  largeMonster: LargeMonster | undefined
}

export function Monster(monsterView: MonsterView) {
  function getLargeMonsterHZV() : ReactElement {
    if (monsterView.largeMonster != undefined) {
      return <Image src={monsterView.largeMonster.path_hzv} />
    } else {
      return <></>
    }
  }

  return (
    <Container>
      {getLargeMonsterHZV()}
    </Container>
  )
}
