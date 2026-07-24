export async function handler() {
  // const clientId = process.env.JAMENDO_CLIENT_ID;

  try {
    // if (!clientId) {
    //   return {
    //     statusCode: 500,
    //     body: JSON.stringify({
    //       error: "JAMENDO_CLIENT_ID is missing",
    //     }),
    //   };
    // }

    const response = await fetch(
      `https://api.audius.co/v1/tracks/trending`,
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
