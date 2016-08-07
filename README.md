# Address Book

## Getting Started

* Clone project into an empty folder being in that folder:
```
git clone https://github.com/ipselon/sdr-bootstrap-address-book.git
```

* Change to created directory after cloning (sdr-bootstrap-address-book):

```
cd sdr-bootstrap-address-book
```

* Install deps

```
npm install
```

* Start server in the development mode:

```
npm run start
```

* Go to the following address in the browser:

```
http://localhost:3000
```

## The source code structure (partially)

* __app/__ : the source code of the client side
  * __components/__ : where you have to put your components
  * __containers/__ : HOC components, now it is not needed to investigate
    * __HomePage/__ : main component in which you have to include your top level components 
* __internals/__ : configs, etc.
  * __webpack/__ : webpack configs, take a look!!!
* __node_modules/__ : npm module storage, DON'T commit/push it into the repo!!!
* __server/__ : the source code for server middleware, not interested so far
* package.json: npm dependencies





### END
