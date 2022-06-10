import React, { FC } from 'react'

import { SelectProps } from './Select.props'

import * as Styled from './Select.style'

export const Select: FC<SelectProps> = ({ ...props }) => {
  const { id, label, options, placeholder, warning } = props

  return (
    <Styled.SelectWrapper>
      {warning && <Styled.Warning htmlFor={id}>{warning}</Styled.Warning>}

      <select {...props}>
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((optionItem) => {
          return (
            <option key={optionItem} value={optionItem}>
              {optionItem}
            </option>
          )
        })}
      </select>

      {label && <label htmlFor={id}>{label}</label>}
    </Styled.SelectWrapper>
  )
}
