const FAST_API_URL = process.env.FAST_API_URL;

export async function GET() {
  try {
    const response = await fetch(FAST_API_URL + "models");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
