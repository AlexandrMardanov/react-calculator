import React from 'react'
import PropTypes from 'prop-types'

import Select from 'react-select'
import '../react-select.scss'

const NumPages = props => {
    const { numPagesLimit, numPages, handleNumPagesChange, pagesType, numPagesLabel, numPagesWordsView } = props

    const wordsViewOptions = []
    for (let i = 1; i <= numPagesLimit; i++) {
        wordsViewOptions.push(
            {
                value: i,
                name: numPagesWordsView
                    ? `${i * 275} words`
                    : `${i} ${pagesType}${(i !== 1 ? 's' : '')} / ${i * 275} words`
            }
        )
    }

    const noWordsViewOptions = []
    for (let i = 1; i <= numPagesLimit; i++) {
        noWordsViewOptions.push(
            {
                value: i,
                name: `${i} ${pagesType}${(i !== 1 ? 's' : '')}`
            }
        )
    }

    return (
        <div className='Calculator__row Calculator__row--numPages'>
            <label className='Calculator__label'>{numPagesLabel} <span>{pagesType}s</span></label>
            <Select
                value={numPages}
                matchProp='value'
                matchPos='start'
                clearable={false}
                searchable
                valueKey='value'
                labelKey='name'
                onChange={handleNumPagesChange}
                options={(pagesType === 'page') ? wordsViewOptions : noWordsViewOptions}
            />
        </div>
    )
}

NumPages.propTypes = {
    numPagesLimit: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    pagesType: PropTypes.string.isRequired,
    numPagesLabel: PropTypes.string.isRequired,
    numPagesWordsView: PropTypes.bool.isRequired,
    handleNumPagesChange: PropTypes.func.isRequired
}

export default NumPages
