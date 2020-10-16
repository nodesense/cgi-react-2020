1. Debugging in Chrome
2. Snippets
3. Debugggin in VS Code
4. React Dev Tools
     Components
     Profiling
5. React Window - Virtualization

## Hooks
    useLayoutEffect
        Similar to useEffect
        useEffect - async - after dom mutation
            Update Cycle 1
                virtual created
                diffed
                patched to real dom
            Update Cycle 2
                useEffect

        useLayoutEffect - sync after dom mutation
            Update Cycle 1 - same cycle
                virtual created
                diffed
                patched to real dom
                useLayoutEffect

useMemo
    -- for value until the dependencies change

useCallback
    -- memozied but for the function/callback
    -- callbacks are memoized until dependencies changes


# Custom Hooks
    -- Cross cutting concerns
    -- useStorage
        simply combination of existing hooks
        useState
        use local storage to persist the changes
        restore first time
        store the results back when component destroyed
    -- useState - state is lost when component unmounted


# forwardRef
    ref to dom, class component instance

    function Input({}) {
        return (
            <div>
                <label forName="Age">
                <input ref={ref} {...props} />
            </div>
        )
    }

    -----


    ContactForm 

    constructor() {
        this.ref = React.createRef()
    }

    componentDidMount() {
        this.ref.current.focus();
    }

    render
        <form>
            <Input ref={this.ref}>


===

# Formik - makes form easy

# yup - js package, for json validation

# Formik + yup = validation 


# React Router DOM shall pass props to component

    match
    history
    location

# Unit testing
    White box testing/code testing

    Component
    APIs
    Containers
    etc
    Js

    if..else
    boundary
    switch..
    ...

## Jasmine
    Popular BDD Test tool
        Spec - specification
            test suite - a collection of test cases
                test case - a specific test adding two positive number
                    test code  - assert (10 + 20) == 30
        Library
            expectation, matchers
            expect(10).toBe(10) // 10 == 10
## JEST
    Popular Test Runner
        IT runs the test, generate reports, print errors
        Extends jasmine by default

        Friendly with react

### Run tests

```
    npm test
```

### Enzyme 

    configure enzyme with adaptors

    make react testing more API driver/data driven
    selector to select v.doms/find

    mount    -- build deep nesting component tree
    shallow  -- build only current component, not child/nested
    renderer - similar to test renderer [not used much]

React Loadable

production build

npm run build

to run the product build in local laptop

may need run as administrator

npm install http-server -g


cd build

http-server -c-1 -p 8888


Browser: localhost:8888


1       .2    .3
MAJOR.MINOR.PATCH

"axios": "^0.20.0" ==> ^ LOCK the MAJOR Version
    0. is fixed
     .20,.21.........67... .90

"formik": "2.2.0" // LOCK ALL VERSION

---

Team 1
    npm install Aug 2020
        formik: 2.1.4

Team 2
        Oct 2020
        formik: 2.1.4
Jenkin Build
        Oct 2020
        formik: 2.1.4


package-lock.json / npm
     formik: 2.1.4
yarn.lock 
     formik: 2.1.4
