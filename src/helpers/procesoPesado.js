
export const procesoPesado = ( value ) => {

    for (let i = 0; i< value; i++ ) {
        console.log( "proceso pesado " )
    }
    return `${ value } realizadas`
}