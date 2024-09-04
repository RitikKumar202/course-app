export const mockCourses = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://www.daac.in/blog/wp-content/uploads/2023/06/Untitled-design-2-1.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
            {
                week: 3,
                topic: 'Styling in React Native',
                content: 'Understanding styles in React Native, using Flexbox for layout.'
            },
            {
                week: 4,
                topic: 'Handling User Input',
                content: 'Managing user input with TextInput, handling forms, and validation.'
            },
            {
                week: 5,
                topic: 'Navigation in React Native',
                content: 'Implementing navigation using React Navigation, creating stack and tab navigators.'
            },
            {
                week: 6,
                topic: 'Networking and API Integration',
                content: 'Fetching data from APIs using Fetch and Axios, handling asynchronous data.'
            },
            {
                week: 7,
                topic: 'State Management with Redux',
                content: 'Introduction to Redux, managing state in a React Native app.'
            },
            {
                week: 8,
                topic: 'Deploying Your App',
                content: 'Preparing your app for deployment, creating release builds for iOS and Android.'
            }
        ]
    },
    {
        id: 2,
        name: 'Advanced JavaScript',
        instructor: 'Jane Smith',
        description: 'Deep dive into advanced JavaScript concepts and modern ECMAScript features.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'https://i.ytimg.com/vi/29VmFXmlgB8/sddefault.jpg?v=62b5d0dc',
        duration: '6 weeks',
        schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'JavaScript Closures',
                content: 'Understanding closures and their use cases.'
            },
            {
                week: 2,
                topic: 'Async JavaScript',
                content: 'Exploring promises, async/await, and error handling.'
            },
            {
                week: 3,
                topic: 'JavaScript Modules',
                content: 'Understanding ES6 modules, importing and exporting functionalities.'
            },
            {
                week: 4,
                topic: 'Advanced Array Methods',
                content: 'Using map, filter, reduce, and other array methods for complex data manipulation.'
            },
            {
                week: 5,
                topic: 'Object-Oriented JavaScript',
                content: 'Exploring prototypes, classes, inheritance, and encapsulation.'
            },
            {
                week: 6,
                topic: 'Advanced Functions and Patterns',
                content: 'Learning about currying, partial application, and function composition.'
            }
        ]
    },
    {
        id: 3,
        name: 'Node.js for Beginners',
        instructor: 'Ritik Kumar',
        description: 'Get started with server-side programming using Node.js, and learn to build scalable applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://i.ytimg.com/vi/f2EqECiTBL8/maxresdefault.jpg',
        duration: '7 weeks',
        schedule: 'Tuesdays and Thursdays, 4:00 PM - 6:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Node.js',
                content: 'Overview of Node.js, setting up the development environment.'
            },
            {
                week: 2,
                topic: 'Understanding the Event Loop',
                content: 'Deep dive into the Node.js event loop, callbacks, and asynchronous programming.'
            },
            {
                week: 3,
                topic: 'Modules and NPM',
                content: 'Using built-in modules, creating custom modules, and managing packages with NPM.'
            },
            {
                week: 4,
                topic: 'File System and Path Modules',
                content: 'Working with the File System module, reading and writing files, and handling paths.'
            },
            {
                week: 5,
                topic: 'Building a Simple Web Server',
                content: 'Creating a basic web server using the HTTP module, handling requests and responses.'
            },
            {
                week: 6,
                topic: 'Working with Express.js',
                content: 'Introduction to Express.js, building RESTful APIs, and middleware functions.'
            },
            {
                week: 7,
                topic: 'Deploying Node.js Applications',
                content: 'Preparing your Node.js app for production, deploying to cloud platforms.'
            }
        ]
    },
    {
        id: 4,
        name: 'Mastering MongoDB',
        instructor: 'Alex Hales',
        description: 'Learn how to effectively use MongoDB, the popular NoSQL database, for modern applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'https://i.ytimg.com/vi/GFaKsrfQkAc/maxresdefault.jpg',
        duration: '5 weeks',
        schedule: 'Wednesdays and Fridays, 3:00 PM - 5:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of databases'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to MongoDB',
                content: 'Overview of NoSQL databases, installing MongoDB, understanding collections and documents.'
            },
            {
                week: 2,
                topic: 'CRUD Operations',
                content: 'Performing Create, Read, Update, and Delete operations, working with MongoDB shell.'
            },
            {
                week: 3,
                topic: 'Indexing and Aggregation',
                content: 'Understanding indexing for performance, using the aggregation framework for data analysis.'
            },
            {
                week: 4,
                topic: 'Data Modeling',
                content: 'Designing effective data models, handling relationships between data using embedded documents and references.'
            },
            {
                week: 5,
                topic: 'Replication and Sharding',
                content: 'Setting up replication for high availability, sharding for horizontal scaling, and ensuring data consistency.'
            }
        ]
    }
];
