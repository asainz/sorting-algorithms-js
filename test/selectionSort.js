'use strict';

describe('Selection Sort', function () {

    it('should return undefined if the parameter is not an array ', function () {
        expect( selectionSort.sort('hello') ).toBeUndefined();
        expect( selectionSort.sort(1) ).toBeUndefined();
        expect( selectionSort.sort({}) ).toBeUndefined();
        expect( selectionSort.sort() ).toBeUndefined();
    });

    it('should sort an unsorted array in ascendent way', function(){
        expect( selectionSort.sort([5,1,6,2,9,4]) ).toEqual( [1,2,4,5,6,9] );
    });

});