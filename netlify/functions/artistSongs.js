export async function handler(event) {
    console.log("Query:", event.queryStringParameters);
  const artist_id = event.queryStringParameters.artist_id;
    console.log("artist_id:", artist_id);
  try {
    if (!artist_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Track ID is missing",
        }),
      };
    }

    const response = await fetch(
      `https://api.audius.co/v1/users/${artist_id}/tracks`,
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
