<!--DO NOT USE DOUBLE QUOTES IN THIS MARKDOWN-->

## Unreleased

## 0.8.1

## Fixed

- Fixed handling of revoked refresh tokens
- Fixed command parsing in the chat panel

## 0.8.0

## New Features

- **Codiumate-Agent Alpha Release:** We're thrilled to announce the alpha release of our Codiumate-Agent, integrated within the VSCode extension. This marks the first introduction of our coding agent designed to assist developers in completing tasks efficiently within their projects.

### Codiumate-Agent Highlights:

- **Task Specification:** Users can now write specifications for tasks directly within VSCode.
- **Context Selection:** Offers the ability to select the relevant context for the task at hand.
- **Automated Planning:** Codiumate-Agent can automatically write a plan based on the task specification.
- **Code Auto-Completion:** Enhances coding efficiency by providing auto-completion for code based on the task's plan.

## 0.7.58

## Added

- enabling code completion when using task agent

## 0.7.57

### Added

- Introduced Codiumate Agent Task Planner - Transform your task descriptions and contexts into structured plan and implement with auto-complete.

## 0.7.56

## Changed

- Fixed reading configuration file.

## 0.7.55

### Added

- Added clipboard content to code completion context
- Added Snippet types to code completion snippets
- Added debug logs for code completion

## 0.7.54

### Changed

- Renamed "Code Completion" to "Code Auto-complete" in settings for clarity.
- Updated descriptions for code auto-completion settings to reflect service availability for subscribed members and support for custom instructions.

## 0.7.53

### Added

- Introduced keyboard shortcuts for navigating through previously entered commands in the chat panel.
- Added new directories to the ignore list for C++ projects.
- Included relative file paths in the context for better context understanding.
- Enhanced context builder to include symbol names without arguments for better accuracy.
- Implemented a more efficient way to check if a symbol is part of a cut content.
- Added handling for variable and constant symbols to improve context generation.

### Changed

- Moved code completion logic into repository.
- Fixed cooldown on code completion.
- Fixed Codium interfering with Copilot code completion when disabled.
- Fixed first letter of code completion truncated in Python.
- Refactored the creation of activated modes and commands maps into separate settings file.
- Improved the handling of additional context in code commands resolver.
- Enhanced the display of file names in the right-click menu to include the parent directory.
- Trimmed the text input after removing the command in the user input component.
- Removed unnecessary console log and unused import in the chat context component.
- Optimized the process of gathering outgoing calls by utilizing a record structure for results.
- Improved the method for adding file paths to context, ensuring consistency across different parts of the application.
- Updated the component scheme delimiter for better clarity and consistency.
- Refined the addition of context to imported files, ensuring proper formatting.

## 0.7.52

### Added

- Added a feature to process new suggestions in the chat panel.
- Introduced a configuration option for user-specific instructions for code completion.
- Improved error handling in git service initialization.

### Changed

- Updated the chat panel to handle cases with no active workspace.
- Adjusted the display of suggestion text and links in the chat panel.
- Fixed the context handling in the chat panel when there's no git context.
- Removed the command execution for "workbench.view.extension.multi-diff-view" in the extension setup.

## 0.7.51

### Added

- Analytics for the new additional context option.

## 0.7.50

### Added

- Enhanced the chat context selection with additional context and user-friendly options.
- Improved the display of author information in chat messages with new icons and tooltips.
- Introduced a feature to manage additional context directly from the chat interface.

### Changed

- Updated the handling of file information display in the chat context with color coding and command display.
- Modified the behavior of the agent in response to file saves with additional context handling.

## 0.7.49

### Changed

- A minor typo fix

## 0.7.48

### Added

- Introduced a new feature to manage settings directly from the chat interface.
- Added a feature to automatically delete certain types of messages when they are read.
- Enhanced the chat context selection with more user-friendly options.
- Improved the display of author information in chat messages.

### Changed

- Updated the handling of file information display in the chat context.
- Modified the behavior of the agent in response to file saves.

## 0.7.47

### Added

