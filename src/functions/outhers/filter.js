const filter = (value, list, result, islema) => {

    let filterResult;

    if (islema)
        filterResult = list.filter((item) => item.question.toLowerCase().includes(value.toLowerCase()))
    else
        filterResult = list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    
    result(filterResult)
}

export default filter