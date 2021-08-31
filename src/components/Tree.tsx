import { MockExample } from "../utils/example";

interface TreeProps {
    data: MockExample[]
    setData: (selected: MockExample) => void
}

export const Tree = ({ data, setData }: TreeProps) => {

    return (
        <div className="tree-container" >
            {
                data.map((item, index) =>
                    <div
                        className="tree-item"
                        style={
                            {
                                background: getRandomColor(),
                                height: 200,
                                width: `${item.percent}%`,
                            }
                        }
                        onClick={() => setData(item)}
                    >
                        <span>{item.name}</span>
                        <span>R$ {item.value.toFixed(2)}</span>
                    </div>
                )
            }
        </div>
    )
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

