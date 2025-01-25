# First draft for JavaZone 2025

### For this year's conference we will manage the Web, iOS and Android applications in one codebase

## Development information

> 💡 Project uses Expo which is an open-source platform for making universal native apps for Android, iOS, and web.
> This implementation uses React Native and TypeScript. The template implements a language feature using i18n,
> which makes it easier to toggle between languages and avoid hard-coded text by having all text content stored as json.

> ⚙️ Any changes in `app.json` will not affect iOS or Android while running. The same applies for assets. You must run `npx expo prebuild` (`--clean` if you want)

> 🔤 Any changes to the `services/i18n/` files will not be updated in RunTime, rerun application `npx expo start`

### To run locally

Use `npm install` and then `npx expo start`

### Before creating PR

Run `npx expo prebuild` to check native build for iOS and Android
Run `npx expo export -p web` to check web build

**Credits:**
The i18next language feature was implemented by following a [tutorial](https://ilearnedathing.com/internationalizing-a-react-native-app-with-i18next-and-expo-part-1) by Richard Westmoreland
