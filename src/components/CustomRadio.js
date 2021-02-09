import React from 'react'
import {RadioWrapper} from './CustomRadio.style'

export default function CustomRadio({label,...restProps}) {
    return (
        <RadioWrapper htmlFor={restProps.id}>
            {label}
            <input
               {...restProps}
                type="radio"
               
            />
            <span/>
        </RadioWrapper>
    )
}
