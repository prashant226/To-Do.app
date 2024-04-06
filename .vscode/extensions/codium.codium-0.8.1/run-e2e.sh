#!/bin/bash
echo "Installing extension dependencies"
npm install

echo "installing generate_tests_panel dependencies"
cd src/webviews/generate_tests_panel
npm install
cd ../../..


echo "installing chat webview dependencies"
cd src/webviews/chat_panel
npm install
cd ../../..

echo "building webviews"
cd src/webviews
npm run build
cd ../..

echo "building extension"
npm run vscode:package:e2e

echo "installing e2e dependencies"
chmod -R 777 src/test/suite/test_data/sample_workspace/.openvscode-server
cd src/test/e2e
npm install
npx playwright install
echo "running openvscode-server docker"
docker compose up -d
echo "running tests"
npm test
cd ../../..