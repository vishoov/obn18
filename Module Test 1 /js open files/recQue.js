// 1 2 3 2 1

function readPages(current, n){
    if(current>n){
        return;
    }
    console.log(current);


    readPages(current+1, n);
    if(current<n){
    console.log(current);
    }
}

function pages(n){

    readPages(1, n);


}

pages(3)