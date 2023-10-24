console.log("Test page.")

fetch("/providers").then((response) => {
    return response.json();
})
.then ((providers) => {
    for (let provider of providers){
        console.log(provider)
        const p = document.createElement("p");
        p.innerText = provider.providername
        document.body.append(p);
    }
})

