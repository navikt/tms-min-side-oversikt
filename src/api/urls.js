function getEnvironment() {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

const API_URL = {
  development: "http://localhost:3000/api/endpoint",
  production: "https://person.nav.no/api/endpoint",
};

export const apiUrl = API_URL[getEnvironment()];
