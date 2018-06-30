import React from 'react'
import PropTypes from 'prop-types'

import sortSubjects from '../../utils/sortSubjects'

import Select from 'react-select'
import '../react-select.scss'

const Subjects = props => {
    const { subjects, subject, handleSubjectsChange, subjectLabel } = props

    const subjectOptions = []

    sortSubjects(subjects).map(item => {
        if (item.children.length === 0) {
            subjectOptions.push({
                value: item.id,
                name: item.name
            })
        } else {
            subjectOptions.push(
                {
                    value: item.id,
                    name: item.name
                }
            )
            sortSubjects(item.children).map(subItem => {
                subjectOptions.push(
                    {
                        value: subItem.id,
                        name: `${subItem.name}`,
                        className: 'Calculator__select-subitems'
                    }
                )
            })
        }
    })

    return (
        <div className='Calculator__row Calculator__row--subject'>
            <label className='Calculator__label'>{subjectLabel}</label>
            <Select
                value={subject}
                clearable
                searchable
                valueKey='value'
                labelKey='name'
                onChange={handleSubjectsChange}
                options={subjectOptions}
                placeholder='Select subject'
            />
        </div>
    )
}

Subjects.propTypes = {
    subjects: PropTypes.array.isRequired,
    subject: PropTypes.number.isRequired,
    handleSubjectsChange: PropTypes.func.isRequired,
    subjectLabel: PropTypes.string.isRequired
}

export default Subjects
