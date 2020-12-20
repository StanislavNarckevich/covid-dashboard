 async function getData() {
    let response = await fetch('https://api.covid19api.com/summary');
    let data = await response.json();
    console.log(data)
    return data
}

getData()

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//     console.log(requestOptions);