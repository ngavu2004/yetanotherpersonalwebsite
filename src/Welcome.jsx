import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Welcome.css'

function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <div class="typeme">
      <div><span class="text-secondary">ngavu@welcome</span><span class="text-background">~ </span><span
        class="cursor">$ </span>me -h</div>
      <section class="output">
        <ul class="links">
          <li>
            <a class="linkedin" href="https://www.linkedin.com/in/nga-vu-269626226/" alt="linkedin" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a class="github" href="https://github.com/ngavu2004" alt="github" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a class="email" alt="email" target="_blank">
              Email: vuthiquynhga4@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <section class="output">
        <div><span class="text-secondary">ngavu@welcome </span><span class="text-background">~ </span><span
          class="cursor">$ </span>ls tech_stack</div>
        <table>
          <thead>
            <tr>
              <th>Programming Languages</th>
              <th>Frameworks & Libraries</th>
              <th>Databases</th>
              <th>Tools & Platforms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Golang</td>
              <td>Django</td>
              <td>PostgreSQL</td>
              <td>Docker</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>React</td>
              <td>MySQL</td>
              <td>Kubernetes</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>Node.js</td>
              <td>SQLite</td>
              <td>AWS</td>
            </tr>
            <tr>
              <td>C/C++</td>
              <td>Flask</td>
              <td>MongoDB</td>
              <td>Git</td>
            </tr>
            <tr>
              <td></td>
              <td>FastAPI</td>
              <td></td>
              <td>Linux</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="output">
        <div>
          <span class="text-secondary">ngavu@welcome </span>
          <span class="text-background">~ </span>
          <span class="cursor">$ </span>
          help
          <p>Choose your role: </p>
          <ul class="roles">
            <li>Recruiter</li>
            <li>Developer</li>
            <li>Just look around lmao</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Welcome
