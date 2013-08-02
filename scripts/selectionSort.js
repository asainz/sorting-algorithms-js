var selectionSort = function( array ){
    var min, minIndex, i, j, len, aux;

    if( toString.call(array) !== '[object Array]' ){
        return undefined;
    }

    len = array.length;

    for( i = 0 ; i < len ; i++){
        min = array[i];
        minIndex = i;

        for( j = (i+1) ; j < len ; j++ ){
            if( array[j] < min ){
                min = array[j];
                minIndex = j;
            }
        }

        aux = array[i];
        array[i] = min;
        array[minIndex] = aux;

    }

    return array;
};