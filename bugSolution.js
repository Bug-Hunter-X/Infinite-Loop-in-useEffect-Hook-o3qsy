```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The dependency array now includes 'count'
    setCount(count + 1);
  }, [count]); // Add count to dependency array

  return <div>Count: {count}</div>;
}
```