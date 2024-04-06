module.exports = {
  "!(external_test_data/**/*).{js,jsx,ts,tsx,json,md}": [
    "eslint --fix",
    "prettier --write",
  ],
};
