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
    useRef - get DOM reference
    useContext - get context values
    useMemo..
    useReducer
    

## Pure Function  GOOD/Immutable/Predictable

    given the same input, the function always returns same output

    function add(a, b) {
        return a + b
    }

    add(10, 20) => 30
    add(10, 20) => 30


## MEMO - Memorized function

    JavaScript runs on single thread
    
    function computationLogic(inputs) returns output after a computation

    // 5 seconds to compute, browser hangs 5 seconds when invokes
    function sum(numbers) {
        let s = 0;
        for (let n of numbers) s += n
        return s;
    }

    sum([10, 20]) => 30 // 5 sec
    sum([10, 20]) => 30 // 5 sec
    sum([10, 20]) => 30 // 5 sec

    sum([50, 60]) => 110

    how to optimize it? Solution: Cache the result for the given arguments
    if the input params are different than one computed earlier, then it makes sense to use memoize

    variations

    one time use - cache only last known parameters - memory efficient
    cache last 5 n calls - memory consumption high
    multiple wrappers sum([10, 20]), sum()

# IMPURE Function /BAD/Unpredictable/MUTABLITY

    given the same argument, doesn't return same output, doesn't do the same expectation

    function addItems(items, item) {
        items.push(item) // MUTABLITY
        return items;
    }

    items = []
    addItems(items, {id: 1}) ==> [{id: 1}]
    addItems(items, {id: 2}) ==> [{id: 1}, {id: 2}]
    
    OOP is very common example

    class Calc {
        int sum = 0; // hidden state
        // impure function
        int add(int value) {
            sum += value; // state is mutated
            return sum;
        }
    }

    calc = new Calc()
    calc.add(10); // 10
    calc.add(20); // 30
    calc.add(10); // 40
     calc.add(10);
      calc.add(10);
       calc.add(10); 
       calc.add(10);
        calc.add(10);

# Dependency/Using mixed useEffect 


Parent     effect - it still building the ui
            After I complete the child component, I want the reference of the child component
    Child effect    - after the child complete, the child ready- dom, referenecs all ready

<parent>
    <child1></child1> - completed first, avail for ref

    <childn></childn>
</parent> - after the child