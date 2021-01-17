const  getDay = (str) =>{
    var d = new Date(str);
    return d.getDate()
}
const  getDate = (str) =>{
    var d = new Date(str);
    var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    var month = monthNames[d.getMonth()]
    var year = d.getFullYear()
    return `${month},${year}`
}

module.exports = {getDay,getDate};