# tms-mikrofrontend-template-vitejs

Kan brukes som utgangspunkt for å opprette nye mikrofrontends i Min Side.

# Features

- vite-plugin-mock
- vitest
- @navikt/ds-css
- @navikt/ds-react

# Tilpass repo-et

1. Søk etter og erstatt tms-mikrofrontend-template med det som skal være navnet på den nye appen.
2. Sett riktig port i server/server.js, Dockerfile og nais.yaml.
3. Sett riktig namespace og team i nais manifestene, de ligger i mappen under `nais/<cluster>`
4. Sett opp secrets, som default er det lagt opp til at secrets kan hentes fra `<appnavn>-secrets`
5. Velg riktig ingress til appen i nais.yaml

# Kom i gang

1. Bygg tms-mikrofrontend-template ved å kjøre npm run build
2. Start appen lokalt ved å kjøre npm run dev
3. Appen nås på http://localhost:3000

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-personbruker.
