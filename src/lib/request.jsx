export const getData = async (tittle, page, type) => {
    const urlApi = "https://www.omdbapi.com/"
    const apiKey = 'a487a7d9'
    // const title = 'of the'
    const url = `${urlApi}?apikey=${apiKey}&s=${tittle}&type=${type}&page=${page}`

    //https://www.omdbapi.com/?apikey=####&s=love&type=series&page=8


    //https://www.omdbapi.com/?apikey=####&s=love&type=series&page=8
    const response = await fetch(url)

    //http://www.omdbapi.com/?i=tt3896198&apikey=a487a7d9
    // http://www.omdbapi.com/?apikey=[yourkey]&
    // https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa
    // https://omdbapi.com/?s=series&page=1&s=the%20midnight%20club&y=2022&apikey=a487a7d9&

    const data = await response.json()

    console.log('DATA >>>', data);

    return data.Search
}


