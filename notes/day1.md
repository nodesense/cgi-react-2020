DB - indexing 

DB stored into disk [1 million rec]
    select where id = 100 ... scan the content in the disk
        sector by sector....
            scan whole table, either return data or empty

how to improve performance
    create index for id, bring to memory
     [.....100, ....] 1 million id in memory, indexed, sorted 

to React

Diff the virtual doms

<1000 v.dom elements>, an item added/removed, updated

First snapshot

<tr key="1">.....</tr>
<tr key="2">.....</tr>
...
<tr key="500">.....</tr>
-

Second  snapshot

<tr key="2">.....</tr> is removed

<tr  >.....</tr>
...
<tr key="500">.....</tr>



---

function comp() {
    return v.dom
}

2 snapshots here
snapshot - null/undefined
nextSnapshot = comp()
result = diff(snapshot, nextSnapshot)
patch(result)
snapshot = nextSnapshot

--
1 snapshot 