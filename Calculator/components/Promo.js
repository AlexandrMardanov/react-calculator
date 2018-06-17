import React from 'react'
import PropTypes from 'prop-types'

const Promo = props => {
    const {
        handlePromoChange,
        promoCodes,
        currencySign,
        currencyRates,
        currency,
        promoChecked,
        promoText
    } = props

    const discountValue = promoCodes[0].value
    const discountType = +promoCodes[0].type

    const discount = (discountType === 0)
        ? `${discountValue}% OFF`
        : `${currencySign}${(discountValue * currencyRates[currency]).toFixed(2)} OFF`

    return (
        <div className='Calculator__row Calculator__row--promo'>
            <input
                type='checkbox'
                checked={promoChecked}
                id='Calculator__promo'
                onChange={handlePromoChange} />
            <label htmlFor='Calculator__promo'>
                {promoText}
                <span className='Calculator__discount-value'> ({discount})</span>
            </label>
        </div>
    )
}

Promo.propTypes = {
    promoCodes: PropTypes.array.isRequired,
    currencySign: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    promoText: PropTypes.string.isRequired,
    currencyRates: PropTypes.object.isRequired,
    handlePromoChange: PropTypes.func.isRequired,
    promoChecked: PropTypes.bool.isRequired
}

export default Promo
