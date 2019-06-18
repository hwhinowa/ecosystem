import React, { Component } from 'react';

class Left extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width ? this.props.width : 1920,
            cursor_center: this.props.cursor_center ? this.props.cursor_center : true,
            cursor_left: this.props.cursor_left ? this.props.cursor_left : false,
            cursor_right: this.props.cursor_right ? this.props.cursor_right : false,
            opacity : this.props.opacity ? this.props.opacity : false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps
        });
    }

    render() {
        const style_left = {
            width: `${this.state.width / 1920 * 230}px`,
            height: `${this.state.width / 1920 * 550}px`,
            margin: `${(550 - this.state.width / 1920 * 550) / 2}px 0 0`
        }

        return (
            <div className={`svg_left ${(this.state.cursor_left && `rotate_left`) || (this.state.cursor_center && `rotate_center`) || (this.state.cursor_right && `rotate_right`)} ${this.state.opacity ? `opacity` : ``}`}>
                <svg viewBox='0 0 230 550' style={style_left}>
                    {/* 1 */}
                    <path d='M0 5 H 140 L 192 53 C 139 166, 141 406, 192 497 L 140 545 H 0' stroke='#1c3b36' strokeWidth='3' fill='rgba(28,59,54,0.2)' />
                    <path d='M208 66 C 161 173, 163 400, 208 485' stroke='#766b4d' strokeWidth='5' fill='none' />
                </svg>
            </div>
        );
    }
}

export default Left;
