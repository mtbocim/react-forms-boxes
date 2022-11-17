/**
 * Box: box component
 *
 * State: none
 *
 * Props: a box: {
 *              height:height,
 *              width:width,
 *              backgroundColor:backgroundColor
 *           }
 *
 * App -> BoxList -> Box
 */
export default function Box({
    box: { height, width, backgroundColor },
    removeCb,
}) {
    const btnStyle = {
        top: "0px",
        right: "-40px",
        position: "relative",
        float: "right"
    }
    return (
        <div style={{ height, width, backgroundColor, margin: "10px" }}>
            <button onClick={removeCb} style={btnStyle}>X</button>
        </div>
    );
}
