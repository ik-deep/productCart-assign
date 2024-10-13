let total = 0;

document.querySelectorAll('.radio-btn').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price'));
        total += price;
        updateCart();
    });
});

function updateCart() {
    document.getElementById('total').innerText = total.toFixed(2);
    total=0;
}

document.getElementById('product1').addEventListener('click',function(){
    const x = document.getElementById('size-color-box1');
    if (x.style.display === "none") {
        x.style.display = "block";
        this.style.backgroundColor='#ffe7eb'
        this.style.borderColor='#FF6B82';
      } else {
        x.style.display = "none";
        this.style.backgroundColor='#fff';
        this.style.borderColor='#C8C8C8';
      }
})

document.getElementById('product2').addEventListener('click',function(){
    const x = document.getElementById('size-color-box2');
    if (x.style.display === "none") {
        x.style.display = "block";
        this.style.backgroundColor='#ffe7eb';
        this.style.borderColor='#FF6B82';
      } else {
        x.style.display = "none";
         this.style.backgroundColor='#fff';
         this.style.borderColor='#C8C8C8';
      }
})

document.getElementById('product3').addEventListener('click',function(){
    const x = document.getElementById('size-color-box3');
    if (x.style.display === "none") {
        x.style.display = "block";
        this.style.backgroundColor='#ffe7eb'
        this.style.borderColor='#FF6B82';
      } else {
        x.style.display = "none";
         this.style.backgroundColor='#fff';
         this.style.borderColor='#C8C8C8';
      }
})

