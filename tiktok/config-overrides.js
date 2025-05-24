const { override, useBabelRc, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    adjustStyleLoaders(({ use: [, , postcss, resolve, sass] }) => {
        if (sass) {
            sass.options.sassOptions = {
                // Use the modern JS API
                api: 'modern-compiler',
            };
        }
    }),
);
