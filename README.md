# cookie-dookie
A simple popup checkout for any website guest visitor to accept/deny cookie preferences

## Installation

Setting up is pretty straight-forward:

 1. Add the fnxck.js script to your web page and provide simple options. See [Basic Usage](https://github.com/georgelab/cookie-dookie/wiki/Basic-Usage)

```html
<script type="text/javascript" src="path/to/fnxck.js"></script>
```

2. For layout purposes, you may add fnxck.css and fnxck_shield.svg to your assets diretory.

```html
<link href="path/to/fnxck.css" rel="stylesheet" media="none" onload="if(media!='all')media='all'" />
```

## Basic Usage

```html
<script>
    var fnxck = new fnxck({
        //essential
        cookiename: 'meu-site', //your site name
        HTMLwarning: '<p>Sua mensagem de aviso deve ser adicionada aqui ;)</p>', //your warning message

        //not essential
        expiry: '-1', //expiry reset
        badge_icon: './fnxck_shield.svg', //path to fnxck_shield.svg, default is fnxck.js directory
        agree_label: 'Concordo', //label to agree button
        agree_valid_days: 365, //valid days for agreement
        disagree_label: 'Não concordo', //label to disagree button
        disagree_valid_days: 30, //valid days for disagreement
        
    });
    fnxck.start(); //will run now!
</script>
```

Enjoy!