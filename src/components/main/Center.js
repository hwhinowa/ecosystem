import React, { Component } from 'react';

class Center extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width : this.props.width ? this.props.width : 1920,
            cursor_center : this.props.cursor_center ? this.props.cursor_center : true,
            cursor_left : this.props.cursor_left ? this.props.cursor_left : false,
            cursor_right : this.props.cursor_right ? this.props.cursor_right : false,
            opacity : this.props.opacity ? this.props.opacity : false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps
        });
    }

    render() {
        const style_center = {
            width: `${this.state.width / 1920 * 600}px`,
            height: `${this.state.width / 1920 * 530}px`,
            margin: `${(530 - this.state.width / 1920 * 530) / 2}px ${(600 - this.state.width / 1920 * 600) / 2}px 0`
        }

        return (
            <div className={`svg_target ${(this.state.cursor_left && `rotate_left`) || (this.state.cursor_center && `rotate_center`) || (this.state.cursor_right && `rotate_right`)} ${this.state.opacity ? `opacity` : ``}`}>
                <svg viewBox='0 0 600 530' style={style_center}>
                    {/* 1 */}
                    <circle cx='300' cy='280' r='5' stroke='#fff' fill='none' />

                    {/* 2 */}
                    <line x1='270' y1='279' x2='250' y2='279' stroke='#fff' strokeDasharray='20 20' strokeDashoffset='20' fill='none' />
                    <line x1='328' y1='279' x2='348' y2='279' stroke='#fff' strokeDasharray='20 40' strokeDashoffset='20' fill='none' />

                    {/* 3 */}
                    <circle cx='300' cy='280' r='56' stroke='#6fb5b2' strokeDasharray='360 360' strokeDashoffset='360' fill='none' />

                    {/* 4 */}
                    <path d='M190 246 H 242 C 248 234, 256 228, 266 222' stroke='#6fb5b2' strokeWidth='2' strokeDasharray='100 200' strokeDashoffset='200' fill='none' />
                    <path d='M409 246 H 358 C 353 236, 343 225, 332 221' stroke='#6fb5b2' strokeWidth='2' strokeDasharray='100 200' strokeDashoffset='200' fill='none' />
                    <path d='M145 309 H 242 C 248 320, 256 330, 266 333' stroke='#6fb5b2' strokeWidth='2' strokeDasharray='150 300' strokeDashoffset='300' fill='none' />
                    <path d='M451 310 H 356 C 353 321, 343 331, 332 334' stroke='#6fb5b2' strokeWidth='2' strokeDasharray='150 300' strokeDashoffset='300' fill='none' />
                    <line x1='239' y1='241' x2='209' y2='241' stroke='#8c9a9d' strokeWidth='2' strokeDasharray='30 30' strokeDashoffset='30' fill='none' />
                    <line x1='362' y1='241' x2='390' y2='241' stroke='#8c9a9d' strokeWidth='2' strokeDasharray='30 30' strokeDashoffset='30' fill='none' />
                    <line x1='176' y1='316' x2='147' y2='316' stroke='#8c9a9d' strokeWidth='2' strokeDasharray='30 30' strokeDashoffset='30' fill='none' />
                    <line x1='422' y1='316' x2='451' y2='316' stroke='#8c9a9d' strokeWidth='2' strokeDasharray='30 30' strokeDashoffset='30' fill='none' />

                    {/* 5 */}
                    <line x1='294' y1='164' x2='294' y2='392' stroke='#fff' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='306' y1='392' x2='306' y2='164' stroke='#fff' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='280' y1='164' x2='280' y2='392' stroke='rgba(255,255,255,0.7)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='319' y1='392' x2='319' y2='164' stroke='rgba(255,255,255,0.7)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='268' y1='164' x2='268' y2='392' stroke='rgba(255,255,255,0.5)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='330' y1='392' x2='330' y2='164' stroke='rgba(255,255,255,0.5)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='254' y1='164' x2='254' y2='392' stroke='rgba(255,255,255,0.3)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='344' y1='392' x2='344' y2='164' stroke='rgba(255,255,255,0.3)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='243' y1='189' x2='243' y2='368' stroke='rgba(255,255,255,0.2)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='357' y1='367' x2='357' y2='189' stroke='rgba(255,255,255,0.2)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />

                    {/* line 16 circle 2 path 4 */}

                    <line x1='206' y1='214' x2='206' y2='342' stroke='rgba(255,255,255,0.1)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='392' y1='342' x2='392' y2='214' stroke='rgba(255,255,255,0.1)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='192' y1='214' x2='192' y2='342' stroke='rgba(255,255,255,0.2)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='406' y1='342' x2='406' y2='214' stroke='rgba(255,255,255,0.2)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />
                    <line x1='180' y1='214' x2='180' y2='342' stroke='rgba(255,255,255,0.1)' strokeDasharray='1 17' strokeDashoffset='2' fill='none' />
                    <line x1='418' y1='342' x2='418' y2='214' stroke='rgba(255,255,255,0.1)' strokeDasharray='1 17' strokeDashoffset='5' fill='none' />


                    {/* 6 */}
                    <path d='M222 145 C 180 163, 145 224, 147 278' stroke='rgba(111,181,178,0.4)' strokeDasharray='630 1300' strokeDashoffset='630' fill='none' />
                    <path d='M376 145, C 414 160, 454 220, 451 278' stroke='rgba(111,181,178,0.4)' strokeDasharray='630 1300' strokeDashoffset='630' fill='none' />
                    <line x1='143' y1='278' x2='136' y2='278' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />
                    <line x1='163' y1='200' x2='158' y2='197' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />
                    <line x1='220' y1='143' x2='217' y2='138' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />
                    <line x1='455' y1='278' x2='462' y2='278' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />
                    <line x1='435' y1='200' x2='441' y2='197' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />
                    <line x1='379' y1='143' x2='382' y2='137' stroke='rgba(255,255,255,0.3)' strokeWidth='2' fill='none' />

                    {/* line 28 circle 2 path 6 */}

                    {/* 7 */}
                    <line x1='102' y1='278' x2='62' y2='278' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='40 40' strokeDashoffset='40' fill='none' />
                    <line x1='496' y1='278' x2='536' y2='278' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='40 40' strokeDashoffset='40' fill='none' />

                    {/* 8 */}
                    <path d='M73 273 C 72 219, 105 144, 136 120 L 145 128 C 127 142, 105 176, 98 203 L 107 217 C 101 229, 96 255, 98 273 Z' stroke='rgba(111,181,178,0.6)' strokeDasharray='400 400' strokeDashoffset='400' fill='rgba(111,181,178,0.5)' />
                    <path d='M527 273 C 528 219, 494 144, 463 120 L 454 128 C 471 142, 494 176, 500 203 L 491 216 C 498 229, 503 255, 501 273 Z' stroke='rgba(111,181,178,0.6)' strokeDasharray='400 400' strokeDashoffset='400' fill='rgba(111,181,178,0.5)' />
                    <line x1='101' y1='274' x2='102' y2='272' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />
                    <line x1='101' y1='282' x2='102' y2='284' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />
                    <line x1='60' y1='278' x2='54' y2='278' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />
                    <line x1='497' y1='275' x2='496' y2='273' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />
                    <line x1='497' y1='282' x2='496' y2='284' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />
                    <line x1='539' y1='278' x2='545' y2='278' stroke='rgba(255,255,255,0.4)' strokeWidth='2' strokeDasharray='10 10' strokeDashoffset='10' fill='none' />

                    {/* 9 */}
                    <path d='M65 273 C 65 262, 67 247, 69 238' stroke='rgba(111,181,178,0.6)' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <path d='M65 282 C 65 292, 67 307, 69 314' stroke='rgba(111,181,178,0.6)' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <path d='M534 274 C 534 263, 532 248, 530 239' stroke='rgba(111,181,178,0.6)' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />
                    <path d='M534 283 C 534 293, 532 308, 530 315' stroke='rgba(111,181,178,0.6)' strokeDasharray='50 50' strokeDashoffset='50' fill='none' />

                    {/* line 36 circle 2 path 12 */}

                    {/* 10 */}
                    <path d='M294 42 C 294 38, 304 38, 304 42 L 302 82 C 302 84, 296 84, 296 82' stroke='none' fill='rgba(255,255,255, 0.5)' />
                    <path d='M294 515 C 294 519, 304 519, 304 515 L 302 476 C 302 472, 296 472, 296 476' stroke='none' fill='rgba(255,255,255, 0.5)' />

                    {/* 11 */}
                    <path d='M294 6 C 272 6, 228 12, 208 22' stroke='rgba(255,255,255, 0.8)' strokeWidth='10' strokeDasharray='100 100' strokeDashoffset='100' strokeLinecap='round' fill='none' />
                    <path d='M306 6 C 326 6, 369 12, 392 22' stroke='rgba(255,255,255, 0.8)' strokeWidth='10' strokeDasharray='100 100' strokeDashoffset='100' strokeLinecap='round' fill='none' />

                    <line x1='285' y1='478' x2='264' y2='478' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' fill='none' />
                    <line x1='313' y1='478' x2='335' y2='478' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' fill='none' />
                    <line x1='285' y1='474' x2='239' y2='474' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='50 50' strokeDashoffset='50' strokeLinecap='round' fill='none' />
                    <line x1='313' y1='474' x2='358' y2='474' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='50 50' strokeDashoffset='50' strokeLinecap='round' fill='none' />
                    <line x1='285' y1='468' x2='217' y2='468' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='70 70' strokeDashoffset='70' strokeLinecap='round' fill='none' />
                    <line x1='313' y1='468' x2='381' y2='468' stroke='rgba(255,255,255,0.4)' strokeWidth='3' strokeDasharray='70 70' strokeDashoffset='70' strokeLinecap='round' fill='none' />

                    {/* line 42 circle 2 path 16 */}

                    {/* 12 */}
                    <line x1='218' y1='459' x2='191' y2='459' stroke='rgba(255,255,255,0.6)' strokeWidth='4' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' fill='none' />
                    <line x1='381' y1='459' x2='406' y2='459' stroke='rgba(255,255,255,0.6)' strokeWidth='4' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' fill='none' />
                    <path d='M190 457 L 147 500 C 138 507, 126 520, 110 519 L 72 517 C 66 517, 66 527, 72 527 L 126 526 C 136 525, 144 516, 153 507 L 190 461 Z' stroke='none' fill='rgba(255,255,255,0.6)' />
                    <line x1='60' y1='518' x2='31' y2='490' stroke='rgba(255,255,255,0.5)' strokeWidth='7' strokeDasharray='60 60' strokeDashoffset='60' strokeLinecap='round' />
                    <path d='M408 458 L 451 498 C 461 508, 471 518, 488 518 L 525 516 C 532 518, 532 528, 525 526 L 479 527 C 469 525, 461 518, 452 509 L 407 461 Z' stroke='none' fill='rgba(255,255,255,0.6)' />
                    <line x1='539' y1='518' x2='564' y2='490' stroke='rgba(255,255,255,0.5)' strokeWidth='7' strokeDasharray='60 60' strokeDashoffset='60' strokeLinecap='round' />

                    {/* 13 */}
                    <path d='M496 512 C 489 517, 481 507, 487 502 C 546 452, 588 374, 590 280 C 590 278, 594 278, 594 280 C 589 375, 552 455, 496 512' stroke='none' fill='rgba(255,255,255,0.3)' />
                    <path d='M477 485 C 471 491, 464 484, 469 478 C 497 460, 530 407, 544 370 C 545 368, 548 369, 548 371 C 540 395, 520 431, 512 438 C 583 365, 583 187, 514 119 C 528 136, 542 161, 550 186 C 550 189, 547 189, 546 187 C 536 149, 500 102, 469 80 C 465 75, 472 69, 476 73 C 605 175, 605 375, 477 485' stroke='none' fill='rgba(111,181,178,0.6)' />

                    <path d='M100 512 C 107 517, 115 507, 109 502 C 50 452, 8 374, 6 280 C 6 278, 2 278, 2 280 C 7 375, 44 455, 98 512' stroke='none' fill='rgba(255,255,255,0.3)' />
                    <path d='M120 485 C 126 491, 133 484, 128 478 C 100 460, 67 407, 53 370 C 52 368, 49 369, 49 371 C 57 395, 77 431, 85 438 C 14 365, 14 187, 83 119 C 69 136, 55 161, 47 186 C 47 189, 50 189, 51 187 C 61 149, 97 102, 128 80 C 132 75, 125 69, 121 73 C -8 175, -8 375, 120 485' stroke='none' fill='rgba(111,181,178,0.6)' />

                    {/* line 46 circle 2 path 22 */}

                    {/* 14 */}
                    <circle cx='481' cy='68' r='6' stroke='none' fill='rgba(255,255,255,0.6)' />
                    <circle cx='513' cy='101' r='4' stroke='none' fill='rgba(255,255,255,0.8)' />
                    <circle cx='539' cy='138' r='3' stroke='none' fill='#fff' />
                    <circle cx='558' cy='178' r='2' stroke='none' fill='#fff' />
                    <line x1='586' y1='280' x2='584' y2='304' stroke='#fff' strokeWidth='3' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' />
                    <circle cx='558' cy='378' r='2' stroke='none' fill='#fff' />
                    <circle cx='540' cy='418' r='3' stroke='none' fill='#fff' />
                    <circle cx='514' cy='455' r='4' stroke='none' fill='rgba(255,255,255,0.8)' />
                    <circle cx='484' cy='488' r='6' stroke='none' fill='rgba(255,255,255,0.6)' />

                    <circle cx='116' cy='68' r='6' stroke='none' fill='rgba(255,255,255,0.6)' />
                    <circle cx='84' cy='101' r='4' stroke='none' fill='rgba(255,255,255,0.8)' />
                    <circle cx='58' cy='138' r='3' stroke='none' fill='#fff' />
                    <circle cx='38' cy='178' r='2' stroke='none' fill='#fff' />
                    <line x1='10' y1='280' x2='12' y2='304' stroke='#fff' strokeWidth='3' strokeDasharray='30 30' strokeDashoffset='30' strokeLinecap='round' />
                    <circle cx='38' cy='378' r='2' stroke='none' fill='#fff' />
                    <circle cx='58' cy='418' r='3' stroke='none' fill='#fff' />
                    <circle cx='83' cy='455' r='4' stroke='none' fill='rgba(255,255,255,0.8)' />
                    <circle cx='113' cy='488' r='6' stroke='none' fill='rgba(255,255,255,0.6)' />

                    {/* line 48 circle 18 path 22 */}

                    {/* 15 */}
                    <line x1='384' y1='499' x2='418' y2='482' stroke='#7cdad6' strokeWidth='6' strokeDasharray='50 50' strokeDashoffset='50' strokeLinecap='round' />
                    <line x1='214' y1='499' x2='181' y2='482' stroke='#7cdad6' strokeWidth='6' strokeDasharray='50 50' strokeDashoffset='50' strokeLinecap='round' />

                    <circle cx='209' cy='63' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='231' cy='63' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='368' cy='63' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='389' cy='63' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='264' cy='493' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='285' cy='493' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='312' cy='493' r='4' stroke='none' fill='#7cdad6' />
                    <circle cx='332' cy='493' r='4' stroke='none' fill='#7cdad6' />
                </svg>
            </div>
        );
    }
}

export default Center;
