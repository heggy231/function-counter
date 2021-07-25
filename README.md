# using hook counter React app


## json place holder api call is a side effect therefore we need to use useEffect 

- some other side effects are:
  - DOM manipulation
  - API calls
  - disabling animation timers

* Note: useEffect replaces `componentDidUpdate()` react lifecycle method, runs after the Component renders.

* how json Placeholder posts API(https://jsonplaceholder.typicode.com/posts) call look like:

- result: array of 100 posts

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, {}, {}, ...
]
```

* for api call we need to use `useEffect` instead of `componentDidMount` or `componentDidUpdate` - you want to use hooks.

* [Resource Lifecyle methos, react hooks](https://learn.digitalcrafts.com/flex/lessons/full-stack-frameworks/react-hooks/#summary)