const getFetchItem = async (valueItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueItem}`;
    const res = await fetch(url);
    const doc = await res.json();
    getApiData(doc.meals);
}

const getApiData = (getArray) => {
    const showData = document.getElementById('wrap-items');
    showData.innerHTML = ``;
    for(const arra of getArray){
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
            <img src="${arra.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${arra.strMeal}</h5>
                <p class="card-text">Food Origin: ${arra.strArea}</p>
                <p class="card-text">Food Category: ${arra.strCategory}</p>
                <button onclick="showDetails(${arra.idMeal})" class="btn btn-primary">See More</button>
            </div>
            </div>
        `;
        showData.appendChild(div);
    }
}

const showDetails = (id) => {
    console.log(id)
}






// Event Handler On Search Button
const searchClick = () => {
    const getUserInput = document.getElementById('food-name');
    const getUserText = getUserInput.value;
    getFetchItem(getUserText)
}

// Event Handler on key Button
document.getElementById('food-name').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            const getUserInput = document.getElementById('food-name');
            const getUserText = getUserInput.value;
            getFetchItem(getUserText)
        }

})