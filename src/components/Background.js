import React, { Component } from "react";
import '../styles/Background.css'
import Particles from "react-particles-js";

class Canvas extends Component {
    state = { width: "0px", height: "0px" };
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }
    updateWindowDimensions = () => {
        this.setState({
            width: `${window.innerWidth}px`,
            height: `${window.innerHeight}px`
        });
    };
    render() {
        const { width, height } = this.state;
        console.log(width, height);
        return (
            <Particles
                {...this.state}
                params={{
                    particles: {
                        number: {
                            value: 500,
                            density: {
                                enable: true
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            random: true,
                            speed: .3,
                            direction: "random",
                            out_mode: "out"
                        }
                    },
                }}
            />
        );
    }
}

export default Canvas;
