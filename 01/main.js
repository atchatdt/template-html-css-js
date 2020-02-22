const listItemS20 = document.getElementById("s20List");
const S20Ultra = document.getElementById("mobile-s20-ultra");
const S20Plus = document.getElementById("mobile-s20-plus");
const S20 = document.getElementById("mobile-s20");
const title = document.querySelector('.title')
const priceS = document.querySelector('.s-price')
listItemS20.addEventListener("change", () => {
  let index = +listItemS20.value;

  if (index == 1) {

    title.innerHTML = "S20 Ultra"
    priceS.innerHTML = "24.990.000"
    S20Ultra.classList.add("show-img");
    S20Ultra.classList.remove('hidden-img')

    S20Plus.classList.remove("show-img");
    S20Plus.classList.add('hidden-img')
    S20.classList.remove("show-img");
    S20.classList.add('hidden-img')
  } else if (index == 2) {

    title.innerHTML = "S20 Plus"
    priceS.innerHTML = "18.990.000"
    S20Plus.classList.add("show-img");
    S20Plus.classList.remove('hidden-img')

    S20Ultra.classList.remove("show-img");
    S20Ultra.classList.add('hidden-img')

    S20.classList.remove("show-img");
    S20.classList.add('hidden-img')
  } else if (index == 3) {

    title.innerHTML = "S20"
    priceS.innerHTML = "18.490.000"
    S20.classList.add("show-img");
    S20.classList.remove('hidden-img');

    S20Ultra.classList.add('hidden-img')
    S20Ultra.classList.remove("show-img");

    S20Plus.classList.remove("show-img");
    S20Plus.classList.add('hidden-img')
  }
});
