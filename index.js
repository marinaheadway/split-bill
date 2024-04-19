gsap.from(".item", {opacity:0, duration: 4, stagger: 2, delay : 2})
gsap.to("h1", {y: 20, ease: "bounce", duration: 2.5,  delay : 0.5})

const button = document.querySelector("#btn");
button.addEventListener("click", totalCalculate);
const buttonVisit = document.querySelector("#addVet");
buttonVisit.addEventListener("click", addVisit);
console.log(buttonVisit);

function addVisit(e) {
e.preventDefault();
health.style.display="block";
}

function totalCalculate(e) {
    e.preventDefault();
    const food = document.querySelector("#food").value;
    const poo = document.querySelector("#tw").value;
    const toy = document.querySelector("#toy").value;
    const health = document.querySelector("#health").value;

    if (food ==="" || poo ==="" || toy === ""){
        Swal.fire({
            icon: "error",
            title: "Ой!",
            text: "Забыли заполнить строку!",
          });
    }

  
    let billMonth = (food)/1+(poo)/1+(toy)/1+(health)/1;
    let billDay = billMonth/29.6;
    let billWeek = billMonth/4;

    billMonth = billMonth.toFixed(2);
    billDay = billDay.toFixed(2);
    billWeek = billWeek.toFixed(2);
 
    document.querySelector("#totalBillMonth").textContent = billMonth;
    document.querySelector("#totalBillDay").textContent = billDay;
    document.querySelector("#totalBillWeek").textContent = billWeek;

       }