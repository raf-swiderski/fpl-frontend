async function getApiData(url) {
    try {
        let response = await fetch(url)
        response = await response.json()
        return response
    } catch (error) {
        console.log(error)
    }
}

export default getApiData;