// What is debouncing?

// debouncing makes sure a function runs only after something has stopped happening for a while
// or a function will run only after the user has stopped triggering it for a certain time 

// Problem: if function calls keep coming quickly, the timer keep resetting, and function runs only once at the end



// 1. ensure timer runs after every call but server is only called when the timer completes 
let timerId = null;
function handleInput(value){

    if(timerId!==null){
        clearTimeout(timerId);
    }

    timerId =  setTimeout(()=>{
        console.log(value);

    }, 500)
}

handleInput("H")
handleInput("He")
handleInput("Hel")
handleInput("Hell")
handleInput("Hello")


function debounce(func, delay){
    let timeoutId = null;

    return function(...args){
        if(timeoutId !== null){
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(()=>{
            func.apply(this, args);
        }, delay);
    }
}

function search(query){
    console.log("Searching for: ", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch('v')
debouncedSearch('vi')
debouncedSearch('vir')
debouncedSearch('vira')
debouncedSearch('virat')
debouncedSearch('virat ')
debouncedSearch('virat k')
debouncedSearch('virat ko')
debouncedSearch('virat koh')
debouncedSearch('virat kohl')
debouncedSearch('virat kohli');