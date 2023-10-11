import client from "@/services/client";

export const getDataFromServer = async ({
  url,
  config,
}: {
  url: string;
  config?: Record<string, unknown>;
}) => {
  const response = await client.get(url, config);
  return response;
};
