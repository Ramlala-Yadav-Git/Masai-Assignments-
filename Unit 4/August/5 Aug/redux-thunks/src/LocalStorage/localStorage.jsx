

export const loadData = (key) => {
    try {
        let data = JSON.parse(localStorage.getItem(key))
        return data
    }
    catch (err) {
        return undefined
    }
}

export const saveData = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value))
}