[![Coverage Status](https://coveralls.io/repos/github/RichardIvan/Flagger-Capstone-Project/badge.svg)](https://coveralls.io/github/RichardIvan/Flagger-Capstone-Project)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7f21023e29374ae6a2ba214ac9d76035)](https://www.codacy.com/app/richardivan-com/corporate-dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=RichardIvan/corporate-dashboard&amp;utm_campaign=Badge_Grade)

# Guess What Capstone Project

Final Udacity Project ( Capstone Project) is putting together all that we've leaned in this course. The project is therefore using all from the previous projects with these additions.

Firstly, the whole development was done in a production like enviroment for correct incremental builds via CircleCI. This was accomplished using docker container and connecting to the setup via Nuclide Remote development feature.

Second new addition was the use of Redux Sagas and learning about ES6 generator functions and overall use of sagas to control business logic and orchestration of async events in the application.

Game is fully offline, caching resources with service workers and saving highscores to local storage.

Game is also ARIA aware, managing correct use of alt text for images, supporting keyboard controls only and managing correct color ratios.

The code as in previous projects is again focused on modularity, and overall code organization. This is achieved by, splitting code into separate modules and separating parts of the application.

## Features & Technologies

* [Mithril 1.0](https://github.com/lhorie/mithril.js/tree/rewrite)
* [Webpack 2](https://github.com/webpack/webpack)
* [Redux](https://github.com/reactjs/redux) + [Immutable JS](https://facebook.github.io/immutable-js/)
* [Redux-saga](https://github.com/yelouafi/redux-saga)
* [Docker](https://github.com/docker/docker)
* [Nuclide-remote-server](https://nuclide.io/docs/features/remote/)
* [Circle CI](circleci.com) + Code Coverage via [Coveralls](coveralls.io)
* Live reloading.
* ES6 via [Babel](https://babeljs.io/).
* [Standard](https://github.com/feross/standard) linting via ESLint.
* [Mocha](https://mochajs.org/) + [Expect](https://github.com/mjackson/expect)
* [Mithril Query](https://github.com/StephanHoyer/mithril-query/tree/rewrite)
* [Mithril Node Render](https://github.com/StephanHoyer/mithril-node-render/tree/rewrite)
* [Gulp](http://gulpjs.com/)
* [Flowtype](https://flowtype.org/) Typechecking


## Installation

Get started by installing npm; please follow this tutorial -> [http://blog.npmjs.org/post/85484771375/how-to-install-npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)

* ```npm i```


## Running

* Run ```npm run server``` to serve production code or..

* Run with local webpack server ```gulp local-dev```

View demo in the browser at 'http://localhost:8080'

Thank you for checking out this project.


## License

Copyright (c) 2016 Richard Ivan.

Licensed under the MIT license.
