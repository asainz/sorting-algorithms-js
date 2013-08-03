'use strict';

describe('Selection Sort', function () {

    var sort;

    beforeEach(function(){
        sort = selectionSort.sort;
    });

    it('should return undefined if the parameter is not an array ', function () {
        expect( sort('hello') ).toBeUndefined();
        expect( sort(1) ).toBeUndefined();
        expect( sort({}) ).toBeUndefined();
        expect( sort() ).toBeUndefined();
    });

    it('should sort an unsorted array in ascendent way', function(){
        expect( sort([5,1,6,2,9,4]) ).toEqual( [1,2,4,5,6,9] );
    });

    it('should return the array untouched if it\'s already sorted', function(){
        var param = [1,2,3,4,5,6];
        expect( sort( param ) ).toEqual(param);
    });

});