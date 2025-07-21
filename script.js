function details() {
    const input = document.getElementById('input').value;
    if (input) {
        get(input).then(meals => {
            if (meals && meals.length > 0) {
                console.log(meals);
                // You can add code here to display the meals on the page
            } else {
                console.log('No meals found');
            }
        });
    } else {
        console.log('Please enter a recipe name');
    }
}

async function get(name){
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data.meals;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}
