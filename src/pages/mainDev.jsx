import TechStack from "../components/TechStack";

function MainDev() {
    return (
      <div>
        <section class="output">
          <div>
            <span class="text-secondary">ngavu@welcome </span>
            <span class="text-background">~ </span>
            <span class="cursor">$ </span>ls tech_stack
            <TechStack />
          </div>
        </section>
      </div>
    );
}

export default MainDev;