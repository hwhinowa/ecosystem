import React, { Component } from 'react';

class Right extends Component {
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
        const style_right = {
            width: `${this.state.width / 1920 * 230}px`,
            height: `${this.state.width / 1920 * 550}px`,
            margin: `${(550 - this.state.width / 1920 * 550) / 2}px 0 0`
        }

        return (
            <div className={`svg_right ${(this.state.cursor_left && `rotate_left`) || (this.state.cursor_center && `rotate_center`) || (this.state.cursor_right && `rotate_right`)} ${this.state.opacity ? `opacity` : ``}`} style={style_right}>
                <svg width={`${this.state.width / 1920 * 230}px`} height={`${this.state.width / 1920 * 550}px`} viewBox='0 0 230 550'>
                    {/* 1 */}
                    <path d='M230 5 H 90 L 38 53 C 91 166, 89 406, 38 497 L 90 545 H 230' stroke='#1c3b36' strokeWidth='3' fill='rgba(28,59,54,0.2)' />
                    <path d='M22 66 C 69 173, 67 400, 22 485' stroke='#766b4d' strokeWidth='5' strokeDasharray='2 6' fill='none'/>
                </svg>
            </div>
        );
    }
}

export default Right;
