import React, { ElementRef, FC, useContext, useRef, useState } from 'react'
import { Cog } from '@styled-icons/heroicons-solid/Cog'
import { Sun } from '@styled-icons/boxicons-solid/Sun'
import { MoonFill } from '@styled-icons/bootstrap/MoonFill'
import { Checkmark } from '@styled-icons/icomoon/Checkmark'

import { SETTINGS_TEXTS } from 'Utils/Constants'

import { AppContext } from 'Contexts'

import { Button, Text } from 'Components/Atoms'
import { Dropdown } from 'Components/Molecules'

import * as Styled from './HeaderSettings.style'

export const HeaderSettings: FC = () => {
  const dropdownRef = useRef<ElementRef<typeof Dropdown>>(null)
  const dropdownWrapperRef = useRef<HTMLDivElement>(null)

  const { appState, setAppState } = useContext(AppContext)
  const { accent, brightness } = appState

  const changeColor = (newAccent: number) => {
    setAppState?.({ ...appState, accent: newAccent })
  }

  const changeBrightness = (newBrightness: 'dark' | 'light') => {
    setAppState?.({ ...appState, brightness: newBrightness })
  }

  return (
    <div ref={dropdownWrapperRef}>
      <Dropdown
        hasCloseButton
        wrapperRef={dropdownWrapperRef}
        ref={dropdownRef}
        title={SETTINGS_TEXTS.TITLE}
      >
        <Styled.Settings>
          <div>
            <Styled.ThemeTitle>
              <Text fs="12px">{SETTINGS_TEXTS.THEME.TITLE}</Text>
            </Styled.ThemeTitle>

            <Styled.ThemeOptions>
              <Button
                dark
                bordered={brightness === 'light'}
                onClick={() => changeBrightness('light')}
              >
                <Sun />
                <>{SETTINGS_TEXTS.THEME.OPTIONS.LIGHT}</>
              </Button>

              <Button
                dark
                bordered={brightness === 'dark'}
                onClick={() => changeBrightness('dark')}
              >
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
              {[
                5, 15, 35, 55, 75, 95, 115, 135, 155, 175, 195, 215, 235, 255,
                275, 295, 315, 335,
              ].map((colorItem) => {
                return (
                  <Button
                    transparent
                    rounded
                    key={colorItem}
                    className={`${accent === colorItem && 'active'}`}
                    onClick={() => changeColor(colorItem)}
                  >
                    <Styled.ColorOptionItem accent={colorItem}>
                      {accent === colorItem && <Checkmark />}
                    </Styled.ColorOptionItem>
                  </Button>
                )
              })}
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
