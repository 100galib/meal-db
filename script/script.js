const getFetchItem = async (valueItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valueItem}`;
    const res = await fetch(url);
    const doc = await res.json();
    getApiData(doc.meals);
}

const getApiData = (getArray) => {
    console.log(getArray)
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