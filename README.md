# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug is caused by an infinite loop resulting from a missing dependency in the effect's dependency array.  The solution shows how to correct this issue.

## Bug

The `bug.js` file contains a component that attempts to increment a state variable using `useEffect` without specifying any dependencies. This leads to the effect running repeatedly, causing an infinite loop and rendering issues.

## Solution

The `bugSolution.js` file provides the corrected component. The solution is to add `count` to the dependency array so the effect runs only when the `count` state variable changes.