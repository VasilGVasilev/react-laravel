**Default or User layout**
First problem is to navigate user to Guest or Default layout, which will be based on context that detects if user is logged or not and passes on the context state to the relevant components.

Here you may ask - which one / the browser chooses for the user, there may be a clash.
There is no clash, it chosed based on token (user being logged or not).
Think of it more as a template to have a guestLayout or user defaultlayout and we navigate based on some data (token)

```sh
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/users' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])
```