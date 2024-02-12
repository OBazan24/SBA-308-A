const apiKey =
  "live_W0zhLhG0byrE7RLNALDvIkld7bik7jD6Vjqdz24NNbiOlIIdtNegx8aznmDyESZD"; // Replace with your actual API key
const apiUrl = "https://api.thedogapi.com/v1";

// Function to make GET requests
async function fetchData(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": apiKey,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to make POST, PUT, or PATCH requests
async function postData(url, method, body) {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
