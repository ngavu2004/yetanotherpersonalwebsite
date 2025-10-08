import './TechStack.css'
function TechStack() {
    return (
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
    )
}

export default TechStack;