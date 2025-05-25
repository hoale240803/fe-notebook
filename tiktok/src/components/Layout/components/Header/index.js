import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { forwardRef, useEffect, useState } from 'react';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

// Custom Tippy wrapper to handle ref forwarding
const TippyWrapper = forwardRef(({ children, ...props }, ref) => {
    return (
        <Tippy {...props} ref={ref}>
            {children}
        </Tippy>
    );
});

function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {}, 5000);
        setsearchResult([1, 2, 3]);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <TippyWrapper
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className="box" tabIndex="-1" {...attrs}>
                                Kết quả
                            </div>
                        </PopperWrapper>
                    )}
                >
                    {/* Search */}
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    {/* Search */}
                </TippyWrapper>

                {/* Actions */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