- Calling /improve automatically after more than 10 lines changed

### fixed

- Typo in the code

## 0.7.46

### Added

- Agent analytics for auto generated commands

## 0.7.45

### Added

- Introduced a feature to mark messages as read when they are viewed.
- Added a feature to display file information in the chat context.
- Implemented a new context selection interface with more options.
- Added a feature to track and display the count of unread messages.

### Changed

- Updated the context selection logic to support more modes.
- Enhanced the chat message rendering with additional components and conditions.
- Modified the state management logic to handle new actions and states.

## 0.7.44

### Modified

- Changed the title in Marketplace

## 0.7.43

### Added

- Added more type of context files to the Context tab

## 0.7.42

### Added

- Introduced a new Context tab, displaying the used context file used for test generation.

## 0.7.41

### Added

- Introduced a new command '/find-similar' to search for similar open source code.
- Added a new API action 'code_find-similar' to handle requests for finding similar code.

### Changed

- Improved the user interface of the test generation panel.
- Enhanced the functionality of the 'Run and Auto-fix' feature.
- Updated the default number of generated tests from 6 to 2.
- Improved the styling and wording of various components for better user experience.
- Refactored the code for better maintainability and readability.
- Updated the 'quick-test' command to improve its functionality and user experience.
- Modified the authentication service to improve error handling and user messages.
- Updated the chat panel and code command dispatcher to handle the new 'find-similar' command.
- Improved the styling of code elements in the chat panel.

## 0.7.40

### Fixed

- Added event for show more behaviors

## 0.7.39

### Changed

- Behavior coverage UX improvements
- Example test is can be populated from the tests generation output context

## 0.7.38

### Fixed

- Example test input was displayed in the tests suite tab.

## 0.7.37

## Added

- New Configuration tab with a new UI/UX for the configuration settings.
- Added example test input to the main tests tab.

## 0.7.36

## Added

- Added handling for unsupported CSS-like file types in the code detector to enhance file type recognition and processing.
- Introduced a new feature to select different modes for chat context.
- Added a new feature to handle file and workspace modes separately.
- Introduced a new feature to select different diff modes in workspace mode.
- Added a new feature to handle context selection and render context based on the selected context.

## Changed

- Updated the chat panel to handle changes in components and improved error handling.
- Modified the 'ChatMessage' component to improve visual representation.
- Refactored the chat panel to improve code organization and readability.
- Updated API actions to match the new commands and their respective endpoints.

## 0.7.35

### Added

- Introduced a new command '/quick-test' for automatic generation of comprehensive unit tests for your code.

## 0.7.34

## Added

- Introduced new commands '/recap' and '/issues' to provide a recap of the changeset and find issues in the changeset respectively.
- Added 'NextCommands' component to suggest next possible commands to the user.
- Added support for handling error messages in the chat panel.

## Changed

- Updated the chat panel to handle changes in components and improved error handling.
- Modified the 'ChatMessage' component to improve visual representation.
- Refactored the chat panel to improve code organization and readability.
- Updated API actions to match the new commands and their respective endpoints.

## 0.7.33

### Added

- A brand new secret feature in alpha stage (ask us on discord).

### Fixed

- Fixed reference code fetcher function crashed on methods.
- Git-diff duplications from diff fetcher function.

## 0.7.32 Release TYPO

## 0.7.31

### Added

- Introduced a new command '/analyze' to provide valuable insights about the changeset.
- Added support for real-time streaming in the chat panel.

### Changed

- Updated the chat panel to handle changes in components.
- Improved the handling of 'copy' and 'set' buttons in the chat panel.
- Modified the chat typer component to support real-time streaming.
- Refactored the chat panel to improve code organization and readability.

## 0.7.30

### Added

- Added support for SSO login
- Introduced a feature to check if a symbol was deleted from a file when the file is dirty.
- Added a function to extract chat component symbols from an open editor.
- Implemented a feature to update components on file save event.
- Added a feature to handle real-time streaming in the chat panel.

### Changed

