import React from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import '../react-select.scss'

const Level = props => {
    const { doctype, levels, handleLevelChange, level, levelLabel } = props

    return (
        <div className='Calculator__row Calculator__row--level'>
            <label className='Calculator__label'>{levelLabel}</label>
            <Select
                value={level}
                clearable={false}
                searchable
                valueKey='id'
                labelKey='name'
                onChange={handleLevelChange}
                options={levels[doctype]}
            />
        </div>
    )
}

Level.propTypes = {
    levels: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired,
    doctype: PropTypes.number.isRequired,
    levelLabel: PropTypes.string.isRequired,
    handleLevelChange: PropTypes.func.isRequired
}

export default Level
