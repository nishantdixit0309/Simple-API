function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data =>{
        displayResult(data);
    })
    .catch(error =>{
        console.error("error fetching data:",error);
    });
}

function displayResult(data){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Post ID: ${data.id}</h2>
        <h3>Title: ${data.title}</h3>
        <p>Body: ${data.body}</p>
    `;
}