- Refactored the chat panel to improve code organization and readability.
- Updated the chat message data type to include a streaming flag.
- Modified the chat typer component to support real-time streaming.
- Improved the handling of 'copy' and 'set' buttons in the chat panel.
- Updated the chat context to handle changes in components.

## 0.7.29

### Added

- Introduced real-time streaming feature in the chat panel.
- Added a new state to handle real-time streaming in the chat messages.

### Changed

- Modified the chat typer component to support real-time streaming.
- Updated the chat message data type to include a streaming flag.

## 0.7.28

### Added

- Introduced a new feature to handle `reply` commands in the chat.
- Added a 'No Context' option in the chat context selection.
- Added a 'Local Changes excl. Untracked files' option in the git diff selection.
- Introduced a new `Insert at cursor` option in the chat.
- Added a new `Auto commit message` in SCM panel.

### Changed

- Refactored command handlers in the chat panel for better code organization.
- Enhanced the chat command dispatcher to handle new command types.
- Improved the chat context display and selection mechanism.

### Fixed

- Improved error handling in the chat command dispatcher.

## 0.7.27

### Added

- Introduced a pre-login step to capture analytics and place a google tag/pixel for marketing attribution

## 0.7.26

### Added

- Introduced a new Thread component for better chat management [WIP].
- Added AutoScroller component to improve chat scrolling experience.
- Enhanced chat context with additional properties for better context management.

### Changed

- Improved handling of incoming messages in the baseCommandsResolver by introducing a buffer to parse complete JSON objects.
- Enhanced error handling in the baseCommandsResolver to wait for more data if JSON parsing fails.
- Refactored chat components to use the updated chat context.
- Improved typing indicators in chat components.
- Updated visibility rules for chat messages in threads.
- Enhanced context selection in code and diff modes.

### Fixed

- Improved error handling in the context builder service.
- Updated the git service to better handle renamed files.
- Enhanced the python test runner to handle paths with spaces.
- Updated the background color of code blocks in App.css to be transparent.

## 0.7.25

### Fix

- Code blocks background color was changed in the last vscode release. This is now fixed.

## 0.7.24

### Added

