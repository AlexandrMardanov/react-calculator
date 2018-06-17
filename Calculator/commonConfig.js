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
    getDoctypeIdsWithoutDiscount: [125, 222, 126, 142],
    getDoctypeIdsWithoutCategory: [152, 163, 217, 182, 174],
    getPageLabels: {
        51: 'Slide',
        125: 'Question',
        126: 'Question',
        182: 'Assignment',
        222: 'Question',
        234: 'Math problem',
        235: 'Math problem',
        260: 'Map',
        261: 'Assignment',
        262: 'Assignment'
    },
    getDoctypeIdsWithPapers: [142, 143, 144, 145, 223],
    getSpecialPrices: {
        65: { value: 10, type: 1 },
        67: { value: 10, type: 1 },
        70: { value: 10, type: 1 },
        71: { value: 10, type: 1 },
        72: { value: 10, type: 1 },
        73: { value: 10, type: 1 },
        75: { value: 10, type: 1 },
        77: { value: 10, type: 1 },
        125: { value: 10, type: 1 },
        126: { value: 10, type: 1 },
        136: { value: 10, type: 1 },
        139: { value: 15, type: 2 } /* type: 2 => % */
    }
}
