import React, { useState } from "react";

function AppContainer(props) {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  //kód který mi zajistí, že všechny Children AppContaineru budou mít přístup ke stavu! //
  const updateChildrenWithProps = React.Children.map(
    props.children,
    (child) => {
      return React.cloneElement(child, {
        break: breakLength,
        session: sessionLength,
      });
    }
  );
  return <div className="app">{updateChildrenWithProps}</div>;
}

export default AppContainer;
