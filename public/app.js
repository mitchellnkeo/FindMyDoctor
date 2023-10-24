// Function to generate table

function generateTable(currentArray) {

    document.getElementById("myTable").innerHTML = `
    <tr class="bg-primary text-white fw-bold">
        <td>Provider Name</td>
        <td>Location</td>
        <td>Insurance Plan</td>
        <td>Service</td>
        <td>Taking Patients</td>
    `

    for (let provider of currentArray){
        document.getElementById("myTable").innerHTML += `
              <tr>
                 <td>${provider.providername}</td>
                 <td>${provider.providerlocation}</td>
                 <td>${provider.insuranceplan}</td>
                <td>${provider.services}</td>
                <td>${provider.takingpatients}</td>
            </tr>`
    }
}

// Creating all inclusive table

let providerArray
fetch("/providers").then((response) => {
    return response.json();
})
.then ((providers) => {
   providerArray = providers
   console.log(providerArray)
    generateTable(providerArray)
})


// Search bar function

fetch("/providers").then((response) => {
    return response.json();
})
.then ((providers) => {
   providerArray = providers
   console.log(providerArray)

    let searchArray = []
    document.getElementById("search").addEventListener("keyup", function() {
        let search = this.value.toLowerCase();
        console.log(search)

        searchArray = providerArray.filter(function (val) {

            if (val.providername.toLowerCase().includes(search) || val.providerlocation.toLowerCase().includes(search) || val.insuranceplan.toLowerCase().includes(search) || val.services.toLowerCase().includes(search)) {
                let newObj = {name : val.providername, location: val.providerlocation, insurance : val.insuranceplan, services : val.services, patients : val.takingpatients};
                console.log(search)
                console.log(val.providername)
                return newObj
            }

        })
        generateTable(searchArray)
    })

})