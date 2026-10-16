// Using .then()
const loadData = new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 2000);
});

loadData.then(data => console.log(data));

// Using async/await
async function fetchData() {
    const result = await loadData;
    console.log(result);
}
fetchData();
