export const commonConfig = {
    currencySignes: {
        GBP: '£',
        AUD: 'A$',
        EUR: '€',
        USD: '$'
    },
    showFields: {
        levels: true,
        subjects: true,
        currency: true,
        promo: true,
        discountText: true,
        promoChecked: true,
        numPagesWordsView: false
    },
    defaultDoctype: 0,
    siteCurrency: 'USD', /* from site config */
    labels: {
        title: 'CALCULATE PRICE',
        doctype: 'Type of document',
        numPages: 'Number of ',
        numPapers: 'Number of papers',
        urgency: 'Urgency',
        subject: 'Subject',
        level: 'Level',
        promoText: `I'm a new customer `,
        total: 'Total price: ',
        proceedText: 'Proceed',
        discountText: 'discount applies to order over ',
        currencyLabel: ''
    },
    discountFromUSDCents: 3000,
    getDoctypeIdsWithoutDiscount: [1],
    getDoctypeIdsWithoutCategory: [2],
    getPageLabels: {
        1: 'Slide',
        2: 'Question'
    },
    getDoctypeIdsWithPapers: [2],
    getSpecialPrices: {
        2: { value: 10, type: 1 }
    }
}
