import React from 'react'
import { render } from 'react-dom'

import { hot } from 'react-hot-loader'

import { api } from './api'
import Calculator from './react/containers/Calculator'
import { commonConfig } from './react/commonConfig'

import './react/styles.scss'

hot(module)(Calculator)

render(<Calculator config={commonConfig} api={api} />,
    document.querySelector('#root'))
