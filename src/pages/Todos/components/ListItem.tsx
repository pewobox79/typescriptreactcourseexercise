import styles from '../style/ListItem.module.css'

type ListItemType={
    title: string,
    description: string,
    uuid: string
}

export default function ListItem({title, description, uuid}:ListItemType){
    return(
        <div className={styles.itemElement}>
            <h4>{title}</h4>
            <p>{description}</p>
            <div>
                <button>Delete</button>
                <button>Edit</button></div>

        </div>
    )
}