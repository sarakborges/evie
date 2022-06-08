import React, { ElementRef, FC, useRef } from 'react'
import { Cog } from '@styled-icons/heroicons-solid/Cog'
import { Sun } from '@styled-icons/boxicons-solid/Sun'
import { MoonFill } from '@styled-icons/bootstrap/MoonFill'
import { Checkmark } from '@styled-icons/icomoon/Checkmark'

import { SETTINGS_TEXTS } from 'Utils/Constants'

import { Button, Text } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'

import * as Styled from './HeaderSettings.style'

export const HeaderSettings: FC = () => {
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        ref={dropdownRef}
        wrapperRef={dropdownWrapperRef}
        hasCloseButton
        title={SETTINGS_TEXTS.TITLE}
      >
        <Styled.Settings>
          <div>
            <Styled.ThemeTitle>
              <Text fs="12px">{SETTINGS_TEXTS.THEME.TITLE}</Text>
            </Styled.ThemeTitle>

            <Styled.ThemeOptions>
              <Button dark>
                <Sun />
                <>{SETTINGS_TEXTS.THEME.OPTIONS.LIGHT}</>
              </Button>

              <Button dark bordered>
                <MoonFill />
                <>{SETTINGS_TEXTS.THEME.OPTIONS.DARK}</>
              </Button>
            </Styled.ThemeOptions>
          </div>

          <div>
            <Styled.ThemeTitle>
              <Text fs="12px">{SETTINGS_TEXTS.COLOR}</Text>
            </Styled.ThemeTitle>

            <Styled.ColorOptions>
              <Button transparent rounded>
                <span>
                  <Checkmark />
                </span>
              </Button>

              <Button transparent rounded>
                <span />
              </Button>
            </Styled.ColorOptions>
          </div>
        </Styled.Settings>
      </Dropdown>

      <Button
        transparent
        onClick={() => {
          dropdownRef?.current?.toggleDropdown()
        }}
      >
        <Cog />
      </Button>
    </div>
  )
}
