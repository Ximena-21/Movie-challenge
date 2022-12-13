export const getData = async (tittle, page, type) => {
    const urlApi = "https://www.omdbapi.com/"
    const apiKey = 'a487a7d9'
    const url = `${urlApi}?apikey=${apiKey}&s=${tittle}&type=${type}&page=${page}`

    const response = await fetch(url)

    const data = await response.json()

    console.log('DATA >>>', data);

    return data.Search
}


