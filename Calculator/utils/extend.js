const extend = (commonConfig, customConfig) => {
    for (let key in customConfig) {
        if (typeof customConfig[key] === 'object') {
            for (let subkey in customConfig[key]) {
                commonConfig[key][subkey] = customConfig[key][subkey]
            }
        } else {
            commonConfig[key] = customConfig[key]
        }
    }

    return commonConfig
}

export default extend
