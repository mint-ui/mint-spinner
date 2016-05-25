# kb-spinner
> spinner.

## Install
```shell
npm i kb-spinner -S
```

## Required
```shell
npm i babel-plugin-component -D
```

## Usage
import all spinner
```javascript
import Vue from 'vue';
import Spinner from 'kb-spinner';

Vue.use(Spinner);
```

```html
<kb-spinner></kb-spinner>
```

import one spinner
```javascript
import Vue from 'vue';
import { DoubleBounce } from 'kb-spinner';

Vue.component(DoubleBounce.name, DoubleBounce);
```

```html
<double-bounce></double-bounce>
```

.babelrc
```json
{
  "plugins": [
    "xxx",
    ["component", [
        {
          "libraryName": "kb-spinner",
          "style": true
        }
      ]
    ]
  ]
}
```

## Spinner
- snake
- double-bounce
- triple-bounce
- fading-circle

## API

### color
- type: String

### size
- type: Number

### type
- type: String|Number

```html
<kb-spinner :type="0"></kb-spinner>
<kb-spinner type="snake"></kb-spinner>

<kb-spinner :type="1"></kb-spinner>
<kb-spinner type="double-bounce"></kb-spinner>

<kb-spinner :type="2"></kb-spinner>
<kb-spinner type="triple-bounce"></kb-spinner>

<kb-spinner :type="3"></kb-spinner>
<kb-spinner type="fading-circle"></kb-spinner>
```

## Development

```shell
make dev
```

## Production
```
make dist
```

## License
MIT
