# Okta React Native Typescript Example

This app shows how to use React Native 0.57+ with Typescript
(i.e. Babel 7), using React Native App Auth for OAuth2
authentication (Okta) and react-test-renderer for testing.

Note: This has only been tested on Android.

## Setup

First run

```bash
yarn
```

to install the dependencies. Then edit `src/App.tsx` and change the `config` to match your
authentication parameters. Similarly for the `manifestPlaceholders` section of
`android/app/build.gradle`.

## Running

For Android run

```bash
react-native run-android
```

to deploy to an emulator or connected device.
