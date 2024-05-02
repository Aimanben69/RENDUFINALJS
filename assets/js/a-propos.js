const services = document.querySelector("#services")

fetch("assets/js/Chocolatier.json")
  .then(response => response.json())
  .then(data => { 
    services.innerText = data.listeBenefficesClients
  })