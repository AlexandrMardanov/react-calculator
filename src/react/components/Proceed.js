import React from 'react'
import PropTypes from 'prop-types'

const Proceed = props => {
    const {
        doctype,
        level,
        levels,
        urgency,
        subject,
        numPages,
        numPapers,
        currency,
        promoCodes,
        promoChecked,
        getDoctypeIdsWithoutCategory,
        getDoctypeIdsWithoutDiscount,
        showFields,
        proceedText,
        getDoctypeIdsWithPapers
    } = props

    const discountName = promoCodes[0].name
    let doctypeHref = `doctype=${doctype}`
    let wrlevelHref = showFields.levels && levels[doctype][0].name.length > 0
        ? `&wrlevel=${level}`
        : ''
    let subjectHref = showFields.subjects &&
        !getDoctypeIdsWithoutCategory.includes(doctype)
        ? `&order_category=${subject}`
        : ''
    let urgencyHref = `&urgency=${urgency}`
    let numPagesHref = `&numpages=${numPages}`
    let numPapersHref = getDoctypeIdsWithPapers.includes(doctype)
        ? `&numpapers=${numPapers}`
        : ''
    let currHref = showFields.currency ? `&curr=${currency}` : ''
    let promoHref = showFields.promo &&
        promoChecked && !getDoctypeIdsWithoutDiscount.includes(doctype)
        ? `&promo=${discountName}`
        : ''

    return (
        <div className='Calculator__order'>
            <a
                href={`/order/?${doctypeHref}${wrlevelHref}${urgencyHref}${subjectHref}${numPagesHref}${numPapersHref}${currHref}${promoHref}`}
                className='Calculator__order--btn'>
                {proceedText}
            </a>
        </div >
    )
}

Proceed.propTypes = {
    doctype: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    urgency: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    proceedText: PropTypes.string.isRequired,
    numPages: PropTypes.number.isRequired,
    numPapers: PropTypes.number.isRequired,
    subject: PropTypes.number.isRequired,
    promoCodes: PropTypes.array.isRequired,
    promoChecked: PropTypes.bool.isRequired,
    levels: PropTypes.object.isRequired,
    getDoctypeIdsWithoutCategory: PropTypes.array.isRequired,
    getDoctypeIdsWithoutDiscount: PropTypes.array.isRequired,
    showFields: PropTypes.object.isRequired,
    getDoctypeIdsWithPapers: PropTypes.array.isRequired
}

export default Proceed
