import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'
import Doctypes from './Doctypes'
import NumPages from './NumPages'
import NumPapers from './NumPapers'
import Urgency from './Urgency'
import Subjects from './Subjects'
import Levels from './Levels'
import Currency from './Currency'
import Total from './Total'
import Proceed from './Proceed'
import Promo from './Promo'
import DiscountText from './DiscountText'
import getCookie from '../utils/getCookie'

class Calculator extends Component {
    static propTypes = {
        config: PropTypes.shape({
            currencySignes: PropTypes.object.isRequired,
            showFields: PropTypes.object.isRequired,
            defaultDoctype: PropTypes.number.isRequired,
            siteCurrency: PropTypes.string.isRequired,
            labels: PropTypes.object.isRequired,
            getDoctypeIdsWithoutDiscount: PropTypes.array.isRequired,
            getDoctypeIdsWithoutCategory: PropTypes.array.isRequired,
            getDoctypeIdsWithPapers: PropTypes.array.isRequired,
            getPageLabels: PropTypes.object.isRequired,
            getSpecialPrices: PropTypes.object.isRequired
        }),
        api: PropTypes.object
    }

    state = {
        loading: true,
        doctype: 0,
        numPagesLimit: 0,
        urgency: 0,
        subject: 0,
        level: 0,
        price: 0,
        numPages: 1,
        numPapers: 1,
        currency: 'USD',
        currencySign: this.props.config.currencySignes['USD'],
        pagesType: 'page',
        promoChecked: this.props.config.showFields.promoChecked,
        discount: 1
    }

    componentDidMount = () => {
        this.props.api.then(data => {
            this.API = {
                doctypes: data[0].result,
                urgencies: data[1].result,
                prices: data[2].result,
                levels: data[3].result,
                limits: data[4].result,
                currencyRates: data[5].result,
                subjects: data[6].result,
                isAuthorized: data[7].result,
                getDefaultValues: data[8].result,
                getFirstTimePromoCodes: data[9].result
            }

            const promoDiscount = this.API.getFirstTimePromoCodes[0].value
            const defaultCurrency = this.API.getDefaultValues.defaultCurrency

            this.setState({
                doctype: this.props.config.defaultDoctype,
                currency: getCookie('currency') || defaultCurrency,
                discount: (this.state.promoChecked && !this.API.isAuthorized)
                    ? (100 - promoDiscount) / 100
                    : 1
            }, () => {
                const { doctype, currency } = this.state

                this.setState({
                    urgency: +this.API.urgencies[doctype][0].id,
                    level: +this.API.levels[doctype][0].id,
                    currencySign: this.props.config.currencySignes[currency]
                }, () => {
                    const { doctype, level, urgency } = this.state

                    this.setState({
                        price: +this.API.prices[doctype][level][urgency],
                        numPagesLimit: +this.API.limits[doctype][level][urgency]
                    }, () => {
                        this.setState({ loading: false })
                    })
                })
            })
        })
    }

    handleDoctypeChange = (selectedOption) => {
        this.setState({
            doctype: +selectedOption.id,
            numPages: 1,
            numPapers: 1
        }, () => {
            const { doctype } = this.state

            this.setState({
                urgency: +this.API.urgencies[doctype][0].id,
                level: +this.API.levels[doctype][0].id,
                pagesType: (doctype in this.props.config.getPageLabels)
                    ? this.props.config.getPageLabels[doctype]
                    : 'page'
            }, () => {
                const { level, urgency, doctype } = this.state

                this.setState({
                    price: +this.API.prices[doctype][level][urgency],
                    numPagesLimit: +this.API.limits[doctype][level][urgency]
                })
            })
        })
    }

    handleNumPagesChange = (selectedOption) => {
        this.setState({
            numPages: +selectedOption.value
        })
    }

    handleUrgencyChange = (selectedOption) => {
        this.setState({
            urgency: +selectedOption.id
        }, () => {
            const { doctype, level, urgency } = this.state

            this.setState({
                numPagesLimit: +this.API.limits[doctype][level][urgency],
                price: +this.API.prices[doctype][level][urgency]
            }, () => {
                const { numPages, numPagesLimit } = this.state

                this.setState({
                    numPages: numPages > numPagesLimit
                        ? numPagesLimit
                        : numPages
                })
            })
        })
    }

    handleLevelChange = (selectedOption) => {
        this.setState({
            level: +selectedOption.id
        }, () => {
            const { doctype, level, urgency } = this.state

            this.setState({
                price: +this.API.prices[doctype][level][urgency],
                numPagesLimit: +this.API.limits[doctype][level][urgency]
            })
        })
    }

    handleSubjectsChange = (selectedOption) => {
        this.setState({
            subject: selectedOption ? +selectedOption.value : 0
        }, () => {
            const { subject, doctype, level, urgency } = this.state
            const originalPrice = +this.API.prices[doctype][level][urgency]

            for (let key in this.props.config.getSpecialPrices) {
                if (+key === subject) {
                    let value = this.props.config.getSpecialPrices[key].value
                    let type = this.props.config.getSpecialPrices[key].type

                    this.setState({
                        price: type === 1
                            ? originalPrice + value
                            : originalPrice + Math.round(originalPrice * value) / 100
                    })
                    break
                } else {
                    this.setState({
                        price: originalPrice
                    })
                }
            }
        })
    }

