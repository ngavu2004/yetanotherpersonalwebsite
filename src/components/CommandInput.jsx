function CommandInput({ role, onCommand }) {
    return (
        <div className='command-input'><span className="text-secondary">ngavu@{role} </span><span className="text-background">~ </span><span
          className="cursor">$ </span><input type="text" onKeyDown={onCommand} /></div>
    );
}

export default CommandInput;