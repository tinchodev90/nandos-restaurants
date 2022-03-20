# Nandos-Restaurants Code Challenge

## Recommended environment
Xcode 13.1

Node v12.14.1

## Install dependencies
```yarn install ```

## Run in iOS

### Install Pods
```cd ios```

``` pod install && cd ..```
### Run app
``` yarn ios```

## Run in Android
Prerequisites:

_1) Point the ```android/local.properties``` file to your SDK folder if needed._

_2) Open Android Studio and open an Android Simulator._

Execute:

``` yarn android ```

## Run unit test
``` yarn test ```

## Run lint
``` yarn lint ```

## Observations
- Splash screen was implemented as a bonus.
- The app gets the app version from the native code through a native bridging, without using any third party library.
- The list of restaurants implements a FlatList component in order to avoid performance problems when scrolling a big list.
