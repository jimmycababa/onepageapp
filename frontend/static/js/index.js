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

    console.log(potentialMatches)
};

// once all of the DOM has rendered, we run the router function
document.addEventListener("DOMContentLoaded", () => {
    router();
})