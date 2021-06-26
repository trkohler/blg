import { jsx, Heading } from "theme-ui"

type tableOfContentProps = {
    items: {
        id: string
        heading: string
    }[]
}

const TableOfContent = ({items}: tableOfContentProps) => {
    return (
    <div>
        <Heading as='h3' variant="styles.h3">
                    Содержание
        </Heading>
        <ul>
        {items.map(item => {
            return (
            <li key={item.id}>
                <strong>{item.heading}</strong>
            </li>
            )
        })}
        </ul>
    </div>
    )
}

export default TableOfContent