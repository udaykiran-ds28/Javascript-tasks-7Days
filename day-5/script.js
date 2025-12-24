let input=document.getElementById("searchInput")
function throttle(fu,delay){
    let lastCall=0
    return function(...args){
        now=Date.now()
        if(now-lastCall>=delay){
            lastCall=now
            fu(...args)
        }
    }
}
function Debounce(fu,delay){
    let lastCall=0
    return function(...args){
        clearTimeout(lastCall)
        lastCall=setTimeout(()=>{
            fu(...args)
        },delay)}
}
const debouncedSearch = Debounce(search, 1000);

const logger = (type) => {
    return (message) => {
        console.log(`(${type}) - ${message}`);
    };
};
const infoLogger = logger("INFO");

function SearchResults(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([query, "result1", "result2"]);
        }, 1000);
    });
}
function search(query) {
    infoLogger("Debounced search triggered");

    SearchResults(query)
        .then((data) => {
            // clean  transform
            return data.map(item => item.toUpperCase());
        })
        .then((formattedData) => {
            document.getElementById("result").innerText =
                "Results: " + formattedData.join(", ");
        });
}

const throttledLogger = throttle((text) => {
    infoLogger(`Throttled keystroke: ${text}`);
}, 300);
input.addEventListener("input", (e) => {
    const value = e.target.value;
    throttledLogger(value);
    debouncedSearch(value);
});