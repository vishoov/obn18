function loadData(callback) {
    setTimeout(() =>
    callback("Data loaded"), 1000);
    }


function promisifiedLoadData() {
    return new Promise((resolve) => {
    loadData((result) =>
    resolve(result));
    });
    }


    promisifiedLoadData().then((data) =>

        console.log(data));