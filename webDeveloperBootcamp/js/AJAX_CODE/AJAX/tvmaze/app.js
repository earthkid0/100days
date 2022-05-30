const form = document.querySelector("#SearchForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = form.elements.query.value
    const config = { params: { q: search } }
    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config)
    SearchLenth(search, res.data)
    Images(res.data)

});

const Images = (shows) => {
    const span = document.createElement("span")
    for (result of shows) {
        if (result.show.image) {
            const img = document.createElement("img")
            img.src = result.show.image.medium
            span.append(img)
            document.body.append(span)
        }
    }
    span.previousSibling.remove()
}

const SearchLenth = (search, shows) => {
    const h2 = document.createElement("h2")
    const len = shows.length
    h2.append(`${search}의 검색 결과:${len}개`)
    form.append(h2)
    h2.previousSibling.remove()
}

