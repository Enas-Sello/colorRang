let red = document.getElementById( 'redColor' )
let green = document.getElementById( 'greenColor' )
let blue = document.getElementById( 'blueColor' )
let p = document.getElementById('p')

red.addEventListener( 'input', colorChang );
green.addEventListener( 'input', colorChang );
blue.addEventListener( 'input', colorChang );

function colorChang ()
{
    const color = 'RGB(' + red.value + ',' + green.value + ',' + blue.value + ')'

    p.style.backgroundColor = color;
document.getElementById( 'finelColor' ).innerHTML = `<h3 style = "rgb(199, 87, 87)">your back groundcolor is ${color}</h3>`
    //finelColor.innerHTML = `<h1>your finel color is ${ color }</h1>`
    console.log(finelColor)
}
