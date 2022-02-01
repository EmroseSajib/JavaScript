fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayUser(data))
    .catch(error => console.log(error))


function displayUser(users) {
    const clothsDiv = document.getElementById("cloths-name");
    clothsDiv.innerHTML = "";


    users.map((user) => {
        const clothDiv = document.createElement("div");
        clothDiv.className = "cloth col-md-3 ";
        const clothInfo = `
        <div class="card";">
      <img src=${user.flags.png} class="card-img-top image-fluid" alt="...">
  <div class="card-body p-3">
<h4 class="card-title">Country Name:${user.name}</h4>
<h6 class="card-text">Area:${user.area}</h6>
<p>Region:${user.region}</p>
<button onclick="srcBtn('${user.name}')">Details</button>
</div>
</div>
`
        clothDiv.innerHTML = clothInfo;
        clothsDiv.appendChild(clothDiv);

    })
}

function srcBtn(name) {

    const url = `https://restcountries.com/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => dispaly2(data[0]));

}


function dispaly2(values) {
    const class_name = document.getElementById("class_name");

    class_name.innerHTML = `


<img src="${values.flags.png}"></img>
<p>Country Name: ${values.name}</p>
<p>Capital Name: ${values.capital}</p>
<p>Total Area: ${values.area}</p>


`

}