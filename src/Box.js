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
  return (
    <div style={{ height, width, backgroundColor }}>
      <button onClick={removeCb}>X</button>
    </div>
  );
}
