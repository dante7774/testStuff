//Axios API request with try-catch on an async-await

const axiosRequest = require('axios');

async function getActivity() {
    try {
        let response = await axiosRequest.get('https://httpstat.us/500');
        console.log(`You could ${response.data.activity}`);
    }
    catch (error) {
        console.error(`ERROR: ${error}`);
    }
    
}

getActivity();