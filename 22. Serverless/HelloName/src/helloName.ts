import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda/trigger/api-gateway-proxy";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const response = {
    statusCode: 200,
    body: `<h1>Hello, ${event.queryStringParameters.name}</h1>`,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  };
  return response;
};
