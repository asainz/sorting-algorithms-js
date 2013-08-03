var selectionSort = (function(array){
    
    var swap = function(array, i, j){
            var aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        },
        isArray = function(array){
            return toString.call(array) === '[object Array]';
        },
        sort = function(array){
            var min, i, j, len;

            if( !isArray(array) ){ return undefined; }

            len = array.length;

            for( i = 0 ; i < len ; i++){
                min = i;

                for( j = (i+1) ; j < len ; j++ ){
                    if( array[j] < array[min] ){
                        min = j;
                    }
                }
                swap(array, i, min);
            }

            return array;
        };

    return {
        sort: sort
    };
    
})();