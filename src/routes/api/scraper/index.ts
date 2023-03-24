import { RequestHandler } from "@builder.io/qwik-city";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import {executablePath} from "puppeteer"
export const onGet: RequestHandler = async ({json}) => {
  puppeteer.use(StealthPlugin())

  const browser = await puppeteer.launch({ headless: true, executablePath: executablePath() });
  const page = await browser.newPage();
  await page.goto("https://www.amiami.com/eng/detail?scode=FIGURE-152316&rank=", {waitUntil: "networkidle0"});


  await page.content();
  const images = await page.$$('img[alt*="FIGURE-"]');
  const imagesSrc = [];
  for (let i = 0; i < images.length - 1; i++) {
    const src = await images[i].getProperty('src');
    const srcValue = await src.jsonValue();
    imagesSrc.push(srcValue)
    console.log(`Image ${i+1}: ${srcValue}`);
  }

  await browser.close();
  json(200, imagesSrc)
}
