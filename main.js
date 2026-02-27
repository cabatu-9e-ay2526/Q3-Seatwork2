function buttonDiscount (){
    let budger = document.getElementById("amount").value;
    let percentoff = Number(budger * .2)

    document.getElementById("discount").innerHTML =`
            <div class="container bg-secondary rounded mt-5">
            <h4 class="text-white">Recommended Brands:</h4>
            <button class="btn btn-primary mt-3">Acer</button>
            <button class="btn btn-primary mt-3">Asus</button>
            <button class="btn btn-primary mt-3">Razer</button>

            <p class="text-dark">Elligible discount: <span class="bg-danger">${percentoff}</span></p>
        </div>`;
}

        function displaylocation () {
    document.getElementById("location").innerHTML =` 
            <div class="container bg-secondary rounded mt-5">
            <h4 class="text-white">Locations</h4>
            <button class="btn btn-primary mt-3">Acer Flagship Store SM Megamall</button>
            <button class="btn btn-primary mt-3">Acer Concept Store Greenhills</button>
            <button class="btn btn-primary mt-3">Lenovo Store SM Megamall</button>
            <button class="btn btn-primary mt-3">Lenovo Store Robinsons Place Manila</button>
            <button class="btn btn-primary mt-3">ASUS Concept Store Greenhills Mall</button>
            <button class="btn btn-primary mt-3">ASUS Concept Store Glorietta</button>
            
        </div>`;

}