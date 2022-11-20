
const cartImg = document.querySelector('.cart-img');
const cartList = document.querySelector('.total-cart-items');
const minusItem = document.querySelector('.minus-icon');
const plusItem = document.querySelector('.plus-icon');
const totalSelectedItem = document.querySelector('.total-selected-item');
const chooseImg = document.querySelectorAll('.product-img-list');
const chooseCrouselImg = document.querySelectorAll('.crousel-image-list')
const mainImg = document.querySelector('.product-img');
const mainCrouselImg = document.querySelector('.product-crousel-img')
const totalItemsNumber = document.querySelector('.totalItemsNumber');
const totalItemSpan = document.querySelector('.total-item-span');
const totalCalculatedAmount = document.querySelector('.total-calculated-amount');
const deleteItem = document.querySelector('.deleteIcon');
const cartContainer = document.querySelector('.cartItems-container');
const emptyCart = document.querySelector('.cart-total');
const checkOutbtn = document.querySelector('.checkOut-btn')
const productImage = document.querySelectorAll('.showing-crousel-image')
const openImageCrousel = document.querySelector('.showing-product-image')
const imageCrouselSection = document.querySelector('.image-crousel-section')
const cancelBtn = document.querySelector('.cancel-btn')
const previousIcon = document.querySelector('.previous-icon')
const nextIcon = document.querySelector('.next-icon')
const openMenuIcon = document.querySelector('.open-menu-icon')
const closeMenuIcon = document.querySelector('.close-menu-icon')
const navUl = document.querySelector('.nav-ul')
const body = document.body;
let i = 0;

// CART SECTION 

cartImg.addEventListener('click', () => {
    cartList.classList.toggle('none')
})

// MINUS ITEM 

minusItem.addEventListener('click', () => {
    if (i == 1) {

        let totalData = totalSelectedItem.innerHTML = --i
        totalItemsNumber.innerHTML = totalData
        checkOutbtn.classList.add('none')
        cartContainer.classList.add('none')
        emptyCart.classList.remove('none')
        totalItemsNumber.classList.add('none')

    } else if (i < 1) {

        totalSelectedItem.innerHTML = i

    } else {

        let totalData = totalSelectedItem.innerHTML = --i
        totalItemsNumber.innerHTML = totalData
        totalItemSpan.innerHTML = totalData
        totalCalculatedAmount.innerHTML = " $" + 125 * totalData + ".00"
    }

})

// PLUS ITEM 

plusItem.addEventListener('click', () => {

    let totalData = totalSelectedItem.innerHTML = ++i
    totalItemsNumber.innerHTML = totalData
    totalItemSpan.innerHTML = totalData
    totalCalculatedAmount.innerHTML = " $" + 125 * totalData + ".00"
    cartContainer.classList.remove('none')
    checkOutbtn.classList.remove('none')
    emptyCart.classList.add('none')
    totalItemsNumber.classList.remove('none')
})

// DELETE ITEM 

deleteItem.addEventListener('click', () => {
    cartContainer.classList.toggle('none')
    checkOutbtn.classList.add('none')
    emptyCart.classList.toggle('none')
    i = 0
    totalItemsNumber.innerHTML = i
    totalSelectedItem.innerHTML = i
})

// IMAGE SLIDER 

chooseImg.forEach((elem, index) => {

    elem.addEventListener('click', () => {
        if (index === 0) {
            mainImg.src = "./images/image-product-1.jpg"
            elem.classList.add('active')
            chooseImg.forEach((elem, index) => {
                if (index !== 0) {
                    elem.classList.remove('active')
                }
            })

        } else if (index === 1) {
            mainImg.src = "./images/image-product-2.jpg"
            elem.classList.toggle('active')
            chooseImg.forEach((elem, index) => {
                if (index !== 1) {
                    elem.classList.remove('active')
                }
            })


        } else if (index === 2) {
            mainImg.src = "./images/image-product-3.jpg"
            elem.classList.toggle('active')
            chooseImg.forEach((elem, index) => {
                if (index !== 2) {

                    elem.classList.remove('active')
                }
            })


        } else if (index === 3) {
            mainImg.src = "./images/image-product-4.jpg"
            elem.classList.toggle('active')
            chooseImg.forEach((elem, index) => {
                if (index !== 3) {
                    elem.classList.remove('active')
                }
            })


        }

    })

})

// IMAGE CROUSEL SECTION 

openImageCrousel.addEventListener('click', () => {
    imageCrouselSection.classList.remove('none')
    body.classList.add('opacity')
    imageCrouselSection.classList.add('opacity')
})


cancelBtn.addEventListener('click', () => {
    imageCrouselSection.classList.add('none')
    body.classList.remove('opacity')
    imageCrouselSection.classList.remove('opacity')
})


let slideIndex = 1;
showslides(slideIndex);


previousIcon.addEventListener('click', () => {

    showslides(slideIndex -= 1);

})


nextIcon.addEventListener('click', () => {

    showslides(slideIndex += 1);
})

function currentSlide(n) {
    showslides(slideIndex = n)
}

function showslides(n) {
    let i;
    if (n > productImage.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = productImage.length
    }

    for (i = 0; i < productImage.length; i++) {
        productImage[i].style.display = "none"
    }
    for (i = 0; i < chooseCrouselImg.length; i++) {
        chooseCrouselImg[i].className = chooseCrouselImg[i].className.replace(" active", "")
    }
    productImage[slideIndex - 1].style.display = "block";
    chooseCrouselImg[slideIndex - 1].className += " active"

}

// FOR MENU 

openMenuIcon.addEventListener('click', () => {
    closeMenuIcon.classList.remove('none')
    openMenuIcon.classList.add('none')
    navUl.style.display = "flex"
})

closeMenuIcon.addEventListener('click', () => {
    closeMenuIcon.classList.add('none')
    openMenuIcon.classList.remove('none')
    navUl.style.display = "none"
})

////////////////////////////////////////////////////////////////////////////////////////////
