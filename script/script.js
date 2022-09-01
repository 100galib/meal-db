const getFetchItem = async (valueItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueItem}`;
    const res = await fetch(url);
    const doc = await res.json();
    getApiData(doc.meals);
}

const getApiData = (getArray) => {
    const showData = document.getElementById('wrap-items');
    showData.innerText = ``;
    const displayMassage = document.getElementById('alertt');
    if(getArray === null){
        displayMassage.classList.remove('d-none');
        showSpinner(false);
    } else{
        displayMassage.classList.add('d-none');
    }
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
                <button onclick="showDetails(${arra.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">See More</button>
            </div>
            </div>
        `;
        showData.appendChild(div);
        showSpinner(false);
    }
}

const showDetails = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await fetch(url);
    const doc = await res.json();
    setModal(doc.meals[0])
}

const getData = (id, value) => {
    const setData = document.getElementById(id);
    setData.innerText =value;
    return setData;

}

const setModal = (dataID) => {
    getData('staticBackdropLabel', `${dataID.strMeal}`);
    getData('list-1', `${dataID.strIngredient1}`);
    getData('list-2', `${dataID.strIngredient2}`);
    getData('list-3', `${dataID.strIngredient3}`);
    getData('list-4', `${dataID.strIngredient4}`);
    getData('list-5', `${dataID.strIngredient5}`);
    getData('list-6', `${dataID.strIngredient6}`);
    getData('list-7', `${dataID.strIngredient7}`);
    getData('list-8', `${dataID.strIngredient8}`);
    getData('list-9', `${dataID.strIngredient9}`);
    getData('instraction', `${dataID.strInstructions}`);
}

const showSpinner = (validate) => {
    const spinner = document.getElementById('spinner');
    if(validate){
        spinner.classList.remove('d-none');
    } else{
        spinner.classList.add('d-none');
    }
}



// Event Handler On Search Button
const searchClick = () => {
    const getUserInput = document.getElementById('food-name');
    const getUserText = getUserInput.value;
    getFetchItem(getUserText)
    showSpinner(true);
}

// Event Handler on key Button
document.getElementById('food-name').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            const getUserInput = document.getElementById('food-name');
            const getUserText = getUserInput.value;
            getFetchItem(getUserText)
            showSpinner(true);
        }

})