import React from 'react';
import TechStack from '../components/TechStack.jsx';
import CommandInput from '../components/CommandInput.jsx';
import './mainPage.css'

function MainPage({ role }) {
    console.log("Selected role in main page: ", role);
    const command_map = {"ls techstack": <TechStack role={role} />};

    let [component_list, setComponentList] = React.useState([]);

    function handleCommandInput(event) {
        if (event.key === 'Enter') {
            // Disable the input after pressing enter
            event.target.disabled = true;
            event.target.blur(); // Remove focus from the input field

            // Get the command from the input field
            const input = event.target.value;
            console.log("Command entered: ", input);
            const output = command_map[input] || <div>Command not found: {input}</div>;
            setComponentList([...component_list, output]);

            // Insert a new input field for the next command
            setComponentList(prevList => [...prevList, <CommandInput role={role} onCommand={handleCommandInput} />]);
        }
    }

    return (
      <div>
        <CommandInput role={role} onCommand={handleCommandInput} />
        {component_list.map((Component, index) => (
            <div key={index} className='command-output'>
                {Component}
            </div>
        ))}
      </div>
    );
}

export default MainPage;