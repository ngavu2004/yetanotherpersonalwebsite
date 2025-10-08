import './Welcome.css'

function Welcome() {
  function moveArrow(direction) {
    // This function moves the arrow up and down the list of roles

    // Keep the scroll the same, dont scroll when moving the arrow
    window.scrollTo(0, document.body.scrollHeight);

    // Get all role items and the arrow element
    const roles = document.querySelectorAll('.role-item');
    const arrow = document.getElementById('arrow-pointer');

    // Find the currently selected item
    let selectedIndex = Array.from(roles).findIndex(role => role.classList.contains('selected'));

    // Remove 'selected' class from the current item
    roles[selectedIndex].classList.remove('selected');

    // Update the index based on the direction
    if (direction === 'up') {
      selectedIndex = (selectedIndex - 1 + roles.length) % roles.length;
    } else if (direction === 'down') {
      selectedIndex = (selectedIndex + 1) % roles.length;
    }

    // Add 'selected' class to the new item
    roles[selectedIndex].classList.add('selected');
    
    // Move the arrow to the new position
    const newTop = roles[selectedIndex].offsetTop;
    arrow.style.top = `${newTop}px`;
  }

  const roles_to_page = {
    'Recruiter': '/recruiter',
    'Developer': '/developer',
    'Just look around lmao': '/explore'
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowUp') {
      moveArrow('up');
    } else if (event.key === 'ArrowDown') {
      moveArrow('down');
    } else if (event.key === 'Enter') {
      const selectedRole = document.querySelector('.role-item.selected').textContent;
      
    }
  }

  window.addEventListener('keydown', handleKeyDown);

  return (
    <div className="typeme">
      <div><span className="text-secondary">ngavu@welcome</span><span className="text-background">~ </span><span
        className="cursor">$ </span>me -h</div>
      <section className="output">
        <ul className="links">
          <li>
            <a className="linkedin" href="https://www.linkedin.com/in/nga-vu-269626226/" alt="linkedin" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/ngavu2004" alt="github" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a className="email" alt="email" target="_blank">
              Email: vuthiquynhga4@gmail.com
            </a>
          </li>
        </ul>
      </section>
      <section className="output">
        <div>
          <span className="text-secondary">ngavu@welcome </span>
          <span className="text-background">~ </span>
          <span className="cursor">$ </span>
          help
          <p>Choose your role (use the arrow key to move up and down): </p>
          <div className="picker">
            <div id="arrow-pointer" className="arrow">▶</div>
            <ul className="roles">
              <li className="role-item selected">Recruiter</li>
              <li className="role-item">Developer</li>
              <li className="role-item">Just look around lmao</li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Welcome
