export async function handler(event) {
  const track_id = event.queryStringParameters.track_id;

  try {
    if (!track_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Track ID is missing",
        }),
      };
    }

    const response = await fetch(
      `https://api.audius.co/v1/tracks/${track_id}`,
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
