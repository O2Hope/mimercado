import type { RequestHandler } from '@builder.io/qwik-city';

export interface GetCurrencyResponse {
  base: string;
  to: string;
  amount: number;
  converted: number;
  rate: number;
  lastUpdate: number;
}

export const onGet: RequestHandler = async ({ json, query }) => {
  // put your DB access here, we are hard coding a response for simplicity.
  const req = await fetch(`https://anyapi.io/api/v1/exchange/convert?apiKey=t10le8gg0lofr41qjj2k8os18dprdjneol4deoro4ologs2nb74uocg&base=JPY&to=MXN&amount=${query.get("amount")}`)
  const data:GetCurrencyResponse = await req.json()

  json(200, data);
};