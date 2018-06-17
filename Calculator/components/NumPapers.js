import React from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import '../react-select.scss'

const numPapers = props => {
    const { numPapers, handleNumPapersChange, numPapersLabel } = props

    const numPapersOptions = []
    for (let i = 1; i <= 20; i++) {
        numPapersOptions.push(
            {
                value: i,
                name: `${i} ${'paper'}${(i !== 1 ? 's' : '')}`
            }
        )
    }

    return (
        <div className='Calculator__row Calculator__row--numPapers'>
            <label className='Calculator__label'>{numPapersLabel}</label>
            <Select
                value={numPapers}
                matchProp='value'
                matchPos='start'
                clearable={false}
                searchable
                valueKey='value'
                labelKey='name'
                onChange={handleNumPapersChange}
                options={numPapersOptions}
            />
        </div>
    )
}

numPapers.propTypes = {
    numPapers: PropTypes.number.isRequired,
    numPapersLabel: PropTypes.string.isRequired,
    handleNumPapersChange: PropTypes.func.isRequired
}

export default numPapers
