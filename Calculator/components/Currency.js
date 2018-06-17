import React from 'react'
import PropTypes from 'prop-types'

const Currency = props => {
    const { currency, handleCurrencyChange, currencySignes, currencyLabel } = props
    const currencyNames = Object.keys(currencySignes)

    return (
        <div className='Calculator__row Calculator__row--currency'>
            <label className='Calculator__label'>{currencyLabel}</label>
            <div
                className='Calculator__currency'
                onClick={handleCurrencyChange}>
                {currencyNames.map((item, index) => {
                    const activeClass = currency === item ? ' active' : ''

                    return <span
                        className={`Calculator__currency-item${activeClass}`}
                        key={index}>{item}</span>
                })}
            </div>
        </div>
    )
}

Currency.propTypes = {
    currency: PropTypes.string.isRequired,
    currencyLabel: PropTypes.string.isRequired,
    handleCurrencyChange: PropTypes.func.isRequired,
    currencySignes: PropTypes.object.isRequired
}

export default Currency
