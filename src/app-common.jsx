/*! Common components */

export const CountTitle = React.memo(({title}) => {
  return <h1>{title}</h1>;
});

export const Count = React.memo(props => {
  return (
    <div>
      <CountTitle title={props.title} />
      <h3>
        Count: <code>{props.count}</code>
      </h3>
    </div>
  );
});
