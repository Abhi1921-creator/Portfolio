export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">People call me: Abhinav Garg</h1>
        <p className="text-lg">
          Hey there! I’m Abhinav Garg, a Full Stack Developer with a passion for building intuitive web applications.
          I specialize in front-end technologies like HTML, CSS, and JavaScript, and also work with Node.js and Express on the back end.
          I enjoy learning new frameworks, experimenting with React, and pushing the boundaries of modern web development.
          Let’s build something amazing together!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>my-todo-list:</strong> Dynamic to-do app with CRUD using Node.js, Express, and EJS.</li>
          <li><strong>cv:</strong> Clean responsive HTML resume template.</li>
          <li><strong>dogesh-ecommerce:</strong> Static ecommerce site using Bootstrap.</li>
          <li><strong>DrumKit:</strong> Interactive browser-based drum kit with JS.</li>
          <li><strong>Simon-Game:</strong> Classic memory game in vanilla JS.</li>
          <li><strong>site-v2:</strong> Personal portfolio site using basic HTML/CSS.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Virtual Internship – DATACOM | Forage (Aug 2024 – Dec 2024)</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Completed a simulation focused on software development at Datacom.</li>
              <li>Reviewed a web app and planned improvements.</li>
              <li>Fixed bugs and enhanced application functionality.</li>
            </ul>
          </li>
          <li>
            <strong>Online Internship – HackWithIndia (Dec 2024 – Apr 2025)</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Managed and optimized HackWithIndia’s website.</li>
              <li>Conducted 400+ technical interviews for recruitment.</li>
              <li>Automated emails and certificate generation, reducing manual work by 80%.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside">
          <li><strong>Maharaja Surajmal Institute of Technology</strong> – B.Tech in ECE, CGPA: 7.156 (2022–2026)</li>
          <li><strong>Bal Bharti Senior Secondary School</strong> – 12th, 97.8% (2021)</li>
          <li><strong>Veena Memorial Senior Secondary School</strong> – 10th, 94% (2019)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: abhigarg1921@gmail.com</p>
        <p>Phone: 8561048310</p>
        <p>Address: New Mahaveer Nagar, Tilak Nagar, Delhi 110018</p>
        <p>
          GitHub: <a className="text-blue-500" href="https://github.com/Abhi1921-creator" target="_blank" rel="noreferrer">Abhi1921-creator</a><br/>
          LinkedIn: <a className="text-blue-500" href="https://www.linkedin.com/in/abhinav-garg-808986356/" target="_blank" rel="noreferrer">abhinav-garg-808986356</a>
        </p>
      </section>
    </div>
  )
}