    handleCurrencyChange = (e) => {
        if (e.target.className === 'Calculator__currency-item') {
            this.setState({
                currency: e.target.innerText,
                currencySign: this.props.config.currencySignes[e.target.innerText]
            })
        }
    }

    handlePromoChange = () => {
        this.setState({
            promoChecked: !this.state.promoChecked
        }, () => {
            const promoDiscount = this.API.getFirstTimePromoCodes[0].value

            this.setState({
                discount: (this.state.promoChecked && !this.API.isAuthorized)
                    ? (100 - promoDiscount) / 100
                    : 1
            })
        })
    }

    handleNumPapersChange = (selectedOption) => {
        this.setState({
            numPapers: +selectedOption.value
        })
    }

    render() {
        const {
            doctype,
            numPagesLimit,
            level,
            urgency,
            subject,
            loading,
            currency,
            currencySign,
            price,
            numPages,
            pagesType,
            discount,
            promoChecked,
            numPapers
        } = this.state

        const {
            config
        } = this.props

        if (loading) return <Loader />

        return (
            <div className='Calculator'>
                <div className='Calculator__title'>{config.labels.title}</div>
                <Doctypes
                    doctypes={this.API.doctypes}
                    doctype={doctype}
                    doctypeLabel={config.labels.doctype}
                    handleDoctypeChange={this.handleDoctypeChange}
                />
                <NumPages
                    numPagesLimit={numPagesLimit}
                    numPages={numPages}
                    pagesType={pagesType}
                    numPagesWordsView={config.showFields.numPagesWordsView}
                    numPagesLabel={config.labels.numPages}
                    handleNumPagesChange={this.handleNumPagesChange}
                />
                {
                    config.getDoctypeIdsWithPapers.includes(doctype) &&
                    <NumPapers
                        numPapers={numPapers}
                        numPapersLabel={config.labels.numPapers}
                        handleNumPapersChange={this.handleNumPapersChange}
                    />
                }
                <Urgency
                    urgencies={this.API.urgencies}
                    doctype={doctype}
                    urgency={urgency}
                    urgencyLabel={config.labels.urgency}
                    handleUrgencyChange={this.handleUrgencyChange}
                />
                {
                    config.showFields.subjects &&
                    !config.getDoctypeIdsWithoutCategory.includes(doctype) &&
                    <Subjects
                        subjects={this.API.subjects}
                        subject={subject}
                        subjectLabel={config.labels.subject}
                        handleSubjectsChange={this.handleSubjectsChange}
                    />
                }
                {
                    config.showFields.levels &&
                    this.API.levels[doctype][0].name.length > 0 &&
                    <Levels
                        levels={this.API.levels}
                        level={level}
                        levelLabel={config.labels.level}
                        doctype={doctype}
                        handleLevelChange={this.handleLevelChange}
                    />
                }
                {
                    !this.API.isAuthorized &&
                    config.showFields.promo &&
                    !config.getDoctypeIdsWithoutDiscount.includes(doctype) &&
                    <Promo
                        promoCodes={this.API.getFirstTimePromoCodes}
                        currencySign={currencySign}
                        currency={currency}
                        promoText={config.labels.promoText}
                        currencyRates={this.API.currencyRates}
                        handlePromoChange={this.handlePromoChange}
                        promoChecked={promoChecked}
                    />
                }
                {
                    config.showFields.currency &&
                    <Currency
                        currency={currency}
                        currencySignes={config.currencySignes}
                        handleCurrencyChange={this.handleCurrencyChange}
                        currencyLabel={config.labels.currencyLabel}
                    />
                }
                <div className='Calculator__row Calculator__row--bottom'>
                    <Total
                        currencyRates={this.API.currencyRates}
                        currency={currency}
                        currencySign={currencySign}
                        numPages={numPages}
                        numPapers={numPapers}
                        price={price}
                        siteCurrency={config.siteCurrency}
                        discount={discount}
                        totalLabel={config.labels.total}
                        doctype={doctype}
                        discountFromUSDCents={config.discountFromUSDCents}
                        getDoctypeIdsWithoutDiscount={config.getDoctypeIdsWithoutDiscount}
                    />
                    <Proceed
                        doctype={doctype}
                        level={level}
                        urgency={urgency}
                        subject={subject}
                        numPages={numPages}
                        numPapers={numPapers}
                        levels={this.API.levels}
                        currency={currency}
                        promoChecked={promoChecked}
                        proceedText={config.labels.proceedText}
                        promoCodes={this.API.getFirstTimePromoCodes}
                        showFields={config.showFields}
                        getDoctypeIdsWithPapers={config.getDoctypeIdsWithPapers}
                        getDoctypeIdsWithoutCategory={config.getDoctypeIdsWithoutCategory}
                        getDoctypeIdsWithoutDiscount={config.getDoctypeIdsWithoutDiscount}
                    />
                </div>
                {
                    config.showFields.discountText &&
                    !this.API.isAuthorized &&
                    config.showFields.promo &&
                    !config.getDoctypeIdsWithoutDiscount.includes(doctype) &&
                    <DiscountText
                        currencyRates={this.API.currencyRates}
                        currency={currency}
                        currencySign={currencySign}
                        discountText={config.labels.discountText}
                        discountFromUSDCents={config.discountFromUSDCents}
                    />
                }
            </div >
        )
    }
}

export default Calculator
