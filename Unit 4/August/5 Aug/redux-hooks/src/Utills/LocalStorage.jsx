export const SaveData = (key, data) => {


    localStorage.setItem(key, JSON.stringify(data))
}
export const LoadData = (key) => {


    let data = JSON.parse(localStorage.getItem(key))
    return data
}

