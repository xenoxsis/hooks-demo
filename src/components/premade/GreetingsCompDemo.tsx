import React, { ChangeEvent, Component } from "react";
import Row from "../layout/Row";
import Section from "../layout/Section";
import { ClassThemeContext, LocaleContext } from "../../context";

interface State {
  name: string;
  surname: string;
  width: number;
}

export default class Greetings extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Mary",
      surname: "Poppins",
      width: window.innerWidth,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  handleSurnameChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ surname: e.target.value });
  }

  render() {
    return (
      <ClassThemeContext.Consumer>
        {(theme) => (
          <Section className={theme}>
            <Row label="Name">
              <input value={this.state.name} onChange={this.handleNameChange} />
            </Row>
            <Row label="Surname">
              <input
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </Row>
            <LocaleContext.Consumer>
              {(language) => <Row label="Language">{language}</Row>}
            </LocaleContext.Consumer>
            <Row label="Width">{this.state.width}</Row>
          </Section>
        )}
      </ClassThemeContext.Consumer>
    );
  }
}
