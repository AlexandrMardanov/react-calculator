import React from 'react'
import PropTypes from 'prop-types'

import sortDoctypes from '../../utils/sortDoctypes'

import Select from 'react-select'
import '../react-select.scss'

const Doctype = props => {
    const { doctypes, doctype, handleDoctypeChange, doctypeLabel } = props

    return (
        <div className='Calculator__row Calculator__row--doctype'>
            <label className='Calculator__label'>{doctypeLabel}</label>
            <Select
                value={doctype}
                clearable={false}
                searchable
                valueKey='id'
                labelKey='name'
                onChange={handleDoctypeChange}
                options={sortDoctypes(doctypes)}
            />
        </div>
    )
}

Doctype.propTypes = {
    doctypes: PropTypes.array.isRequired,
    doctype: PropTypes.number.isRequired,
    doctypeLabel: PropTypes.string.isRequired,
    handleDoctypeChange: PropTypes.func.isRequired
}

export default Doctype
