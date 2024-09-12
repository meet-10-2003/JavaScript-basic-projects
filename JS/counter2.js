const valueTag = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")){
            count++;
        }else if(styles.contains('decrease')){
            count--;
        }else{
            count = 0;
        }

        if(count > 0){
            valueTag.style.color = 'green';
        }else if(count < 0){
            valueTag.style.color = "red";
        }else{
            valueTag.style.color = '#222';
        }
        valueTag.innerHTML = count;
    })
})