**Laravel setup**
PHP as JS/Node.js does not come with its own local dev server, so popular choice is XAMPP.

Laravel does come with a development server. To install it you need composer package manager and global laravel installer (it is lightweight).

Laravel comes with vite config, but this config is to have a tight coupled BE and FE, it is optional. For this project, we will have decoupled BE for API calls via Laravel and FE via Vite and React.

**auto import**

auto import not working on vite -> setup a jsconfig.json file

**react-router-dom**

creating routes via <RouterProvider router={router} />, for each route with children, put <Outlet /> in this very component

**debugger**

simply putting debbuger keyword in code and running app in chrome will show you values in Sources when hovering

**@keyframes trigger**
If we wrapped the form so that we do not repeat the wrapping in each component Login, Signup, we lose the animation, because the animation triggers when actual element is re-rendered. In this current case, the re-rendering happens in the Outlet, namely, children Login and Signup components, thus, no actual trigger happens.
```sh
    <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <Outlet />
        </div>
    </div>
```
**axios instances**

You can use them to create separate instances for each api, which in turn enables you to have configurations, interceptos, etc for each instance.
Interceptors a special functions that will be executed before a request is sent or after the response is received.

**.env**

It is better to store urls in envs, in react/vite you have a specific protocol for env keys

**refs vs changeState form approach**
Instead of classic controlled form, apply refs to extract info on submit