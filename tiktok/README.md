# fe-notebook

Tiktok pet project

## Tạo dự án

```
npx create-react-app tiktok-ui
```

## 1. Cài đặt customize-cra tùy chỉnh cấu hình webpack

```
npm install customize-cra react-app-rewired --dev
```

[Xem thêm](https://github.com/arackaf/customize-cra)

Create a config-overrides.js

```
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

Change

```
  /* package.json */

  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

## 2. Cấu hình barbel

Cài đặt babel resolve

```
npm install --save-dev babel-plugin-module-resolver
```

Create .babelrc at the same level folder /src

```
{
    "plugins": [
        [
            "module-resolver",
            {
                "root": [
                    "./src"
                ],
                "alias": {
                    "~": "./src"
                }
            }
        ]
    ]
}
```

Create file jsconfig.json

```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": [
                "src/*"
            ]
        }
    }
}
```
