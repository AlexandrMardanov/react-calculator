const sortDoctypes = (array) => {
    return array.sort((a, b) => a.name > b.name ? 1 : -1)
}

export default sortDoctypes
