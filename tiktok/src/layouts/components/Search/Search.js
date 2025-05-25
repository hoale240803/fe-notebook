import HeaderlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames';
import { useState } from 'react';
import PopperWrapper from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(false);
    const [loading, setloading] = useState(false);

    const deboundValue = useDebounce(searchValue, 500);

    return (
        <div>
            <HeaderlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')}>
                        <PopperWrapper>
                            <h4 className={cx('search-tile')}></h4>
                        </PopperWrapper>
                    </div>
                )}
            ></HeaderlessTippy>
        </div>
    );
}

export default Search;
