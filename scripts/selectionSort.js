var selectionSort = function( array ){
    var min, i, j, len, aux;

    if( toString.call(array) !== '[object Array]' ){
        return undefined;
    }

    len = array.length;

    for( i = 0 ; i < len ; i++){
        min = i;

        for( j = (i+1) ; j < len ; j++ ){
            if( array[j] < array[min] ){
                min = j;
            }
        }

        aux = array[i];
        array[i] = array[min];
        array[min] = aux;

    }

    return array;
};