require('babel-register');
import express from "express";
import React from "react";
import { renderToNodeStream} from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered");

const app = express();

app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);
  stream.pipe(
    res,
    { end: false }
  );
  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

// eslint-disable-next-line no-console
console.log(`listening on ${PORT}`);
app.listen(PORT);
