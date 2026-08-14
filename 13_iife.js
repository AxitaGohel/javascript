// Immediately Invoked Function Expressions

function con(){
    console.log("DB Connected...");
}
con();                  // Normal Function

(function con(){
    console.log(`DB Connected One...`);
})();                   // Named IIFE funcation

// first () = function definitation
// second () = execution

(() => {
    console.log(`DB Connected Two...`);
}) ();                  // Arrow Function , Unnamed IIFE function

( (nm) => {
    console.log(`DB Connected Two ${nm}...`);
}) ("Axita");           // Arrow Function with argument