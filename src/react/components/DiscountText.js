import React from 'react'
import PropTypes from 'prop-types'

const DiscountText = props => {
    const {
        currencyRates,
        currency,
        currencySign,
        discountText,
        discountFromUSDCents
    } = props

    const currencyCorrelation = currencyRates[currency]
    const discountTextPrice = `${currencySign}${(Math.round(discountFromUSDCents * currencyCorrelation) / 100).toFixed(2)}`

    return (
        <div className='Calculator__row Calculator__row--discount-text'>
            {discountText} {discountTextPrice}
        </div>
    )
}

DiscountText.propTypes = {
    currencyRates: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    discountText: PropTypes.string.isRequired,
    currencySign: PropTypes.string.isRequired,
    discountFromUSDCents: PropTypes.number.isRequired
}

export default DiscountText
