import styles from './Search.module.css';

export function Search({ total, search }) {
    return (
        <div className={styles.container}>
            <div>{total} Characters Found</div>
            <form className="search-form">
                <input
                    placeholder="Search"
                    type="text"
                    onChange={search}
                />
            </form>
        </div>
    )
}