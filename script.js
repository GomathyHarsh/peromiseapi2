async function foo(){
    try{
    let res=await fetch("https://uselessfacts.jsph.pl/random.json"); 
    let res1=await res.json();
    console.log(res1);
    let div = document.createElement("div");
        div.classList.add("conatiner-fulid", "d-flex", "justify-content-center", "m-5", "p-5")
        div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Useless Fact</div>
        <div class="card-body">
          <p class="card-text">${res1.text}</p>
          <p class="card-text">${res1.source}</p>
        </div>
      </div>`
        document.body.append(div);

    }
    catch(error){
       console.log(error);
    }
} foo();