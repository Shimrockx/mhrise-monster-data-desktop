import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLibrary from './../../styles/IconLibrary'
IconLibrary.init()

import {
  Close,
  CloseButton,
  Container,
  DatakeyDescription,
  DataKeyDescriptionList,
  DatakeyDescriptionTitle,
  DataKeyImage,
  Footer,
  Header,
  HeaderTitle,
  SettingContent,
  SettingSection,
  SettingTitle,
  SliderContent,
} from './styles'
import { Slider } from '../Slider'

export function Settings() {
  const [opacity, setOpacity] = React.useState<number>(0)

  async function init() {
    let opacity = (await window.Main.getOpacity()) * 100
    setOpacity(opacity)
  }

  function onOpacity(event: any) {
    if (event.target.value < 30) {
      event.target.value = 30
    }
    setOpacity(event.target.value)
    window.Main.setOpacity(event.target.value)
  }

  useLayoutEffect(() => {
    init()
  }, [])

  return (
    <Container>
      <Header>
        <HeaderTitle>Settings</HeaderTitle>
        <Link to="/">
          <CloseButton>
            <Close>Close</Close>
          </CloseButton>
        </Link>
      </Header>
      <SettingSection>
        <SettingTitle>Opacity</SettingTitle>
        <SettingContent>
          <SliderContent>
            <Slider
              min="0"
              max="100"
              value={opacity}
              step="5"
              onChange={onOpacity}
            ></Slider>
          </SliderContent>
        </SettingContent>
      </SettingSection>
      <SettingSection>
        <SettingTitle>Data Key</SettingTitle>
        <SettingContent>
          <DataKeyImage src="https://i.imgur.com/ILuUaRD.png"></DataKeyImage>
          <DataKeyDescriptionList>
            <DatakeyDescriptionTitle>
              1. Kinsect Extract
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              Color extract associated with the part.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              2. Part Names and States
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              Multiple zones may be apart of the same group. Color code matches
              corresponding part on chart.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>3. Flinch Values</DatakeyDescriptionTitle>
            <DatakeyDescription>
              Flinch threshold of the part. This is the amount of damage
              required to flinch the monster. These values are modified by quest
              specific flinch modifiers, and player scaling.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              4. Trip / Knock Down
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              Number of flinches required to trip / knock down a monster; the
              duration in seconds associated with it. Trip Key: ^|Fly/Swim,
              B|Break, *|After Break, Chrg|Charging
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              5 & 6. Break & Sever
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              Required damage to destroy or sever the part. These are multiplied
              by the same factor as the flinch values.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>7. Notes</DatakeyDescriptionTitle>
            <DatakeyDescription>
              <ul>
                <li>1. L,R denotes left and right are independent.</li>
                <li>2. ≤X% HP is the HP threshold to break the part.</li>
                <li>3. Time denotes a particular states timer.</li>
                <li>
                  4. Several zones can make up a part group and share
                  flinch/break thresholds; kinsect extract.
                </li>
              </ul>
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              8. Miscellaneous Stats
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              <ul>
                <li>
                  1. RWT: Skill level required to negate roar, wind and tremor.
                  Not all attacks will require this level.
                </li>
                <li>2. HP Capture threshold.</li>
                <li>3. HP Limp threshold.</li>
              </ul>
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              9. Base HP / Quest HP
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              The base HP found within game files or the quest specific HP. HP
              is calculated from quest HP modifiers and player scaling. Some
              quests have HP variance; these values are randomly picked from a
              range. If applicable the range will be shown. Hover over the HP to
              see each possible roll.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>10. Status Values</DatakeyDescriptionTitle>
            <DatakeyDescription>
              Initial Values, Tolerance Increase; Max Tolerance scaled by quest
              and player scaling. The initial threshold is the elemental or
              status build-up required to proc the effect. The threshold
              increases with each application, up to the max tolerance, and
              typically decays at a rate of 5 every 10 seconds which is 0.5 per
              second
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              11. Stamina and Exhaust
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              1st cell: monsters stamina. 2nd cell: fatigue duration. Last cell:
              stamina damage. Exceeding the exhaust threshold will reduce the
              monsters stamina. The monster will become fatigued once stamina
              hits 0. Most elders do not have stamina; none can be directly
              exhausted.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              12. Traps & Item Data
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              CC duration for various items and environmental traps.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>13. Enrage Data</DatakeyDescriptionTitle>
            <DatakeyDescription>
              Parameter changes during enraged state.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>14. Special Notes</DatakeyDescriptionTitle>
            <DatakeyDescription>
              Relevant notes related to special mechanics.
            </DatakeyDescription>
            <DatakeyDescriptionTitle>
              15. Raw and Elemental Hitzone Data
            </DatakeyDescriptionTitle>
            <DatakeyDescription>
              These values correspond to the percent damage taken from each
              attack type.
            </DatakeyDescription>
          </DataKeyDescriptionList>
        </SettingContent>
      </SettingSection>
      <Footer>
        <div>
          <p>
            MONSTER HUNTER, CAPCOM and <br />
            the CAPCOM logo are <br />
            registered trademarks of CAPCOM Co., Ltd.
            <br />
          </p>
          <p>
            Copyright © 2006 - 2021 <br />
            CAPCOM CO., LTD. All Rights Reserved.
          </p>
          <p>Copyright © 2021 - 2021 Shimrock. All Rights Reserved.</p>
        </div>
      </Footer>
    </Container>
  )
}
