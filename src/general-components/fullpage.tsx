import ReactFullpage from "@fullpage/react-fullpage";
import React, { useRef } from "react";

const FullpageWrapper = (props: { InputComponents: any, anchors: any }) => {
    const fullpageRef: any = useRef(null);

    const handleAfterLoad = (origin: any, destination: any) => {
      if (fullpageRef.current && fullpageRef.current.fullpage_api && destination.anchor) {
        fullpageRef.current.fullpage_api.moveTo(destination.anchor);
      }
    };

    return (
    <ReactFullpage
        //debug /* Debug logging */        
        licenseKey={"AA978155-0B054995-AD71B310-9FF6EA3C"}
        navigation={true}
        afterLoad={handleAfterLoad}
        ref={fullpageRef}
        anchors={props.anchors}
        sectionSelector={'.custom-section'}
        sectionsColor={ Array(20).fill("black")}
        render={(comp) => (
        <ReactFullpage.Wrapper>
            <props.InputComponents/>
        </ReactFullpage.Wrapper>
        )}
    />
)};
  
export default FullpageWrapper;

