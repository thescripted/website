import Project from "./Project"
import Header from "./Header"
import TechItem from "./TechItem"
import Content from "./Content"
import Image from "./Image"
import TechStack from "./TechStack"
import styles from "./styles/ProjectContainer.module.css"

function ProjectContainer() {
  return (
    <div className={styles.projectContainer} id="Projects">
      <h1 className="header-link">Projects</h1>

      <Project
        projectLink={false}
        github={`https://github.com/thescripted/trading_dashboard`}
      >
        <Header link={`http://tradingdashboard.netlify.app`} date={`July 2020`}>
          Trading Dashboard & Tooling
        </Header>
        <Image
          link="http://tradingdashboard.netlify.app"
          alt="Trading Analytics"
          source="TradingAnalytics.PNG"
        />
        <Content>
          A web application for trading information and analysis, including
          stock market search, historical price-data, and realtime market
          movement. Bouilt with React and D3.
        </Content>
        <TechStack>
          <TechItem>JavaScript (ES6)</TechItem>
          <TechItem>React (v16.3+)</TechItem>
          <TechItem>Parcel</TechItem>
          <TechItem>TailwindCSS</TechItem>
          <TechItem>D3.js</TechItem>
        </TechStack>
      </Project>

      <Project
        github={`https://github.com/thescripted/trello_server`}
        left={true}
      >
        <Header date={`June 2020`}>"Trella": A Trello Clone</Header>
        <Image alt="Trella Application" source="Trello.PNG" />
        <Content>
          "Trella" is a simplified, work-in-progress, functional redesign of
          Trello.com.
        </Content>
        <TechStack>
          <TechItem>MobX</TechItem>
          <TechItem>React</TechItem>
          <TechItem>PostgreSQL</TechItem>
          <TechItem>GraphQL</TechItem>
          <TechItem>AWS (Lambda & RDS)</TechItem>
          <TechItem>Prisma</TechItem>
          <TechItem>Urql</TechItem>
        </TechStack>
      </Project>

      <Project
        github={`https://github.com/thescripted/message-bottle-client`}
        left={true}
      >
        <Header link={`http://messagebottle.netlify.app`} date={`May 2020`}>
          Anonymous Message Service
        </Header>
        <Image
          link={`http://messagebottle.netlify.app`}
          alt="Message In A Bottle Application"
          source="Message.PNG"
        />
        <Content>
          Titled, "Message In A Bottle", this web application allows anyone to
          submit a message and allows anyone to read a message submitted.
        </Content>
        <TechStack>
          <TechItem>Node</TechItem>
          <TechItem>MongoDB</TechItem>
          <TechItem>Mongoose</TechItem>
          <TechItem>Netlify</TechItem>
        </TechStack>
      </Project>
    </div>
  )
}

export default ProjectContainer
