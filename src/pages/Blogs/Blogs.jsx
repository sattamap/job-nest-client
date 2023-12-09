import token from '../../assets/token.jpg'
import express from '../../assets/express.jpg'
import nest from '../../assets/nest.jpg'
import api from '../../assets/api.jpg'
import mongoDB from '../../assets/mongoDB.jpg'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'



const Blogs = () => {


    const [showHiddenPortion1, setShowHiddenPortion1] = useState(false);
    const [showHiddenPortion2, setShowHiddenPortion2] = useState(false);
    const [showHiddenPortion3, setShowHiddenPortion3] = useState(false);

    const toggleHiddenPortion1 = () => {
        setShowHiddenPortion1(!showHiddenPortion1);
    };
    const toggleHiddenPortion2 = () => {
        setShowHiddenPortion2(!showHiddenPortion2);
    };
    const toggleHiddenPortion3 = () => {
        setShowHiddenPortion3(!showHiddenPortion3);
    };

    return (
        <div className="max-w-[1300px] mx-auto mt-10">
            <Helmet>
              <title>JobNest | Blogs</title>
            </Helmet>
            <div className="grid  lg:grid-cols-3 gap-10">
                <div  className="order-1 lg:col-span-2 flex flex-col gap-10">
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={token} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is an access token and refresh token?</h2>
                            <p className='text-justify'>
                                Access Tokens and Refresh Tokens are essential components of many authentication systems, especially in the context of web and mobile applications. They play a crucial role in securing user access to resources and maintaining user sessions.</p>
                            <p>
                                <button onClick={toggleHiddenPortion1} className='font-bold text-green-500' >
                                    {showHiddenPortion1 ? '' : 'Read more...'}
                                </button>
                            </p>

                            {showHiddenPortion1 && (
                                <div>
                                    <h3 className='text-base font-medium'>Access Token:</h3>
                                    <p className='text-justify'>An access token is a short-lived, temporary credential that is used to grant access to specific resources or perform actions on behalf of a user.
                                        It is typically associated with a user identity and permissions.
                                        Access tokens are often used for authentication and authorization when accessing APIs or web services.
                                        Access tokens are limited in time validity (usually a short duration, such as minutes or hours).
                                        They provide a balance between security and usability, as they expire relatively quickly, reducing the risk if they are compromised.
                                        Access tokens can be issued by an identity provider (such as an OAuth 2.0 authorization server) and are presented by the client (e.g., a web or mobile application) to access protected resources.</p>
                                    <h3 className='text-base font-medium'>Refresh Token:</h3>
                                    <p className='text-justify'>A refresh token is a long-lived, typically semipermanent credential used to obtain a new access token when the current access token expires.
                                        Refresh tokens are used to maintain user authentication and avoid forcing the user to reauthenticate frequently.
                                        They are securely stored on the client side (e.g., in a cookie or local storage).
                                        Refresh tokens are not used to directly access resources; they are exchanged for a new access token.
                                        When an access token expires, the client can use a refresh token to request a new access token from the authorization server without requiring the user to log in again.
                                        Refresh tokens have a much longer validity period (usually days, weeks, or even months) compared to access tokens.
                                        Here is a simplified flow of how access tokens and refresh tokens work together in an authentication system:

                                        The user logs in and receives both an access token and a refresh token.
                                        The access token is used to access protected resources (e.g., APIs) and has a short lifespan.
                                        When the access token expires, the client uses the refresh token to request a new access token from the authentication server without the user involvement.
                                        The refresh token is used to maintain user sessions and avoid frequent logins.</p>
                                    <p>
                                        <button onClick={toggleHiddenPortion1} className='font-bold text-green-500'>
                                            {showHiddenPortion1 ? 'Read Less' : ''}
                                        </button>
                                    </p>
                                </div>

                            )}

                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={nest} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is NestJS?</h2>

                            <p>
                                <strong> NestJS</strong>is a progressive and widely adopted Node.js framework for building efficient, scalable, and maintainable server-side applications. It is known for its strong integration with TypeScript, which is a statically typed superset of JavaScript. NestJS is designed to help developers build structured, robust, and highly testable applications while leveraging the capabilities of modern JavaScript and TypeScript.
                            </p>
                            <p>
                                <button onClick={toggleHiddenPortion2} className='font-bold text-green-500'>
                                    {showHiddenPortion2? '' : 'Read more...'}
                                </button>
                            </p>

                            {showHiddenPortion2 && (
                                <div>


                                    <h1>Key Features and Concepts of NestJS</h1>

                                    <ul>
                                        <li><h2>Modularity</h2>
                                            <p>NestJS applications are composed of modules, each containing related functionality. Modules help organize code and make it easier to manage dependencies.</p>
                                        </li>

                                        <li><h2>Controllers</h2>
                                            <p>Controllers handle incoming requests, process them, and return responses to clients. They are responsible for routing and request handling.</p>
                                        </li>

                                        <li><h2>Providers</h2>
                                            <p>Providers are injectable classes used to provide services and dependencies throughout an application. Services, repositories, and other utilities are often created as providers.</p>
                                        </li>

                                        <li><h2>Dependency Injection</h2>
                                            <p>NestJS leverages dependency injection to manage dependencies and make components reusable and testable.</p>
                                        </li>

                                        <li><h2>Middleware</h2>
                                            <p>Middleware functions can be applied globally or at the route level to perform tasks such as logging, authentication, and validation.</p>
                                        </li>

                                        <li><h2>Interceptors</h2>
                                            <p>Interceptors are used to alter the request and response objects. They can be used for tasks like data transformation, logging, and error handling.</p>
                                        </li>

                                        <li><h2>Guards</h2>
                                            <p>Guards protect routes and endpoints based on specific criteria, such as user authentication or role-based access.</p>
                                        </li>

                                        <li><h2>Exception Filters</h2>
                                            <p>Exception filters handle unhandled exceptions that occur during request processing and format error responses.</p>
                                        </li>

                                        <li><h2>Pipes</h2>
                                            <p>Pipes are used to transform input data before it reaches a route handler. They can validate and sanitize data.</p>
                                        </li>

                                        <li><h2>WebSockets</h2>
                                            <p>NestJS supports WebSockets, allowing real-time communication between the client and server.</p>
                                        </li>

                                        <li><h2>GraphQL Integration</h2>
                                            <p>NestJS provides tools for building GraphQL APIs and is often used with the Apollo Server library for GraphQL.</p>
                                        </li>

                                        <li><h2>TypeScript Support</h2>
                                            <p>NestJS is built with TypeScript in mind, making it type-safe and enhancing code quality.</p>
                                        </li>

                                        <li><h2>Testing Framework</h2>
                                            <p>NestJS includes a testing framework for unit testing components and modules.</p>
                                        </li>
                                    </ul>

                                    <p>
                                        Express.js is often used in combination with other technologies and libraries, such as databases (e.g., MongoDB, MySQL), front-end frameworks (e.g., React, Angular, Vue.js), and authentication libraries (e.g., Passport.js), to build full-stack web applications and RESTful APIs. It offers a great balance of flexibility and simplicity, which is why it is a popular choice for web developers.
                                    </p>
                                    <p>
                                        <button onClick={toggleHiddenPortion2} className='font-bold text-green-500'>
                                            {showHiddenPortion2 ? 'Read Less' : ''}
                                        </button>
                                    </p>
                                </div>

                            )}

                        </div>
                    </div>
                    <div className="card card-compact w-full bg-base-100 shadow-xl">
                        <figure><img src={express} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is express.js?</h2>
                            <h1>Express.js - Web Application Framework for Node.js</h1>
                            <p>
                                <strong>Express.js</strong>, often referred to simply as <strong>Express</strong>, is a minimal and flexible web application framework for Node.js. It is one of the most popular and widely used frameworks for building web applications and APIs in the Node.js ecosystem. Express.js provides a set of features and tools that simplify the development of web applications, making it a preferred choice for many developers.
                            </p>
                            <p>
                                <button onClick={toggleHiddenPortion3} className='font-bold text-green-500'>
                                    {showHiddenPortion3 ? '' : 'Read more...'}
                                </button>
                            </p>

                            {showHiddenPortion3 && (
                                <div>


                                    <h2>Key Characteristics and Features of Express.js:</h2>
                                    <ul>
                                        <li><strong>Middleware:</strong> Express is known for its robust middleware system, which allows you to write custom functions that can be executed during the request-response cycle. Middleware functions can handle tasks such as authentication, logging, parsing request data, and more.</li>
                                        <li><strong>Routing:</strong> Express provides a simple and powerful routing system that allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and handle corresponding requests.</li>
                                        <li><strong>HTTP Utility Methods:</strong> It simplifies the handling of HTTP methods and status codes, making it easier to send responses and handle HTTP requests.</li>
                                        <li><strong>Templating Engines:</strong> While Express itself does not include a templating engine, it can easily be integrated with popular templating engines like EJS, Pug, and Handlebars to generate dynamic HTML pages.</li>
                                        <li><strong>Static File Serving:</strong> Express can serve static files (e.g., images, CSS, JavaScript) with ease, making it suitable for both single-page applications and traditional web applications.</li>
                                        <li><strong>REST API Development:</strong> Express is commonly used to build RESTful APIs, making it a popular choice for developing server-side components of modern web and mobile applications.</li>
                                        <li><strong>Session and Cookie Management:</strong> It offers middleware for managing user sessions and handling cookies, which is essential for building authentication systems.</li>
                                        <li><strong>Error Handling:</strong> Express provides built-in error handling and allows developers to define custom error-handling middleware to handle errors gracefully.</li>
                                        <li><strong>Community and Ecosystem:</strong> Being widely adopted, Express has a large and active community, along with a vast ecosystem of middleware and extensions, which makes it even more powerful and flexible.</li>
                                    </ul>

                                    <p>
                                        Express.js is often used in combination with other technologies and libraries, such as databases (e.g., MongoDB, MySQL), front-end frameworks (e.g., React, Angular, Vue.js), and authentication libraries (e.g., Passport.js), to build full-stack web applications and RESTful APIs. It offers a great balance of flexibility and simplicity, which is why it is a popular choice for web developers.
                                    </p>
                                    <p>
                                        <button onClick={toggleHiddenPortion3} className='font-bold text-green-500'>
                                            {showHiddenPortion3 ? 'Read Less' : ''}
                                        </button>
                                    </p>
                                </div>

                            )}

                        </div>
                    </div>
                </div>


                <div  className="order-2 flex flex-col gap-6 h-fit">
                    <div>
                        <h2 className='text-xl font-semibold'>Recent Blogs</h2>
                    </div>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={nest} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Nest 8.2.1 is released!</h2>
                            <p>NestJS is a powerful, extensible Node.js framework.</p>

                        </div>
                    </div>
                    <div  className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={api} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">What is API!</h2>
                            <p>An API is a set of rules and protocols  that allow </p>

                        </div>
                    </div>
                    <div  className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={mongoDB} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Learn MongoDB!</h2>
                            <p>MongoDB is a popular NoSQL database system</p>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Blogs;


