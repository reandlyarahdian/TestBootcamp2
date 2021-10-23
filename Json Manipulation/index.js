const fs = require('fs')

let data = null

const findItem = (data, name) =>{
    return data.filter(item => item.placement?.name == name)
}

const findType = (data, name) =>{
    return data.filter(item => item.type == name)
}

const findTags = (data, name) =>{
    return data.filter(item => item.tags?.includes(name))
}

const findTime = (data, date) =>{
    return data.filter(item => {
        const parseDate = new Date(date).toLocaleString()
        .split(',')[0]
        return new Date(item.purchased_at).toLocaleString().includes(parseDate)
    })
}

fs.readFile('./data.json','utf-8',(err,jsonString)=> {
    data = JSON.parse(jsonString);
    console.log(findItem(data, "Meeting Room"))
    console.log(findType(data, "electronic"))
    console.log(findTags(data, "furniture"))
    console.log(findTags(data, "brown"))
    console.log(findTime(data, "16 January 2020"))
})


