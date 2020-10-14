# Day 2

## React Events

1. Bind the button to click event
2. User click the button, react accept the event and use a wrapper object / synthetic object to wrap the event
3. Put the event in the queue 

thats it - flow over

Event Loop

0. Loop start
1. React pulls the event from the queue until it becomes empty
2. batch process them
3. then it calls callback up()/down(), eventEx()... developer code
    3.1 setState(nextState) // react is not updated this.state yet, maintain nextState batches in queue
4. Loop exit after the queue is empty / no more events in the queue

5. Now reacts update the batches of nextStates and merge with this.state
6. calls render function



## Assignment
    Favorite products

    favorite
        components
            FavoriteList
            FavoriteItem
        pages
            Favorite
                add Favorite
                remove
                empty

    Navigation
    context

