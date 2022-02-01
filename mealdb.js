function searchFood() {
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display1(data.meals))
}

display1 = (values) => {

    const search_result = document.getElementById("search_result");
    const serImg = document.getElementById("serImg");
    search_result.innerText = '';

    values.map((user) => {
        serImg.style = 'display:none';
        const div = document.createElement("div");

        div.classList.add('col');
        div.innerHTML = `
       <div class="card">
                    <img src="${user.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.strMeal}</h5>
                        <p class="card-text">${user.strInstructions.slice(0,200)}</p>
                    </div>
                </div>
       
       
       
       `

        search_result.appendChild(div);



    })


}