Class vs Functional Component [without hook]

Class Component
    has state
    life cycle methods 
        constructor
        shouldComponentUpdate
        getDerivedStateFromProps [replaces componentWillMount, componentwillReceipeProps]
        render
        componentDidMount [creation/initial state, called once]
        componentDidUpdate [update cycle, called after render]
        componentWillUnmount()
    Ref
Func Component
    no state
    can't access ref
    no life cycle method

16.8 - Hooks, for functional component

Func Component with Hooks
    useState - state
    useEffect - some similar to componentDidMount, componentDidUpdate, componentWillUnmount
    useRef
    useContext
    useReducer
    useMemo..