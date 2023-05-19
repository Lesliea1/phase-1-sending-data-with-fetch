// Add your code here
/*function submitData(name, email) {
const userData = {
    "name": name,
    "email": email,
};


const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(submitData),
};

return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object){
        console.log(object);
    })
    .catch(function (error){
        alert("Oops!");
        console.log(error.message);
    });
}
*/

/*function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert("Bad things!");
        console.log(error.message);
      });
  }
  submitData('John Doe', 'john@example.com');
  */

  function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML += `<p>${data.id}</p>`;
      return data;
    })
    .catch(error => {
      document.body.innerHTML += `<p>${error.message}</p>`;
      return error.message;
    });
  }
  submitData('John Doe', 'john@example.com');
