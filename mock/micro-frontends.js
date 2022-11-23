import meldekort from "./bundle/meldekort";

export default [
  {
    url: "/meldekort/bundle.js",
    method: "get",
    rawResponse: async (req, res) => {
      res.setHeader("Content-Type", "text/javascript");
      res.statusCode = 200;
      res.end(meldekort);
    },
  },
];
