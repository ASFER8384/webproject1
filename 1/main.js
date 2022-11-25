async function myfunc() {
  try {
    let num = document.getElementById("ip").value

    let data = await fetch(`https://www.anapioficeandfire.com/api/books/${num}`)

    let da = await data.json()

    console.log(da)

    let display = document.getElementById("container")
    display.innerHTML = `<div class="card" style="width: 25rem;">
    <div class="card-body ">
    <h3>${da.name}</h3>
      <p class="card-text">Authors :${da.authors}</p>
      <p class="card-text">Media Type :${da.mediaType}</p>
      <p class="card-text">Number of pages :${da.numberOfPages}</p>
      <p class="card-text">Published by :${da.publisher}</p>
      <p class="card-text">Released date :${da.released}</p>
      <p class="card-text">Link:${da.url}</p>
    </div>
  </div>`
  }
  catch {
    alert("Enter Number 1 to 12")
  }
}

