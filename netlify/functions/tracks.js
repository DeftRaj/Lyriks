export async function handler() {
  const clientId = process.env.JAMENDO_CLIENT_ID;

  try {
    if (!clientId) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "JAMENDO_CLIENT_ID is missing",
        }),
      };
    }

    const response = await fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${clientId}&format=json&limit=20`,
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
