import React from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import '../react-select.scss'

const Urgency = props => {
    const { urgencies, doctype, urgency, handleUrgencyChange, urgencyLabel } = props

    return (
        <div className='Calculator__row Calculator__row--urgency'>
            <label className='Calculator__label'>{urgencyLabel}</label>
            <Select
                value={urgency}
                clearable={false}
                searchable
                valueKey='id'
                labelKey='name'
                onChange={handleUrgencyChange}
                options={urgencies[doctype]}
            />
        </div>
    )
}

Urgency.propTypes = {
    urgencies: PropTypes.object.isRequired,
    doctype: PropTypes.number.isRequired,
    urgency: PropTypes.number.isRequired,
    handleUrgencyChange: PropTypes.func.isRequired,
    urgencyLabel: PropTypes.string.isRequired
}

export default Urgency
