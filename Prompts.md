Can you create a diet tracking app, the app will have two different users, dieticians & regular users. The dietician will first create a diet plan by uploading an image with a daily diet plan & as a a user I need to follow it enter my diet details in it. this information should be visible to my dietician when she selects my profile in a dropdown
 ------------------------------------ 
This looks good. now lets add signup & signin for this. it will be email & password based.In signup, lets ask for user details & role as well. also during sign in instead of asking for the user role, redirect to specific dashboards based on the signup information provided
 ------------------------------------ 
*Fix this preview error* 
```js
Error occurred at /
Port: 5173

Stack trace:
ReferenceError: mockUsers is not defined
    at handleSubmit (src/components/Login.jsx:40:20)
    at HTMLUnknownElement.callCallback2 (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:3674:22)
    at Object.invokeGuardedCallbackDev (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:3699:24)
    at invokeGuardedCallback (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:3733:39)
    at invokeGuardedCallbackAndCatchFirstError (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:3736:33)
    at executeDispatch (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:7016:11)
    at processDispatchQueueItemsInOrder (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:7036:15)
    at processDispatchQueue (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:7045:13)
    at dispatchEventsForPlugins (node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:7053:11)
    at node_modules/.vite/deps/chunk-ZRNALROW.js?v=57d36b32:7177:20
```

 ------------------------------------ 
Add authentication to the app using supabase 
 ------------------------------------ 
is the authentication handled properly with supabase 
 ------------------------------------ 
I think I have some error here 
 ------------------------------------ 
Revisit the whole code something is not working 
 ------------------------------------ 
restart the server
 ------------------------------------ 
got some error email column in profiles cache
 ------------------------------------ 
new row violates row-level security policy for table "profiles"
 ------------------------------------ 
can you restart the server
 ------------------------------------ 
can you rename the app title to "Diet Planner" ?