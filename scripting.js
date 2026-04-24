function goToCourse(courseName) {
    window.location.href = "details.html?details=" + courseName;
}

const params = new URLSearchParams(window.location.search);
const course = params.get("details");

const courses = {
   
    python: {
        content: `
          <img src="images/gemi_py.png" width="200" >
            <h1>Python Programming Course</h1>

           
            <img src="images/python.jpeg" >

            <h2>About the Course</h2>
            <p>
                    An introduction to programming using a language called Python. 
                Learn how to read and write code as well as how to test and "debug" it.
                Designed for students with and without prior programming experience 
                who'd like to learn Python specifically. Learn about functions, arguments,
                and return values (oh my!); variables and types; conditions and Boolean expressions; loops;
                and objects and methods. Plus exceptions, file I/O, and libraries. 
                Hands-on opportunities for lots of practice. Exercises inspired by real-world
                programming problems.
            </p>

            <h2>What You Will Learn</h2>
            <ul>
                  <li>functions, arguments, return values</li>
                  <li>variables, types, exceptions</li>
                  <li>conditionals, Boolean expressions</li>
                  <li>loops</li>
                  <li>objects, methods</li>
                  <li>file I/O, libraries</li>
            </ul>

            <h2>Course Duration</h2>
            <p>6 Weeks (3 sessions per week)</p>

            <h2>Instructor</h2>
            <p>Eng. Ahmed Hassan – Software Engineer</p>

            <h2>Final Project</h2>
            <p>
                Build a complete Python application such as a task manager or mini system.
            </p>

            <button>Enroll Now</button>
        `
    },

    ai: {
        content: `
         <img src="images/gemi_AI.png" width="200" >
            <h1>Artificial Intelligence Course</h1>
            
            <img src="images/ai.jpeg" >

            <h2>About the Course</h2>
            <p>
                    An introduction to Artificial Intelligence and machine learning. 
                Learn how intelligent systems work and how to build models that can learn from data. 
                Designed for students with and without prior programming experience 
                who want to understand AI concepts and real-world applications. 
                Learn about data preprocessing, supervised and unsupervised learning, 
                neural networks, and model evaluation; plus basic tools and libraries used in AI. 
                Hands-on opportunities for building simple models and experimenting with datasets. 
                Exercises inspired by real-world AI problems in areas like healthcare, finance, and smart systems.
            </p>

            <h2>Topics Covered</h2>
            <ul>
                <li>Introduction to AI</li>
                <li>Machine Learning Basics</li>
                <li>Neural Networks</li>
                <li>Data Preprocessing</li>
                <li>Model Training</li>
                <li>AI Applications</li>
            </ul>

            <h2>Course Duration</h2>
            <p>8 Weeks (3 sessions per week)</p>

            <h2>Instructor</h2>
            <p>Dr. Sarah Ali – AI Specialist</p>

            <h2>Real-World Applications</h2>
            <p>
                Learn how AI is used in healthcare, finance, and smart systems.
            </p>

            <button>Enroll Now</button>



            
        `
    }

};

if (courses[course]) {
    document.getElementById("content").innerHTML = courses[course].content;
} else {
    document.getElementById("content").innerHTML = "<h1>Course not found</h1>";




}
