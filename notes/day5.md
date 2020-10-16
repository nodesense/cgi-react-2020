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