fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => featuredBooks(res));

    let DivFeaturedBooks = document.getElementById('featured-books');
    function  featuredBooks(res)
    {
      for (let index = 45; index >41; index--) {

        console.log(res);
        DivFeaturedBooks.innerHTML += `
        <div class="col-lg-3 col-6-md col-sm-12">
            <img class="w-75 shadow p-4 bg-color-2" src="${res[index].simple_thumb}"/>
            <h4 class="card-title p-3">${res[index].title}</h4>
            <p class="card-author fs-6">${res[index].author}</p>
        </div> ` 
        }
    };
    //-----------------------------------------------------------------------------
    fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
    .then(res => res.json())
    .then(res => bestSellingBook(res));

    let DivBestSellingBook = document.getElementById('best-selling-book');
    function bestSellingBook(res)
    {
      console.log(res);
      DivBestSellingBook.innerHTML +=`
    <div class="col-lg-6 d-flex justify-content-end justify-content-md-center justify-content-sm-center align-items-center">
            <img class="" src="${res.cover}" /> 
        </div>
        <div class="col-lg-6 pt-5">
            <h2 class="title w-50">Best Selling Book</h2>
            <div class="line mb-5"></div>
            <h3 class="mb-3 fs-6 text text-secondary">${res.title}</h3>
            <h3 class="prata-font">${res.fragment_data.title}</h3>
            <p class="w-75 py-4 fs-6 text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates aperiam ducimus at suscipit officia repellat blanditiis 
                cupiditate molestias facilis quibusdam tenetur totam beatae numquam, ipsa odio similique itaque! Reprehenderit?
            </p>
            <button type="button" class="btn rounded-0 border-0 text-dark fw-bold">
                Shop it Now <i class="px-2 fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;
     
    };
    fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => popularBooks(res));

    let DivPopulardBooks = document.getElementById('popular-books');
    function  popularBooks(res)
    {
      for (let index = 0; index <8; index++ ) {

        console.log(res);
        DivPopulardBooks.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 ">
            <img class="w-75 shadow p-4 bg-color-2 " src="${res[index].simple_thumb}"/>
            <h3 class="card-title p-3">${res[index].title}</h3>
            <p class="card-author fs-6">${res[index].author}</p>
        </div> `
        }
    };