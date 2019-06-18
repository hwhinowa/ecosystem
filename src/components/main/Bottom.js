import React, { Component } from 'react';

class Bottom extends Component {
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
        const style_bottom = {
            width: `${this.state.width / 1920 * 1840}px`,
            height: `${this.state.width / 1920 * 230}px`,
            margin: `${(230 - this.state.width / 1920 * 230)}px ${(1840 - this.state.width / 1920 * 1840) / 2}px 0`
        }

        return (
            <div className={`svg_bottom_center ${(this.state.cursor_left && `rotate_left_bottom`) || (this.state.cursor_center && `rotate_center_bottom`) || (this.state.cursor_right && `rotate_right_bottom`)} ${this.state.opacity ? `opacity` : ``}`}>
                <svg viewBox='0 0 1840 230' style={style_bottom}>
                    {/* 1 */}
                    <path d='M173 230 V 134 H 230 V 124 H 282 V 59 L 302 36 H 378 L 388 29 H 464 L 493 0 H 759 L 793 20 H 1044 L 1074 0 H 1344 L 1372 29 H 1449 L 1459 36 H 1532 L 1554 59 V 124 H 1605 V 134 H 1662 V 230 Z' stroke='none' fill='rgba(8, 38, 45, 0.3)' />

                    <circle cx='918' cy='155' r='54' stroke='#407668' strokeWidth='1' strokeDasharray='120 50' strokeDashoffset='120' fill='none' />
                    <circle cx='918' cy='155' r='40' stroke='#214e47' strokeWidth='6' strokeDasharray='260 260' strokeDashoffset='260' fill='none' />
                    <circle cx='888' cy='57' r='4' stroke='none' fill='#59a799' />
                    <circle cx='888' cy='69' r='4' stroke='none' fill='#59a799' />
                    <circle cx='918' cy='65' r='4' stroke='none' fill='#59a799' />
                    <circle cx='918' cy='77' r='4' stroke='none' fill='#59a799' />
                    <circle cx='942' cy='63' r='4' stroke='none' fill='#59a799' />
                    <circle cx='942' cy='75' r='4' stroke='none' fill='#59a799' />
                    <circle cx='888' cy='84' r='7' stroke='none' fill='#6d6040' />
                    <circle cx='942' cy='89' r='7' stroke='none' fill='#6d6040' />
                    <polyline points='888 82, 898 82, 918 100, 938 83, 942 87' stroke='#b6a35f' strokeWidth='2' strokeDasharray='100 100' strokeDashoffset='100' fill='none' />

                    {/* line 0 circle 10 polyline 1 path 1 */}

                    {/* 2 */}
                    <circle cx='720' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.3)' />
                    <circle cx='740' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.5)' />
                    <circle cx='760' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.2)' />
                    <circle cx='780' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.6)' />

                    <circle cx='720' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.3)' />
                    <circle cx='740' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.5)' />
                    <circle cx='760' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.2)' />
                    <circle cx='780' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.6)' />

                    <circle cx='1118' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.3)' />
                    <circle cx='1098' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.5)' />
                    <circle cx='1078' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.2)' />
                    <circle cx='1058' cy='124' r='6' stroke='none' fill='rgba(182, 162, 95, 0.6)' />

                    <circle cx='1118' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.3)' />
                    <circle cx='1098' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.5)' />
                    <circle cx='1078' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.2)' />
                    <circle cx='1058' cy='178' r='6' stroke='none' fill='rgba(182, 162, 95, 0.6)' />

                    {/* line 0 circle 26 polyline 1 path 1 */}

                    {/* 3 */}
                    <path d='M292 120 H 692 C 704 120, 704 104, 715 104 H 782' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <path d='M292 182 H 692 C 704 182, 704 198, 715 198 H 782' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='240' y1='132' x2='692' y2='132' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='240' y1='170' x2='692' y2='170' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='185' y1='145' x2='634' y2='145' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='185' y1='156' x2='634' y2='156' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />

                    <line x1='405' y1='120' x2='431' y2='120' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='374' y1='132' x2='401' y2='132' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='417' y1='145' x2='444' y2='145' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='502' y1='156' x2='529' y2='156' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='643' y1='170' x2='670' y2='170' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='405' y1='182' x2='432' y2='182' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />

                    {/* line 10 circle 26 polyline 1 path 3 */}

                    <path d='M1544 120 H 1144 C 1132 120, 1132 104, 1121 104 H 1055' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <path d='M1544 182 H 1144 C 1132 182, 1132 198, 1121 198 H 1055' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='1595' y1='132' x2='1145' y2='132' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='1595' y1='170' x2='1145' y2='170' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='1651' y1='145' x2='1201' y2='145' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />
                    <line x1='1651' y1='156' x2='1201' y2='156' stroke='#1c3b36' strokeDasharray='500 500' strokeDashoffset='500' strokeWidth='1' fill='none' />

                    <line x1='1430' y1='120' x2='1404' y2='120' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='1461' y1='132' x2='1434' y2='132' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='1418' y1='145' x2='1392' y2='145' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='1333' y1='156' x2='1307' y2='156' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='1193' y1='170' x2='1166' y2='170' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <line x1='1431' y1='182' x2='1405' y2='182' stroke='#b4a270' strokeWidth='2' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />

                    {/* line 20 circle 26 polyline 1 path 5 */}

                    {/* 4 */}
                    <circle cx='869' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='860' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='850' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='840' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='830' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='821' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='811' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='801' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='791' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='782' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='772' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='762' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='753' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='743' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='733' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='723' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='714' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='704' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='695' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='685' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='675' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='665' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='655' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='645' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='636' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='626' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='616' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='607' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='597' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='587' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='578' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='568' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='558' cy='37' r='4' stroke='none' fill='#1c3b36' />

                    {/* line 20 circle 59 polyline 1 path 4 */}

                    {/* 5 */}
                    <circle cx='668' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='657' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='647' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='636' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='626' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='615' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='605' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='594' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='584' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='573' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='562' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='552' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='541' cy='59' r='4' stroke='none' fill='#b4a270' />

                    <circle cx='663' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='652' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='642' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='631' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='621' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='610' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='600' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='589' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='578' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='568' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='557' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='546' cy='70' r='4' stroke='none' fill='#b4a270' />

                    {/* line 20 circle 84 polyline 1 path 4 */}

                    {/* 6 */}
                    <circle cx='430' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='419' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='408' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='397' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='387' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='376' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='366' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='355' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='345' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='334' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='323' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='313' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='302' cy='70' r='4' stroke='none' fill='#b4a270' />

                    <circle cx='339' cy='81' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='328' cy='81' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='318' cy='81' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='307' cy='81' r='4' stroke='none' fill='#b4a270' />

                    {/* line 20 circle 101 polyline 1 path 4 */}

                    {/* 7 */}
                    <polyline className='bottom_line' points='808 40, 803 46, 728 46, 717 54, 675 54, 671 56' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='799 40, 796 44, 725 44, 714 51, 558 51, 558 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='714 40, 714 47, 552 47, 552 56' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='656 42, 652 45, 548 44, 546 47, 546 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='818 40, 811 47, 733 47, 718 58, 684 58, 662 79, 647 79, 647 63' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='838 40, 825 51, 734 51, 715 66, 687 66, 665 85, 608 86, 604 83, 604 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='857 40, 830 66, 813 67, 794 81, 715 82, 702 73, 690 73, 668 93, 564 93, 562 91, 562 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='866 40, 835 71, 814 71, 796 86, 714 86, 701 78, 690 78, 668 98, 546 98, 541 94, 541 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />

                    <polyline className='bottom_line' points='790 34, 755 4, 497 4, 467 33, 391 33, 381 44, 325 44, 304 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='769 34, 745 13, 499 13, 472 40, 396 40, 385 52, 364 52, 347 68' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='740 34, 724 22, 547 22, 542 25, 534 25, 529 29, 522 29, 499 56, 465 56, 454 49, 428 49, 409 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='730 35, 718 26, 548 26, 543 30, 534 30, 508 61, 440 61, 432 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='574 35, 572 31, 550 31, 518 69, 508 69, 497 82, 444 82, 432 92, 310 92, 306 88, 306 84' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />

                    {/* line 20 circle 101 polyline 14 path 4 */}

                    {/* 8 (4) */}
                    <circle cx='968' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='977' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='987' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='997' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1006' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1016' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1026' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1036' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1045' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1055' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1065' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1074' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1084' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1094' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1104' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1113' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1123' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1132' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1142' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1152' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1162' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1172' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1182' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1191' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1201' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1211' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1220' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1230' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1240' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1249' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1259' cy='37' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1269' cy='37' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1279' cy='37' r='4' stroke='none' fill='#1c3b36' />

                    {/* line 20 circle 134 polyline 14 path 4 */}

                    {/* 9 (5) */}
                    <circle cx='1168' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1179' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1189' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1200' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1210' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1221' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1231' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1242' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1252' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1263' cy='59' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1274' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1284' cy='59' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1295' cy='59' r='4' stroke='none' fill='#b4a270' />

                    <circle cx='1174' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1185' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1195' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1206' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1216' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1227' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1237' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1248' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1259' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1269' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1280' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1291' cy='70' r='4' stroke='none' fill='#b4a270' />

                    {/* line 20 circle 159 polyline 14 path 4 */}

                    {/* 10 (6) */}
                    <circle cx='1407' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1418' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1429' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1440' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1450' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1461' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1471' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1482' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1492' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1503' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1514' cy='70' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1524' cy='70' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1535' cy='70' r='4' stroke='none' fill='#b4a270' />

                    <circle cx='1498' cy='81' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1509' cy='81' r='4' stroke='none' fill='#1c3b36' />
                    <circle cx='1519' cy='81' r='4' stroke='none' fill='#b4a270' />
                    <circle cx='1530' cy='81' r='4' stroke='none' fill='#b4a270' />

                    {/* line 20 circle 176 polyline 14 path 4 */}

                    {/* 11 (7) */}
                    <polyline className='bottom_line' points='1028 40, 1033 46, 1108 46, 1119 54, 1161 54, 1165 56' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1037 40, 1040 44, 1111 44, 1122 51, 1278 51, 1278 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1122 40, 1122 47, 1284 47, 1284 56' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1180 42, 1184 45, 1288 44, 1290 47, 1290 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1018 40, 1025 47, 1103 47, 1118 58, 1152 58, 1174 79, 1189 79, 1189 63' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='998 40, 1011 51, 1102 51, 1121 66, 1149 66, 1171 85, 1228 86, 1232 83, 1232 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='979 40, 1006 66, 1023 67, 1042 81, 1121 82, 1134 73, 1146 73, 1168 93, 1272 93, 1276 91, 1276 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='970 40, 1001 71, 1022 71, 1040 86, 1122 86, 1135 78, 1146 78, 1168 98, 1290 98, 1295 94, 1295 62' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />

                    <polyline className='bottom_line' points='1047 34, 1082 4, 1340 4, 1370 33, 1446 33, 1456 44, 1512 44, 1533 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1068 34, 1092 13, 1338 13, 1365 40, 1443 40, 1454 52, 1475 52, 1492 68' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1097 34, 1113 22, 1290 22, 1295 25, 1303 25, 1308 29, 1315 29, 1338 56, 1372 56, 1383 49, 1409 49, 1428 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1107 35, 1119 26, 1289 26, 1294 30, 1303 30, 1329 61, 1397 61, 1405 66' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />
                    <polyline className='bottom_line' points='1263 35, 1265 31, 1287 31, 1319 69, 1329 69, 1340 82, 1393 82, 1405 92, 1527 92, 1531 88, 1531 84' stroke='#1b2e2b' strokeDasharray='2000 2000' strokeDashoffset='2000' fill='none' />

                    {/* line 20 circle 176 polyline 27 path 4 */}
                </svg>
                <div className='bottom_time1'></div>
                <div className='bottom_time2'></div>
            </div>
        );
    }
}

export default Bottom;
