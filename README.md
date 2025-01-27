This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Prototype
<img src="https://raw.githubusercontent.com/retoIO/frontend-demo-app/main/prototype.png">

Source https://whimsical.com/reto-io-maps-7RwYeN6aU1dD47syZ29aj1@6HYTAunKLgTTUkjnwvjtvqPc9phdbgRWCuwDFFTT7LxHvWx

## Demo
<img src="https://raw.githubusercontent.com/retoIO/frontend-demo-app/main/demo.gif">


## Architecture
<img src="https://raw.githubusercontent.com/retoIO/frontend-demo-app/main/layers.png">

```
src/
├── domain/
│   ├── entities/
│   │   ├── Benefit.ts
│   │   └── User.ts
│   ├── repositories/
│   │   └── BenefitRepository.ts
│   └── usecases/
│       ├── FetchUserBenefitsUseCase.ts
│       └── LoginUseCase.ts
├── infrastructure/
│   ├── api/
│   │   ├── AuthApi.ts
│   │   └── BenefitApi.ts
│   ├── repositories/
│   │   └── BenefitRepositoryImpl.ts
├── presentation/
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── MapScreen.tsx
│   └── components/
│       └── CustomComponent.tsx
├── __tests__/
│   ├── domain/
│   │   └── usecases/
│   │       ├── FetchUserBenefitsUseCase.test.ts
│   │       └── LoginUseCase.test.ts
│   ├── infrastructure/
│   │   └── repositories/
│   │       └── BenefitRepositoryImpl.test.ts
│   ├── presentation/
│   │   └── screens/
│   │       ├── LoginScreen.test.tsx
│   │       └── MapScreen.test.tsx
├── __mocks__/
│   ├── @juanpablocs/
│   │   └── rn-interactive-maps.js
│   └── @juanpablocs/
│       └── rn-slider-carousel.js
├── App.tsx
├── jest.config.js
└── babel.config.js
```


## Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
