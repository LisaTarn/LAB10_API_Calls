const error = document.getElementById('error');
const success = document.getElementById('success')

// fetching data 
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            success.innerText = "Your request was successful"
            displayData(data);
        })
        .catch(error => error.innerText = "Your request was not successful"
)});

// putting data - for some reason this is not working

function putUserID () {
    const titleinput = document.getElementById("title2");
    const bodyinput = document.getElementById("body2");
    const Idinput = document.getElementById("id2");
    
    const title = titleinput.value;
    const body = bodyinput.value;
    const userId = 1
    const id = Idinput.value;
    
    
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`, true);
        xhr.setRequestHeader ('Content-type', 'application/json');
        xhr.onload = function() {
        if (xhr.status === 200) { // 200 means the request was successful
                 
            success.innerText = "You successfully updated the id"
                    displayData({title: title, body: body, userId: userId, id: id });
                } else {
                    error.innerText = "You were unable to update the id";
                }
                xhr.send(JSON.stringify({title: title, body: body, userId: userId, id: id }));
            
        }};
    
        
// Getting data

document.getElementById('xhrData').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ' https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 4 means the request is complete
            if (xhr.status === 200) { // 200 means the request was successful
                const data = JSON.parse(xhr.responseText);
                success.innerText = "Your request was successful"
                displayData(data);
            } else {
                error.innerText = "Your request was not successful";
            }
        }
    };

    xhr.send();
});

// functions to display data in table

function displayData(data) {
    const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous data

        const row = document.createElement('tr');
        const celluserId = document.createElement('td');
        celluserId.textContent = data.userId;
        const cellId = document.createElement('td');
        cellId.textContent = data.id;
        const cellTitle = document.createElement('td');
        cellTitle.textContent = data.title;
        const cellBody = document.createElement('td');
        cellBody.textContent = data.body;

        row.appendChild(celluserId);
        row.appendChild(cellId);
        row.appendChild(cellTitle);
        row.appendChild(cellBody);
        tableBody.appendChild(row);}



function displayDataPost(data){
    const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous data

        const row = document.createElement('tr');
        const celluserId = document.createElement('td');
        celluserId.textContent = " ";
        const cellId = document.createElement('td');
        cellId.textContent = " ";
        const cellTitle = document.createElement('td');
        cellTitle.textContent = data.title;
        const cellBody = document.createElement('td');
        cellBody.textContent = data.body;

        row.appendChild(celluserId);
        row.appendChild(cellId);
        row.appendChild(cellTitle);
        row.appendChild(cellBody);
        tableBody.appendChild(row);}

        function displayDataPut(data){
            const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear previous data
        
                const row = document.createElement('tr');
                const celluserId = document.createElement('td');
                celluserId.textContent = data.userId;
                const cellId = document.createElement('td');
                cellId.textContent = data.id;
                const cellTitle = document.createElement('td');
                cellTitle.textContent = data.title;
                const cellBody = document.createElement('td');
                cellBody.textContent = data.body;
        
                row.appendChild(celluserId);
                row.appendChild(cellId);
                row.appendChild(cellTitle);
                row.appendChild(cellBody);
                tableBody.appendChild(row);}

// function to post data

document.getElementById("postData").addEventListener("click", function() {

    let titleinput = document.getElementById("title1");
let bodyinput = document.getElementById("body1");

let title = titleinput.value;
let body = bodyinput.value;


    let formData ={
        title:title,
        body: body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'   
        },
        body:JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();

        }).then(data => {
            success.innerText = "Successfully Posted"
            displayDataPost(data);
        }).catch(error => error.innerText = "You are unable to post");
         
    });

    // function to fetch all
    
document.getElementById("allFetch").addEventListener('click', () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            success.innerText = "Successfully posted!"
            displayDataFetchAll(data);
        })
        .catch(error => {
            error.innerText = "Unable to fetch all the data";
        }));

        function displayDataFetchAll(data) {
            const tableBody = document.getElementById('outputTable').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear previous data
        
            data.forEach(data => {
                const row = document.createElement('tr');
                const celluserId = document.createElement('td');
                celluserId.textContent = data.userId;
                const cellId = document.createElement('td');
                cellId.textContent = data.id;
                const cellTitle = document.createElement('td');
                cellTitle.textContent = data.title;
                const cellBody = document.createElement('td');
                cellBody.textContent = data.body;
        
                row.appendChild(celluserId);
                row.appendChild(cellId);
                row.appendChild(cellTitle);
                row.appendChild(cellBody);
                tableBody.appendChild(row);});
        };


 