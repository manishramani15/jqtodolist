$(() => {
let input = $('<input></input>')
let button= $('<button></button>')
$('#container').append(input);
$('#container').append(button);
button.append('Add');
let inner = $('<div></div>');
$('#container').append(inner);


button.click((ev)=>{
    inner.append(input.val()).append('<br>')
    
})













    //    let paraElement = $('<p></p>')
//    paraElement.append('hey')
//    paraElement.append('hey again')

//     $('#container').append(paraElement);
//     $('#container').append('<p>hey!</p>');

    // console.log(paraElement);

})

// let ash = $('#ash') //document.getElementById('ash') 
// let targetDiv = $('#targetDiv')//document.getElementById('targetDiv')

// ash.click((ev) => {
//     targetDiv.append('Ashima<br>')
// })

// // ash.onclick= function Abc(ev) {
    
// //     targetDiv.innerHTML += 'Ashima<br>'
    
// //}
// // ash.hover((ev) => {
// //     console.log(ev.target);
// //     console.log($(ev.target))
// // })


// // console.log(ash);