# kb-spinner
> spinner.

## Install
```shell
npm i kb-spinner -S
```

## Usage
import all spinner
```javascript
import Vue from 'vue';
import Spinner from 'kb-spinner';
import 'kb-spinner/lib/all/style.css'

Vue.use(Spinner);
```

import one spinner
```javascript
import Vue from 'vue';
import DoubleBounce from 'kb-spinner/lib/double-bounce';
import 'kb-spinner/lib/double-bounce/style.css';

Vue.component(DoubleBounce.name, DoubleBounce);
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
