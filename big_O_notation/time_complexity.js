/*

BigO notation is used to analyze the performance of an algorithm

Space Complexity : 
    1) O(1) is fast 
        ex: When the value is constant so the complexity is O(1)
        # o(500) = o(1) 
        */

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

/*
    2) o(n) is slower when the n incresase space increase
        ex: when the value of n increase the time increases
        # O(n + 10)  = o(n)
        # o(2n) = o(n)
        */

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

/* 3) o(n^2) is very slow 
    ex : For loop inside a for loop (When n increase time double increase)
     */

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}