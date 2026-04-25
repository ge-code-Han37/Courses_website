function goToCourse(courseName) {
    window.location.href = "details.html?details=" + courseName;
}

const params = new URLSearchParams(window.location.search);
const course = params.get("details");

const courses = {
    python: {
        content: `
            <div class="course-hero" style="background-image: url('images/gemi_py.png');">
                <div class="hero-left">
                    <h1>Python Programming Course</h1>
                    <p>An introduction to programming using a language called Python. Learn how to read and write code as well as how to test and "debug" it...</p>
                    <button class="enroll-btn-hero">Enroll Now</button>
                </div>
                <div class="hero-right">
                    <img src="images/python.jpeg" class="course-main-img">
                </div>
            </div>

            <div class="course-main-content">
                <div class="content-left">
                    <h2>What You Will Learn</h2>
                    <ul>
                        <li>Functions, arguments, return values</li>
                        <li>Variables, types, exceptions</li>
                        <li>Conditionals, Boolean expressions</li>
                        <li>Loops, objects, and libraries</li>
                    </ul>
                </div>
                <div class="content-right">
                    <div class="course-stats-box">
                        <p><strong>⏳ Duration:</strong> 6 Weeks (3 sessions/week)</p>
                        <p><strong>👨‍🏫 Instructor:</strong> Eng. Ahmed Hassan</p>
                    </div>
                </div>
            </div>
        `
    },

    ai: {
        content: `
            <div class="course-hero" style="background-image: url('images/gemi_AI.png');">
                <div class="hero-left">
                    <h1>Artificial Intelligence Course</h1>
                    <p>An introduction to Artificial Intelligence and machine learning. Learn how intelligent systems work and build models that learn from data...</p>
                    <button class="enroll-btn-hero">Enroll Now</button>
                </div>
                <div class="hero-right">
                    <img src="images/ai.jpeg" class="course-main-img">
                </div>
            </div>

            <div class="course-main-content">
                <div class="content-left">
                    <h2>Topics Covered</h2>
                    <ul>
                        <li>Machine Learning Basics</li>
                        <li>Neural Networks</li>
                        <li>Data Preprocessing</li>
                        <li>Model Training</li>
                    </ul>
                </div>
                <div class="content-right">
                    <div class="course-stats-box">
                        <p><strong>⏳ Duration:</strong> 8 Weeks (3 sessions/week)</p>
                        <p><strong>👨‍🏫 Instructor:</strong> Dr. Sarah Ali</p>
                    </div>
                </div>
            </div>
        `
    }
};

if (courses[course]) {
    document.getElementById("content").innerHTML = courses[course].content;
} else {
    document.getElementById("content").innerHTML = "<h1>Course not found</h1>";




}
