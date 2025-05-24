import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />
                <div className={cx('logo')}></div>
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;
