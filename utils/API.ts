import moment from "moment";

const apiBaseUrl = "https://api.carbonintensity.org.uk/regional/intensity";

export const getData24Hours = async (
  region: string,
  date: string = moment().subtract(12, "hours").toISOString()
): Promise<any> => {
  const url = `${apiBaseUrl}/${date}/fw24h/postcode/${region}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

  return await response.json();
};
