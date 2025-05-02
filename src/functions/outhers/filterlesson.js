const filterLessons = (value, list, result) => {

    const filterResult = list.filter((item) => item.content.toLowerCase().includes(value.toLowerCase()))
    
    result(filterResult)
}

export default filterLessons