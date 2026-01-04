      
            let count = 0;

            const value = document.querySelector("#value");
            const db = document.querySelector(".btnDecrease");
            const rb = document.querySelector(".btnReset");
            const ib = document.querySelector(".btnIncrease");

            // style function

            function updateDisplay(){
                value.textContent=count;
                value.style.color= count > 0 && count < 100 ? 'green': count < 0 ? 'red': count >= 100 ? 'yellow': 'black';
            };

            db.addEventListener("click", function(){
                count --;
                updateDisplay();
            });

            rb.addEventListener("click", function(){
                count =0;
                updateDisplay();
            });
            ib.addEventListener("click", function(){
                count ++;
                updateDisplay();
            });

      