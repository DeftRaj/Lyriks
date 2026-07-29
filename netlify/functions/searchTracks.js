export async function handler(event) {
  const searchTerm = event.queryStringParameters.query;
    console.log("searchTerm",searchTerm)
  try {
    if (!searchTerm) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "No matching songs",
        }),
      };
    }

     const response = await fetch(
        `https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(searchTerm)}`
    );
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }



}
