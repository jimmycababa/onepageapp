// using the history API, redirecting to a page without loading a new resource
// we are going to call the client side router to process the new history entry
// this function will make it so when the user clicks on any of the links it will not reload the page and run the navigateTo function
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}
// we are loading the content for each one of our views (dashboard, settings, pr posts). 
const router = async () => {
    const routes = [
        // route path of the webpage. so we are saying that wheneve the user goesto the route path (/), we are going to run the function below starting at view.
        { path: "/", view: () => console.log("Viewing Dashboard")}, 
        { path: "/posts", view: () => console.log("Viewing Posts")}, 
        { path: "/settings", view: () => console.log("Viewing Settings")} 
    ];

    // test each route for potential match. we are looping through each routh and returning a new object for each route
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            // testing to see if the path matches any of our route paths
            isMatch: location.pathname === route.path
        }
    })

    // looking for our match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    // if we have not match, we are going to default to root index 0, which is from line 5 above
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match.route.view())
};

// we are listening for the popstate event
window.addEventListener("popstate", router)

// once all of the DOM has rendered, we run the router function
document.addEventListener("DOMContentLoaded", () => {
    // this is a delegated event listener. this makes the links work. grab the event object, if the target matches the selector of data-link, preventdefault will prevent the default behaviour of actually following the link and navigate to the actual href that is set on the element from the index.html page.
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link")) {
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router();
})