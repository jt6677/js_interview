# Vite + React + Typescript + Eslint + Airbnb eslint rules + Airbnb Typescript rules + Prettier + env variable import + Absolute Import Path

!yes, this many setup files.

==============================================

# env variable import:

1. You need to add type in env.d.ts like "readonly VITE_ANYTHING: string"
2. variable MUST start with VITE\_
3. usage of env variable in your app, no need to import, just use it as a global variable: console.log(import.meta.env.VITE_API_URL)

==============================================

#Absolute Import Path
