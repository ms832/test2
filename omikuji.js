window.onload = function(){
    const kuji = ["大吉","中吉","小吉","末吉","吉","凶"];
    document.getElementById("button").onclick = function(){
        var random = Math.floor(Math.random() * kuji.length);
        document.getElementById("kekka").textContent = kuji[random];
    }
    $("button").click(function(){
        alert("buttonがクリックされました");
        console.log("こんにちは");
    });
}

