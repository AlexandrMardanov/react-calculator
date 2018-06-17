import React from 'react'
import { render } from 'react-dom'
import api from '../api'
import Calculator from './components/Calculator'
import { commonConfig } from './commonConfig'

import './styles.scss'

export default () => render(<Calculator config={commonConfig} api={api} />,
    document.querySelector('#Calculator'))
