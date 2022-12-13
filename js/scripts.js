document.getElementById("btnSubmit").addEventListener("click", enter);

function thankU(num){
    let text = `
        <div class="thankYou">
            <img src="./images/illustration-thank-you.svg" alt="thankU_icon">
        </div>
        <div class="selected">
            <p>You selected ${num} out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p>
            We appreciate you taking the time to give a rating.
            if you ever need more support, don't hesitate to get in touch!
        </p>`
    document.getElementById("main").className="card2";
    document.getElementById("main").innerHTML=text;
}

function enter(){
    let score = document.querySelector('input[name="score"]:checked').value;
    thankU(score);
}
