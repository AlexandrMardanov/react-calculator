import React from 'react'
import PropTypes from 'prop-types'

const Total = props => {
    const {
        currencyRates,
        price,
        discount,
        currency,
        currencySign,
        numPages,
        siteCurrency,
        totalLabel,
        numPapers,
        getDoctypeIdsWithoutDiscount,
        doctype,
        discountFromUSDCents
    } = props
    const priceUSDcents = Math.round(price * 100 / currencyRates[siteCurrency])
    const discountValue = priceUSDcents * numPages * numPapers > discountFromUSDCents &&
        !getDoctypeIdsWithoutDiscount.includes(doctype)
        ? discount
        : 1

    const priceValue = (
        <span className='Calculator__total--value'>
            {currencySign}
            {(Math.round(priceUSDcents * currencyRates[currency]) * discountValue * numPages * numPapers / 100).toFixed(2)}
        </span>
    )

    const oldPriceValue = (
        <span className='Calculator__total--old-price'>
            {currencySign}
            {(Math.round(priceUSDcents * currencyRates[currency]) * numPages * numPapers / 100).toFixed(2)}
        </span>
    )

    return (
        <div className='Calculator__prices'>
            <div className='Calculator__total'>
                <span className='Calculator__total--label'>{totalLabel}</span>
                <span className='Calculator__total--value'>
                    {
                        discountValue === 1
                            ? priceValue
                            : <React.Fragment>
                                {oldPriceValue} {priceValue}
                            </React.Fragment>
                    }
                </span>
            </div>
        </div>
    )
}

Total.propTypes = {
    price: PropTypes.number.isRequired,
    currencyRates: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    currencySign: PropTypes.string.isRequired,
    siteCurrency: PropTypes.string.isRequired,
    totalLabel: PropTypes.string.isRequired,
    numPages: PropTypes.number.isRequired,
    numPapers: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    doctype: PropTypes.number.isRequired,
    discountFromUSDCents: PropTypes.number.isRequired,
    getDoctypeIdsWithoutDiscount: PropTypes.array.isRequired
}

export default Total
