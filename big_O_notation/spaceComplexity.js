/*

BigO notation is used to analyze the performance of an algorithm

Space Complexity : 
    1) O(1) is fast 
        ex: At the time of initialization Number, boolean are constant  so the complexity is O(1)
        */

        function logUpTo(n) {
         for (var i = 1; i <= n; i++) {
             console.log(i);
             }
        }

  /*  2) o(n) is slower when the n incresase space increase
        ex: At the time of initialization Array and string takes  o(n)
        */

      function onlyElementsAtEvenIndex(array) {
         var newArray = Array(Math.ceil(array.length / 2));
        for (var i = 0; i < array.length; i++) {
         if (i % 2 === 0) {
            newArray[i / 2] = array[i];
         }
      }
         return newArray;
    }