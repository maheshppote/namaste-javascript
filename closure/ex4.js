function x(){
    // let i = 1
    // setTimeout(() => {
    //     console.log(i)
    // }, 1000);

    // for (var i = 1; i <= 5; i++) {  // problem due to var i has function scope
    //    setTimeout(() => {
    //         console.log(i)
    //    }, i * 100);
    // }

    for (var i = 1; i <= 5; i++) {
        function close(i){
              setTimeout(() => {
                  console.log(i)
          }, i * 100);
        }
        close(i)
      }
}

console.log(x())