- Support plan_instructions ("additional instructions") in config file (see https://docs.codium.ai/config/)

## 0.7.23

### Fix

- Fix a bug in running JS/TS tests when some of the tests fail because of a compilation issue.

## 0.7.22

### Added

- Introduced a function to extract markdown code blocks from a string.

### Changed

- Updated the markdown to HTML conversion process to use the new function for extracting code blocks.

### Improved

- Extend-suite: faster initial test generation + get more suggested behaviors after tests are generated.

## 0.7.21

### Added

- Introduced new diff modes to compare local, staged, and committed changes.
- Added error handling for cases when there are no local or staged changes.

### Changed

- Refactored the git service to handle different diff modes.
- Updated the chat panel to allow users to select the diff mode.
- Enhanced the handling of target branches in the git service.
- Improved the display of the current context and target branch in the chat panel.

- ## 0.7.20

## Added

- Introduced a new feature to get docstring for each component that was modified in the PR.

## Improved

- Enhanced error handling in chat panel's base and code commands resolver.
- Improved path handling in git service for different operating systems.

- ## 0.7.19

## Added

- Enhance the typing animation in the chat panel for better performance and readability.
- Improved the display of the 'Teams plan' in the chat panel and test generation panel.

## Changed

- Updated the display of the 'Teams plan' in the chat panel and test generation panel.
- Improved the handling of user authentication state changes in the chat panel.
- Fixed a bug in the markdown to HTML conversion process.
- Improved the handling of refresh token errors during user authentication.

- ## 0.7.18

## Added

- Introduced user claims to manage user permissions and trial status.
- Added a trial tag to notify users about their trial status and remaining days.
- Enhanced user information in the chat panel to include profile picture and claims.
- Added support for handling null symbols in the helper service.
- Introduced a new feature that redirects users to the chat panel for code suggestions.
- Added new CodiumAIIcon component.
- Added RedirectToChat component to handle redirections to the chat panel.

## Changed

- Renamed the -File- tab to -Code Assistant- in the chat panel.
- Updated the display of user names in chat messages.
- Improved the handling of user authentication state changes in the chat panel.
- Updated the CodeSuggestions component to use the RedirectToChat component.
- Modified the App component to handle premium and trial users differently.
- Updated the vscodeApi service to handle chat commands.
- Adjusted the CodiumTabList component to handle negative counts.
- Show button for extend-test-suite on each test function, not only test suite.
- Update CodiumAI drop-down menu with current links.

## Fixed

- Removed unused code in UserMessage component.

- ## 0.7.17

## Fix

- Stability fixes.

- ## 0.7.16

## Changed

- Renamed the "Diff" tab to "PR Assistant" in the chat panel.

## Feature

- Performance improvements for extend-test-suite.

- ## 0.7.14

## Feature

- Improved command palette results for better user experience.
- Added a new command to update the changelog directly from the chat panel.
- Enhanced the handling of code symbols in the chat panel.
- Added support for including locally modified files in the git diff.

## Fix

- Modified the git service to handle file paths correctly on Windows systems.
- Fixed issues with the chat message components and the dropdown menu.
- Resolved issues with the handling of code snippets in the chat panel.

## Removed

- Removed unnecessary commands and states from the chat context.

- ## 0.7.13

### Feature

- Introduced a new feature, the command palette, for quick and easy access to various commands.
- Updated chat message components with a new dropdown menu.
- Remove the diagnostic error check before test generation.
- Added a minimum symbol line length filter.
- Added 'more suggestions' feature and refactored code lens providers.
- New configuration file to allow users to configure CodiumAI to their needs.
- In extend-test-suite, you can now manage the context files that are used to generate tests. You can remove context files and add code snippets.

- ## 0.7.12

### Feature

- Add tags to the code suggestions in the chat panel

- ## 0.7.11

### Feature

- Chat improvements

- ## 0.7.10

### Fix

- Fix chat panel build

- ## 0.7.9

### Feature

- Logout option in the CodiumAI menu
- Improve chat capabilities in Code mode
- Context display for extend-suite tests: when in extend-suite mode, CodiumAI now displays the main files that were used as context for the tests. Coming soon - you will be able to edit, remove and add new context items.

- ## 0.7.8

### Feature

- new CodiumAI Chat

- ## 0.7.7

### Fixed

- Further improvements to the Javascript/Typescript run-tests mechanism.

- ## 0.7.6

### Fixed

- Improvements to the Javascript/Typescript run-tests mechanism.

- ## 0.7.5

- UI improvements
- Extend-suite identifies more types of python classes.

- ## 0.7.4

- ## 0.7.3

### Removed

- Remove button from methods on go lang

- ## 0.7.2

### Feature

- Enable 'findSymbols' to support any language (not only Python and JS/TS)

### Fixed

- Pre-PR commands with free text were sent as ask

- ## 0.7.1

### Feature

- In "Extend test suite" - you can now add individual tests to the existing test suite.

### Fixed

- UI fixes

- ## 0.7.0

### Feature

- Added "Extend test suite"- in Python and JS/TS you can add tests to an existing test suite.
- NEW Pre-Pull Request Assistant Panel

### Fixed

- Give me more broke after clicking too fast

## 0.6.46

### Feature

- Added user feedback buttons and form

## 0.6.45

### Feature

- Sub behaviors

## 0.6.44

### Fix

- Scroll to test once linked behavior test is clicked

## 0.6.43

### Fix

- Added login url to open login page failure event
- Renamed generate tests action

## 0.6.42

### Feature

- Add right-click context menu

### Fix

- Hide run tests buttons using unsupported languages

## 0.6.41

### Feature

- Added ability to edit code explanation and update code using it

## 0.6.40

### Fix

- Fix for analytics alias

## 0.6.39

### Fix

- Fixed markdown style in Code Explanation tab

## 0.6.38

### Fix

- Showing error on all tests when getting environment error while running all tests

### Feature

- Run and auto-fix all tests
- Set run and auto-fix as default run option for single test

### UI

- Use markdown for code suggestion content

## 0.6.37

### Feature

- Run and Auto-fix single test

### Fix

- Don't send use mocks on first generate

## 0.6.36

### Fix

- Behavior refresh button was always active after re-generate
- Markdown code block styling improved
- Enhance Python testing with Python extension integration

### Feature

- Add back Write Docstring functionality to the sidebar

## 0.6.35

### Feature

- Add Explain-the-code feature to the left panel
- Show refresh banner after every Apply Code action
- Better error handling for single test generation
- Always show behaviors coverage
- Added error message on generation failure
- Code Analysis -> Code Explanation
- Used markdown in Code Explanation tab
- Diff analysis and test generation for uncommitted changes - updated UX.

## 0.6.34

### Fix

- Keep code suggestions from refreshing after re-generate

## 0.6.33

### Feature

- Add a menu for selected text operations on the left panel

### Fix

- Fixed apply changes to inactive text editor

## 0.6.32

### Feature

- Enhance Code

## 0.6.31

### Feature

- Get docstring from the left panel for every language

### Fix

- Show an error message after users click re-generate but the code is broken because of a manual change or applying bad code suggestions.
- Docstring readiness bugfix

## 0.6.30

### Feature

- Improve left panel - code suggestion and test generation flow

### Fix

- Fixed endless loader in code suggestions tag

## 0.6.29

### Feature

- Added the regenerate tests button to the configuration accordion button
- Added generate docstring to code analysis tab
- Refactor: split observables of addResult
- Give me more tests error handling

### Fix

- Handle add test from behavior null items bug
- Logging bugfixes.

## 0.6.28

### Feature

- Added copy to clipboard button to code analysis

## 0.6.27

### Fix

- Handle refresh behaviors errors
- Add one test from custom behavior instead of two
- Handle add custom test from behavior errors, including timeout
- Handle duplicated behavior added

### Events

- Added event for adding custom behavior

## 0.6.26

### Feature

- Get and apply code suggestions from CodiumAI in any language

### Removed

- Removed the test item quick edit feature

## 0.6.25

### Fix

- Fix bug when getting extension settings for run-tests.

## 0.6.24

### Feature / Fix

- Better handling of errors in JS / TS run-tests mechanism
- Fixed endless loader in code suggestion box when getting empty suggestions result.
- Clearer description in extension settings for run-tests settings.

## 0.6.23

### Feature

- Add support for running tests with react-testing-library framework.

## 0.6.22

### Feature

- Replace existing add custom test with add custom behavior, same as in the behavior list
- Fix package size too large issue.

## 0.6.21

### Feature

- Support for running vitest tests

## 0.6.20

### Feature

- Add remove all suggestions button
- Add copy code button to suggestions

## 0.6.19

### Fix

- CodelensProvider bug

## 0.6.18

### Feature

- New left side bar with code suggestions and behaviors

### Fix

- Support running tests with jest more easily.
- Clearer error messages in case of failing to run tests.

## 0.6.17

### Fix

- Variable instead of function bug fix

## 0.6.16

### Feature

- Add custom behaviors and generate tests for them
- Scroll down by a button click once a test has been generated

## 0.6.15

### Fix

- Add test from behavior sent the wrong configuration parameter
- Rerun tests in quick actions

## 0.6.14

### Feature

- New "Quick Actions" from side bar
- Support generating tests for class methods

### Bug

- Refresh behaviors coverage became active when moving between tabs
- Behavior coverage format changed from percentage to number our of total
- Various bugfixes for run-tests for Javascript / Typescript.

## 0.6.13

### Feature

- Added possibility to add tests from behaviors

### Bug

- Not opening the panel of diagnostic issue was found

### UI

- Test and Suggestions items animation added

## 0.6.12

### Bug

- Fix login bug: users weren't able to re-login after refresh login expired

## 0.6.11

### Fix

- Fix CodiumAI for low-end machines

## 0.6.10

### Feature

- Support more VSCodeium-based IDEs
- Allow running typescript tests, and improve the ability to run javascript tests.

### Fix

- Loader was not spinning when generating tests
- Passed button color fixed

### UI

- Minimal color system with tokens
- New custom test color changed to secondary
- Close configuration once code analysis arrives

## 0.6.9

### Feature

- Generate tests using CodiumAI command or shortcut (cmd+ctrl+c)

## 0.6.8

### Feature

- Added indication for when the behaviors first arrives
- Add demo flow
- Each behavior now displays the linked tests

## 0.6.7

### Feature

- New login page.
- Support login with email.

### Bug

- Long code suggestions are now handled properly

## 0.6.6

### Feature

- "CodiumAI" logo menu, add ability to send request ID.
- Panel ID concatenated to all request IDs
- Add try/except for context fetching.
- Added behaviors coverage with the ability to refresh them once the tests has been changed

### Bug

- Hide logo if window is too small
- UI/UX improvements
- Fix bug with running tests

## 0.6.5

### Feature

- Git-diff tests generation is faster.
- Git-diff toggle is not displayed if the file does not have uncommitted changes.
- Moved framework and testing utility config to the main configuration section

### Bug

- `is_code_snippet` was `false` if regenerate clicked after triggering CodiumAI via selection

## 0.6.4

### Bug

- Fix empty configuration bug

## 0.6.3

### Tech

- Added error log

## 0.6.2

### Tech

- Added error log

## 0.6.1

### Feature

- Added a more generic saving mechanism of global configuration
- Add option to manually edit the test code

### Bug

- Fix current edit item lock

## 0.6.0

### Feature

- Added tab loader animation
- Save framework in the local storage of workspace
- Suggest code fixes if suspicious bag is detected

## 0.5.27

### Feature

- Current env to be shown in codiumate popup.
- Request more code suggestions

## 0.5.26

### Bug

- UI fixes

## 0.5.25

### Feature

- Run tests, get the results and fix if failed. (Javascript: Jets + Mocha)

## 0.5.24

### Bug

- BaseURL bug
- Log in button stopped working from sidebar

## 0.5.23

### Bug

- Function recognized as snippet
- Run single test button displayed when should not

## 0.5.22

### Features

- Open code suggestion diff in a new file
- Users can now easily generate tests with CodiumAI by selecting a code segment, right-clicking, and choosing the "Generate Tests" option. This streamlined process provides a more efficient and user-friendly test creation experience.
- New informative tags for tests

### 0.5.21

### Features

- Introduces the possibility to select N code suggestions and apply them to the code.
  - Being able to select multiple suggestions at once
  - Showing the diff of current code vs. suggested code
  - Being able to automatically apply the suggested cod

## 0.5.20

### Features

- Add Sentry for error reporting
- Support multiple dev environments for Codiumates

## 0.5.19

### Features

- Run tests, get the results and fix if failed.

### Bug

- Tags were not updated after single test regenerated (Regression)

## 0.5.18

### Events

- Fixed generated tests received event with streaming

## 0.5.17

### Features

- Better support for streaming for better user experience
- Send editor_type as "vscode" in order to support extension version cutoff by backend.

## 0.5.16

### Features

- Code Suggestions now tag the category of each suggestion to help you undertand what it is about (eg. correctness, readability, etc.)

## 0.5.15

### Features

- If you suggest a change to a test, you will still be able to use the previous version. Tests history is preserved!

### Bugs

- Tags were not updated after single test regenerated

## 0.5.14

### Bugs

- Race condition: Regenerate or edit a single test before context blob arrives

### Events

- Added copy events to Code Analysis, Code Suggestions (base+suggested) and Generated tests

## 0.5.12

### Features

- Regenerate --> Reflect and regenerate, which means it first reflects the existing test code and using it to regenerate a new test. https://trello.com/c/jMFX5TIk

### Bugs

- Flexible "General Instruction" https://trello.com/c/sCHDL4Sg

### Events

- Code Suggestions events https://trello.com/c/3YVGWfAR
